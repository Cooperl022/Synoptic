var express = require('express');
var router = express.Router();

/* Logout user. */
router.get('/', function(req, res, next) {
    if (req.session.loggedIn) {
        req.session.destroy();
    }
    res.redirect('back');
});

module.exports = router;