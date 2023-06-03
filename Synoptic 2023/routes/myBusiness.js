const synopticModel = require('../models/synoptic');
var express = require('express');
var router = express.Router();

/* GET business page. */
router.get('/', function(req, res, next) {
  if (req.session.accountType != 'business') {
    res.redirect('/')
  }
  else {
    
    var sql = 'select * from foodPlaces where place_owner = ?'
    synopticModel.query(sql, [req.session.username], function (error, infoResult) {
        if (error) throw error;
        const place_name = infoResult[0].place_name

    sql = 'select * from stock where place_name = ?'
    synopticModel.query(sql, [place_name], function (error, stockResult) {
        if (error) throw error;

    res.render('myBusiness', { placeInfo: infoResult[0], stock: stockResult, loggedIn: req.session.loggedIn, accountType: req.session.accountType });
    });  
    });  
    }
});

module.exports = router;
