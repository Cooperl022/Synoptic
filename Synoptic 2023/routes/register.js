const synopticModel = require('../models/synoptic');
var express = require('express');
var router = express.Router();

var crypto = require('crypto');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var sql = 'select * from foodPlaces'
    synopticModel.query(sql, function (error, placesResult) {
        if (error) throw error;

        res.render('register', { foodPlaces: placesResult, loggedIn: req.session.loggedIn, accountType: req.session.accountType });
    });
});

/* Register user */
router.post('/', function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    //const confirmPassword = req.body.confirmPassword;
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const isBusiness = req.body.isBusiness;
    const bName = req.body.bName;
    const bAddress = req.body.bAddress;
    const postcode = req.body.postcode;

    const hash = crypto.createHash('md5').update(password).digest('hex');

    var sql = 'select * from users where username = ?';
    synopticModel.query(sql, [username], function (error, result) {
      if (error) throw error;
      if (result.length > 0) {
        //Username taken
          res.redirect('/');}
      else if (password.length < 3) {
          res.redirect('/');}
      else if (isBusiness == 'yes'){
          sql = 'insert into pending (username, email, address, business_name, postcode) VALUES (?, ?, ?, ?, ?)';
          synopticModel.query(sql, [username, email, bAddress, bName, postcode]);
          sql = 'insert into users (first_name, last_name, username, userpassword, email) VALUES (?, ?, ?, ?, ?)';
          synopticModel.query(sql, [fName, lName, username, hash, email]);
          res.redirect('/');
      }
      //else if (password != confirmPassword) {
        //res.render('index', { status: "Password does not match"}) }
      else {
        //Username not taken
        sql = 'insert into users (first_name, last_name, username, userpassword, email) VALUES (?, ?, ?, ?, ?)';
        synopticModel.query(sql, [fName, lName, username, hash, email]);
          res.redirect('/');
        }
    });
  });

module.exports = router;