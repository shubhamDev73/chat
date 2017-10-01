var express = require('express');
var appHolder = require('../app');
var router = express.Router();

router.get('/', function(req, res, next) {
	if(appHolder.app.locals.username == ''){
		res.redirect('/');
	}else{
		res.render('chat');
	}
});

module.exports = router;
