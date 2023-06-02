const userModel = require('../models/synoptic');
var express = require('express');
var router = express.Router();

/* GET food page. */
router.get('/', function(req, res, next) {

  var sql = 'select * from foodPlaces'
  userModel.query(sql, function (error, placesResult) {
    if (error) throw error;

  sql = 'select * from stock'
  userModel.query(sql, function (error, stockResult) {
    if (error) throw error;
    res.render('food', { foodPlaces: placesResult, stock: stockResult, loggedIn: req.session.loggedIn, accountType: req.session.accountType });
  });
  });
});

module.exports = router;