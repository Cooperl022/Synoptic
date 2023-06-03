var express = require('express');
var router = express.Router();

/* GET business page. */
router.get('/', function(req, res, next) {
  res.render('myBusiness', { loggedIn: req.session.loggedIn, accountType: req.session.accountType });
});

module.exports = router;
