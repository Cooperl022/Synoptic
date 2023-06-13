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

  var sql = 'select * from foodPlaces'
  synopticModel.query(sql, function (error, placesResult) {
    if (error) throw error;

  var sql = 'select * from stock'
  synopticModel.query(sql, function (error, stockResult) {
    if (error) throw error;

      res.render('admin', {
        pending: pendingResult,
        loggedIn: req.session.loggedIn,
        accountType: req.session.accountType,
        foodPlaces: placesResult,
        stock: stockResult
      });
    });
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
      const pInfo = result[0].business_info;
      const pAddress = result[0].address;
      const pEmail = result[0].email;
      const pPostcode = result[0].postcode;

      var sql = 'insert into foodPlaces (place_name, place_description, place_username, place_address, place_email, place_postcode) VALUES (?, ?, ?, ?, ?, ?)';
      synopticModel.query(sql, [pName, pInfo, pUsername, pAddress, pEmail, pPostcode]);

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

router.post('/addStock', function (req, res, next) {
  const place_id = req.body.place_id
  const itemName = req.body.itemName
  const itemDesc = req.body.description
  const expiry = req.body.expiryDate
  const quantity = req.body.quantity
  const filter = req.body.filter

  var sql = 'insert into stock (place_id, item_name, item_description, expiry, quantity, filter) VALUES (?, ?, ?, ?, ?, ?)';
  synopticModel.query(sql, [place_id, itemName, itemDesc, expiry, quantity, filter], function (error, result) {
    if (error) throw error;
    res.redirect('back')
  }); 
});

router.post('/deleteStock', function (req, res, next) {
  const stockID = req.body.stockID

  var sql = 'delete from stock where id = ?';
  synopticModel.query(sql, [stockID], function (error, result) {
    if (error) throw error;
    res.redirect('back')
  }); 
});

module.exports = router;
