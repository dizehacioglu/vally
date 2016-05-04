var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Valeria Dikovistkaya' });
});

router.get('/resume', function(req, res, next) {
    console.log(req);
  res.render('resume', { title: 'Valeria Dikovistkaya' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Valeria Dikovistkaya' });
});

router.get('/for-fun', function(req, res, next) {
  res.render('for-fun', { title: 'Valeria Dikovistkaya' });
});

router.get('/contact-me', function(req, res, next) {
  res.render('contact-me', { title: 'Valeria Dikovistkaya' });
});



module.exports = router;
