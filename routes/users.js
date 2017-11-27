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
      friends: [
          {uid: 1003, name: 'Wolf Forest', ava: 'https://forest-app.herokuapp.com/images/ava1.jpg', action: actions[Math.floor(Math.random()*actions.length)]},
          {uid: 1004, name: 'Simon Fawkes', ava: 'https://forest-app.herokuapp.com/images/ava2.jpg', action: actions[Math.floor(Math.random()*actions.length)]},
          {uid: 1005, name: 'Jarrod Samms', ava: 'https://forest-app.herokuapp.com/images/ava3.jpg', action: actions[Math.floor(Math.random()*actions.length)]},
      ],
      news: [
          {uid: 1003, from: 'Wolf Forest', title: 'Title 1', body: 'Some body message', image: 'https://forest-app.herokuapp.com/images/nature1.jpg'},
          {uid: 1003, from: 'Wolf Forest', title: 'Title 2', body: 'Some body message', image: 'https://forest-app.herokuapp.com/images/nature2.jpg'},
          {uid: 1003, from: 'Wolf Forest', title: 'Title 3', body: 'Some body message', image: 'https://forest-app.herokuapp.com/images/nature3.jpg'},
          {uid: 1003, from: 'Wolf Forest', title: 'Title 4', body: 'Some body message', image: 'https://forest-app.herokuapp.com/images/nature1.jpg'},
          {uid: 1003, from: 'Wolf Forest', title: 'Title 5', body: 'Some body message', image: 'https://forest-app.herokuapp.com/images/nature2.jpg'},
      ],
      profile: {
          ava: 'https://forest-app.herokuapp.com/images/ava1.jpg',
          bg: 'https://forest-app.herokuapp.com/images/bg1.jpg',
          name: 'Wolf Forest',
          email: 'test@wolfforest.ru',
      }
  });
});

module.exports = router;
