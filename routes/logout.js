var express = require('express');
var appHolder = require('../app');
var router = express.Router();

router.get('/', function(req, res, next){
	req.session.destroy(function(){
		appHolder.app.locals.users--;
		res.redirect('/');
	});
});

module.exports = router;
