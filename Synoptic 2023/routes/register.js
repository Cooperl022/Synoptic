const userModel = require('../models/synoptic');
var express = require('express');
var router = express.Router();

var crypto = require('crypto');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register');
}); 

/* Register user */
router.post('/', function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
  
    const hash = crypto.createHash('md5').update(password).digest('hex');
    
    var sql = 'select * from users where username = ?';
    userModel.query(sql, [username], function (error, result) {
      if (error) throw error;
      if (result.length > 0) {
        //Username taken
        res.render('register', { status: "Invalid Username" }); }
      else if (password.length < 3) {
        res.render('register', { status: "Password is too short"}) }
      else if (password != confirmPassword) {
        res.render('register', { status: "Password does not match"}) }
      else {    
        //Username not taken
        sql = 'insert into users (first_name, last_name, username, userpassword, email) VALUES (?, ?, ?, ?, ?)';
        userModel.query(sql, [fName, lName, username, hash, email]);    
        res.render('register', { status: "Account Created" }); 
        }
    }); 
  });

module.exports = router;