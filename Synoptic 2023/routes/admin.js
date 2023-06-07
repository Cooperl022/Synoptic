var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
  if (req.session.accountType != 'admin') {
    res.redirect('/')
  }
  else {
  res.render('admin', { loggedIn: req.session.loggedIn, accountType: req.session.accountType })
  }
});

module.exports = router;
