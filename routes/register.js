var express = require('express');
var appHolder = require('../app');
var router = express.Router();

router.post('/', function(req, res, next) {
	req.session.nickname = req.body.nickname;
	req.session.updated = 0;
	appHolder.app.locals.users++;
	res.redirect('/chat/');
});

module.exports = router;
