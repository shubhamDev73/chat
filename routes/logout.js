var express = require('express');
var appHolder = require('../app');
var router = express.Router();

router.get('/', function(req, res, next){
	appHolder.app.locals.username = "";
	res.redirect('/');
});

module.exports = router;
