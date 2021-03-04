const express = require('express');
const router = express.Router();

const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

/* GET home page. */
router.get('/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    email: req.user.email,
    nickname: req.user.nickname,
    isAuth: true,
  });
});

router.post('/', (req, res) => {
  User.find().
    where('email').equals(req.body.email)
    .exec((err, user) => {
      if (err) return res.status(400).json({ success: false, err })

      if (user.length >= 1) {
        return res.json({ isDuplicated: true, message: "중복된 Email 주소입니다." });
      } else {
        const user = new User(req.body);
        user.save((err, user) => {
          if (err) return res.status(400).json({ success: false, err });
          return res.status(200).json({ success: true, message: "회원가입이 완료되었습니다." });
        })
      }
    })
})

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({ loginSuccess: false, message: "Email이 존재하지 않습니다." })
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
      }

      user.generateToken((err, user) => {
        if (err) return res.status(400).json({ success: false, err })
        res.cookie("w_authExp", user.tokenExp)
          .cookie("nickname", user.nickname)
          .cookie("w_auth", user.token)
          .status(200)
          .json({
            loginSuccess: true, userId: user._id
          });
      })
    })
  })
})

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true
    });
  });
});

module.exports = router;
