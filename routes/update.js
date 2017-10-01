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
		//0 - base, 1 - have to update, 2 - updated
		if(req.session.updated == 0) req.session.updated = 1
	}else req.session.updated = 0;
	if(req.session.updated == 1){
		fs.readFile(path.dirname(__dirname)+'/chatData.json', 'utf-8', function(err, txt){
			if(err){
				console.log(err);
				res.send('');
			}
			else{
				res.send(txt);
				req.session.updated = 2;
				appHolder.app.locals.usersToDo--;
				if(appHolder.app.locals.usersToDo <= 0){
					appHolder.app.locals.updated = false;
				}
			}
		});
	}else{
		res.send('');
	}
});

module.exports = router;
