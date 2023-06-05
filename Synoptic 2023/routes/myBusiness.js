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

    res.render('myBusiness', { placeInfo: infoResult[0], stock: stockResult, loggedIn: req.session.loggedIn, accountType: req.session.accountType });
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
    const expiry = req.body.ExpiryDate
    const quantity = req.body.Quantity

    var sql = 'insert into stock (place_id, item_name, item_description, expiry, quantity) VALUES (?, ?, ?, ?, ?)';
    synopticModel.query(sql, [place_id, item_name, item_description, expiry, quantity], function (error, result) {
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

  if (toUpdate == "placeNameText") {
    //update place name with new text
    var sql = 'update foodPlaces set place_name = ? where place_username = ?';
  } 
  else if (toUpdate == "placeDescText") {
    //Update desc with new text
    var sql = 'update foodPlaces set place_description = ? where place_username  = ?';
  }
  synopticModel.query(sql, [newText, req.session.username], function (error, result) {
    if (error) throw error;
  }); 
});

module.exports = router;
