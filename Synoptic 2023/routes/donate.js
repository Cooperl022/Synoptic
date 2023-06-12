const synopticModel = require('../models/synoptic');
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'signupbackendtestuser@gmail.com',
    pass: 'sxnltfhekpjeqspt'
  },
});

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
  const place_address = req.body.place_name;

  var sql = 'select place_email from foodPlaces where place_address = ?';
  synopticModel.query(sql, [place_address], function(error, result) {

    if (error) throw error

    const place_email = result[0].place_email;
    console.log(place_email);

    var sql = 'select email from users where username = ?';
    synopticModel.query(sql, [donor], function(error, result) {

      if (error) throw error

      const donor_email = result[0].email;
      console.log(donor_email);


      var mailOptions = {
        from: 'signupbackendtestuser@gmail.com',
        to: [donor_email, place_email],
        subject: 'Donation Confirmation',
        text: 'Items will be sent'
      };

      transporter.sendMail(mailOptions, (error, info)=>{
        if (error) {
          console.log(error);
        }
        else {
          console.log('Email sent: ' + info.response);
        }
      })
    });
  });

  var sql = 'select id from foodPlaces where place_name = ?';
  synopticModel.query(sql, [place_name], function (error, place_id) {
      if (error) throw error;

  var sql = 'insert into donations (donor_username, place_id) VALUES (?, ?)';
  synopticModel.query(sql, [donor, place_id[0]], function (error, donationID) {
      if (error) throw error;
  
  var sql = 'select LAST_INSERT_ID() AS last';
  synopticModel.query(sql, function (error, lastID) {
    if (error) throw error;
    lastID = lastID[0].last

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
});

module.exports = router;
