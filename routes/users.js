var express = require('express');
var router = express.Router();

var actions = [
    'scratches the butt',
    'howls at the moon',
    'snorts',
    'wags his tail',
    'growl at the friend',
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
      status: 'ok',
      time: Date.now(),
      news: [
          {uid: 1003, name: 'Wolf Forest', action: actions[Math.floor(Math.random()*actions.length)]},
          {uid: 1004, name: 'Simon Fawkes', action: actions[Math.floor(Math.random()*actions.length)]},
          {uid: 1005, name: 'Jarrod Samms', action: actions[Math.floor(Math.random()*actions.length)]},
          {uid: 1003, name: 'Wolf Forest', action: actions[Math.floor(Math.random()*actions.length)]},
          {uid: 1004, name: 'Simon Fawkes', action: actions[Math.floor(Math.random()*actions.length)]},
          {uid: 1005, name: 'Jarrod Samms', action: actions[Math.floor(Math.random()*actions.length)]},
          {uid: 1003, name: 'Wolf Forest', action: actions[Math.floor(Math.random()*actions.length)]},
          {uid: 1004, name: 'Simon Fawkes', action: actions[Math.floor(Math.random()*actions.length)]},
          {uid: 1005, name: 'Jarrod Samms', action: actions[Math.floor(Math.random()*actions.length)]},
      ],
      messages: [
          {uid: 1003, from: 'Wolf Forest', title: 'Title', body: 'Some body message'},
      ],
      profile: {
          ava: 'https://forest-app.herokuapp.com/images/ys5wPIBu_400x400.jpg',
          bg: 'https://forest-app.herokuapp.com/images/bg1.jpg',
          name: 'Wolf Forest',
          email: 'test@wolfforest.ru',
      }
  });
});

module.exports = router;
