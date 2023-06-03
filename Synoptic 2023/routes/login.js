const synopticModel = require('../models/synoptic');
var express = require('express');
var router = express.Router();

var crypto = require('crypto');

/* Login user */
router.post('/', function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const hash = crypto.createHash('md5').update(password).digest('hex');
  var sql = 'select * from users where username = ? and userpassword = ?';
  synopticModel.query(sql, [username, hash], function (error, result) {
    if (error) throw error;
    if (result.length > 0) {
      req.session.loggedIn = true;
      req.session.username = username;
      req.session.accountType = result[0].account_type;
      res.redirect('back');
    } 
    else {
      res.redirect('back'); }
      //res.render('index', { status: "Invalid Username or Password" }); }
  });
});


module.exports = router;