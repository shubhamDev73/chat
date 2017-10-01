var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if(!req.session.nickname){
		res.redirect('/');
	}else{
		res.render('chat', {nickname: req.session.nickname});
	}
});

module.exports = router;
