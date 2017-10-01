var express = require('express');
var appHolder = require('../app');
var fs = require('fs');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.redirect('/');
});

router.post('/', function(req, res, next) {
	if(appHolder.app.locals.updated){
		fs.readFile(path.dirname(__dirname)+'/chatData.json', 'utf-8', function(err, txt){
			if(err){
				console.log(err);
				res.send('');
			}
			else{
				res.send(txt);
				appHolder.app.locals.updated = false;
			}
		});
	}else{
		res.send('');
	}
});

module.exports = router;
