var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/hello', function(req, res, next) {
  res.json([
    {id: 1, username: "test"},
    {id: 2, username: "somebody_else"}
  ]);
});

module.exports = router;
