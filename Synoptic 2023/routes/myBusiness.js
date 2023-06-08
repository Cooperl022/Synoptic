const synopticModel = require('../models/synoptic');
var express = require('express');
var router = express.Router();

/* GET business page. */
router.get('/', function(req, res, next) {
  if (req.session.accountType != 'business') {
    res.redirect('/')
  }
  else {
    
    var sql = 'select * from foodPlaces where place_username = ?'
    synopticModel.query(sql, [req.session.username], function (error, infoResult) {
        if (error) throw error;
        const place_id = infoResult[0].id

    sql = 'select * from stock where place_id = ?'
    synopticModel.query(sql, [place_id], function (error, stockResult) {
        if (error) throw error;

    sql = 'select * from donations where place_id = ?'
    synopticModel.query(sql, [place_id], function (error, donations) {
        if (error) throw error;
    
    var donationIds = []
    for (i = 0; i < donations.length; i++) {
      donationIds.push(donations[i].id)
    }

    if (donationIds.length == 0) { 
        donationItems = []
        res.render('myBusiness', { placeInfo: infoResult[0], stock: stockResult, loggedIn: req.session.loggedIn, accountType: req.session.accountType, donations: donations, donationItems: donationItems });    
    } else {
      sql = 'select * from donation_items where donation_id in (?)'
      synopticModel.query(sql, [donationIds], function (error, donationItems) {
        if (error) throw error;   
        res.render('myBusiness', { placeInfo: infoResult[0], stock: stockResult, loggedIn: req.session.loggedIn, accountType: req.session.accountType, donations: donations, donationItems: donationItems });    
    })
  }
    })
    });
    });  
  }
});

/* Add stock */
router.post('/', function (req, res, next) {
    var sql = 'select * from foodPlaces where place_username = ?'
    synopticModel.query(sql, [req.session.username], function (error, infoResult) {
        if (error) throw error;
        const place_id = infoResult[0].id;
    
    const item_name = req.body.ItemName
    const item_description = req.body.ItemDesc
    const inputExpiry = req.body.ExpiryDate
    const quantity = req.body.Quantity
    var filter = "";
    if (req.body.Halal) {
      filter += req.body.Halal + ' '
    } 
    if (req.body.Kosher) {
      filter += req.body.Kosher + ' '
    } 
    if (req.body.Vegetarian) {
      filter += req.body.Vegetarian
    } 
    filter.trim()

    var date = new Date(inputExpiry)
    if (!isNaN(date.getTime())) {
        expiry = (('0'+(date.getDate())).slice(-2)+ '/' + ('0'+(date.getMonth()+1)).slice(-2) + '/' + date.getFullYear().toString().substr(-2))
    }

    var sql = 'insert into stock (place_id, item_name, item_description, expiry, quantity, filter) VALUES (?, ?, ?, ?, ?, ?)';
    synopticModel.query(sql, [place_id, item_name, item_description, expiry, quantity, filter], function (error, result) {
      if (error) throw error;
      res.redirect('back')
    }); 
    });
  });

/* Delete stock */
router.post('/deleteStock', function (req, res, next) {
  const rowID = req.body.rowID

  var sql = 'delete from stock where id = ?';
  synopticModel.query(sql, [rowID], function (error, result) {
    if (error) throw error;
    res.redirect('/myBusiness')
  }); 
});

/* Update info */
router.post('/updateInfo', function (req, res, next) {
  const newText = req.body.newText
  const toUpdate = req.body.toUpdate

  if (toUpdate == "myBusinessTitle") {
    //update place name with new text
    var sql = 'update foodPlaces set place_name = ? where place_username = ?';
  } 
  else if (toUpdate == "Information") {
    //Update desc with new text
    var sql = 'update foodPlaces set place_description = ? where place_username  = ?';
  }
  synopticModel.query(sql, [newText, req.session.username], function (error, result) {
    if (error) throw error;
  }); 
});

/* Delete donation item */
router.post('/deleteDonationItem', function (req, res, next) {
  const rowID = req.body.rowID
  const itemID = rowID.split("-")[1]

  var sql = 'delete from donation_items where id = ?';
  synopticModel.query(sql, [itemID], function (error, result) {
    if (error) throw error;
    res.redirect('/myBusiness')
  }); 
});

/* Delete entire donation */
router.post('/deleteDonation', function (req, res, next) {
  const tableID = req.body.tableID
  const donationID = tableID.split("-")[0]

  var sql = 'delete from donations where id = ?';
  synopticModel.query(sql, [donationID], function (error, result) {
    if (error) throw error;

  //Delete all items in donation
  var sql = 'delete from donation_items where donation_id = ?';
  synopticModel.query(sql, [donationID], function (error, result) {
    if (error) throw error;
    res.redirect('/myBusiness')
  }); 
  }); 
});

module.exports = router;