var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
	if(!req.session.nickname){
		res.redirect('/');
	}else{
		fs.readFile(path.dirname(__dirname)+'/chatData.json', 'utf-8', function(err, txt){
			if(err){
				console.log(err);
				res.redirect('/logout/');
			}
			else{
				res.render('chat', {nickname: req.session.nickname, chatData: JSON.parse(txt)});
			}
		});
	}
});

module.exports = router;
