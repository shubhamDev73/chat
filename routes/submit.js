var express = require('express');
var router = express.Router();
var add = require('./editChat');

router.get('/', function(req, res, next){
	add.addChat(req.session.nickname, req.query.text);
	res.send();
});

module.exports = router;
