var express = require('express');
const synopticModel = require("../models/synoptic");
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
  if (req.session.accountType != 'admin') {
    res.redirect('/')
  } else {
    var sql = 'select * from pending'
    synopticModel.query(sql, function (error, pendingResult) {
      if (error) throw error;

      res.render('admin', {
        pending: pendingResult,
        loggedIn: req.session.loggedIn,
        accountType: req.session.accountType
      });
    });
  }
});

router.post('/', function (req, res, next) {

  const bName = req.body.bName;

  if (req.body.isAccepted == 'yes') {

    var sql = 'select * from pending where business_name = ?';
    synopticModel.query(sql, [bName], function (error, result) {

      if (error) throw error;
      console.log(result)

      const pUsername = result[0].username;
      const pName = result[0].business_name;
      const pAddress = result[0].address;
      const pEmail = result[0].email;
      const pPostcode = result[0].postcode;

      var sql = 'insert into foodPlaces (place_name, place_username, place_address, place_email, place_postcode) VALUES (?, ?, ?, ?, ?)';
      synopticModel.query(sql, [pName, pUsername, pAddress, pEmail, pPostcode]);

      var sql = 'update users set account_type = "business" where username = ?';
      synopticModel.query(sql, [pUsername]);

      var sql = 'delete from pending where business_name = ?';
      synopticModel.query(sql, [pName]);

      res.redirect('admin');
    });
  } else if (req.body.isAccepted == 'no') {

    var sql = 'delete from pending where business_name = ?';
    synopticModel.query(sql, [bName]);

    res.redirect('admin');
  };
});


module.exports = router;
