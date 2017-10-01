var fs = require('fs');
var path = require('path');
var appHolder = require('../app');

module.exports.addChat = function(nickname, chat){
	fs.readFile(path.dirname(__dirname)+'/chatData.json', 'utf-8', function(err, txt){
		if(err) console.log(err);
		else{
			var chatData = JSON.parse(txt);
			chatData.chats.unshift([nickname, chat]);
			fs.writeFile(path.dirname(__dirname)+'/chatData.json', JSON.stringify(chatData, null, 2), function(error){
				if(error) console.log(error);
				else{
					fs.readFile(path.dirname(__dirname)+'/chatData.json', 'utf-8', function(err, txt){
						if(err) console.log(err);
						else{
							appHolder.app.locals.chatData = JSON.parse(txt);
							appHolder.eventEmitter.emit('jsonUpdated');
						}
					});
				}
			});
		}
	});
}
