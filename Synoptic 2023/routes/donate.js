const synopticModel = require('../models/synoptic');
var express = require('express');
var router = express.Router();

/* GET donate page. */
router.get('/', function(req, res, next) {
  var sql = 'select * from foodPlaces'
  synopticModel.query(sql, function (error, placesResult) {
    if (error) throw error;
    res.render('donate', { foodPlaces: placesResult, loggedIn: req.session.loggedIn, accountType: req.session.accountType } );
    });
});

/* Add Donation */
router.post('/addDonation', function (req, res, next) {
  const donor = req.session.username
  const place_name = req.body.place_name

  var sql = 'insert into donations (donor_username, place_name) VALUES (?, ?)';
  synopticModel.query(sql, [donor, place_name], function (error, donationID) {
      if (error) throw error;
  
  var sql = 'select LAST_INSERT_ID() AS last';
  synopticModel.query(sql, function (error, lastID) {
    if (error) throw error;
    lastID = lastID[0].last
    console.log(lastID)

  var sql = 'insert into donation_items (donation_id, item_name, item_description, quantity, expiry) VALUES (?, ?, ?, ?, ?)';
  for (i = 0; i < req.body.itemNames.length; i++) {
    var itemName = req.body.itemNames[i] 
    var desc = req.body.descriptions[i] 
    var expiry = req.body.expiryDates[i] 
    var quant = req.body.quants[i] 
    synopticModel.query(sql, [lastID, itemName, desc, quant, expiry], function (error, donationID) {
      if (error) throw error;
    }); 
  } 
  }); 
  });
});

module.exports = router;
