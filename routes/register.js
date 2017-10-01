var express = require('express');
var appHolder = require('../app');
var router = express.Router();

router.post('/', function(req, res, next) {
	appHolder.app.locals.username = req.body.username;
	res.redirect('/chat/');
});

module.exports = router;
