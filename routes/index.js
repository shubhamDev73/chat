var express = require('express');
var appHolder = require('../app');
var router = express.Router();

router.get('/', function(req, res, next) {
	if(appHolder.app.locals.username == ''){
		res.render('index');
	}else{
		res.redirect('/chat/');
	}
});

module.exports = router;


//get:  req.param('a')
//post: req.body.a
