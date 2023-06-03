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

module.exports = router;
