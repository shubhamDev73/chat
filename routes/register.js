var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	req.session.nickname = req.body.nickname;
	res.redirect('/chat/');
});

module.exports = router;
