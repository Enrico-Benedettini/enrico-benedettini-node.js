var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.accepts("html")) {
        res.render('index', { /* model */ });
    } else if (req.accepts("json")) {
        res.json({ /* model */});
    } else {
        res.status(406).end(); //not acceptable
    }
});

module.exports = router;