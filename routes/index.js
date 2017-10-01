var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if(!req.session.nickname){
		res.render('index');
	}else{
		res.redirect('/chat/');
	}
});

module.exports = router;
