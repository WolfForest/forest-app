var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
      status: 'ok',
      time: Date.now(),
      list: [
          {uid: 1003, name: 'Wolf Forest'},
          {uid: 1004, name: 'Simon Fawkes'},
          {uid: 1005, name: 'Jarrod Samms'},
      ]
  });
});

module.exports = router;
