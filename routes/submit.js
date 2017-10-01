var express = require('express');
var router = express.Router();
var appHolder = require('../app');
var add = require('./editChat');

router.get('/', function(req, res, next){
	add.addChat(appHolder.app.locals.username, req.query.text);
	appHolder.app.locals.chatData = require('../chatData.json');
	res.send();
});

module.exports = router;
