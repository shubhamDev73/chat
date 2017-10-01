var fs = require('fs');
var path = require('path');

module.exports.addChat = function(username, chat){
	fs.readFile(path.dirname(__dirname)+'/chatData.json', 'utf-8', function(err, txt){
		if(err) console.log(err);
		else{
			var chatData = JSON.parse(txt);
			chatData.chats.unshift([username, chat]);
			fs.writeFile(path.dirname(__dirname)+'/chatData.json', JSON.stringify(chatData, null, 2), function(error){if(error)console.log(error)});
		}
	});
}
