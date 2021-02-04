var express = require('express');
var router = express.Router();
const { User } = require("../models/User");

/* GET home page. */
router.get('/', function (req, res, next) {
  User.find()
    .exec((err, doc) => {
      if (err) return res.status(400).json({ success: false, err, test: "test" })
      res.status(200).json({ success: true, 'user': doc });
    })
});

router.get('/:userId', (req, res) => {
  const post = new Post(req.body);

  post.save((err, doc) => {
    if (err) return res.status(400).json({ success: false, err })
    res.status(200).json({ success: true, 'post': doc });
  })
})

router.post('/', (req, res) => {
  new User({
    nickname: 'test'
  }).save((err, doc) => {
    if (err) return res.status(400).json({ success: false, err })
    res.status(200).json({ success: true, 'user': doc });
  })

})

module.exports = router;
