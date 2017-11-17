var express = require('express');
var router = express.Router();

/* GET home page. */
var count = 0;
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', count: ++count });
});

module.exports = router;
