var express = require('express');
var router = express.Router();

/* welcome to mydata.pug */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Amulya Boggavarapu' });
});

module.exports = router;
