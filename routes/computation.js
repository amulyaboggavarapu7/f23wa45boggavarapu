var express = require('express');
var router = express.Router();

/* welcome to computation.pug */
router.get('/', function(req, res, next) {
  res.render('computation', { title: 'Amulya Boggavarapu' });
});

module.exports = router;
