var express = require('express');
const synopticModel = require("../models/synoptic");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var sql = 'select * from foodPlaces'
  synopticModel.query(sql, function (error, placesResult) {
    if (error) throw error;

    res.render('index', { foodPlaces: placesResult, loggedIn: req.session.loggedIn, accountType: req.session.accountType });
  });
});

module.exports = router;
