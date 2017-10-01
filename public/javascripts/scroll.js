$(document).ready(function(){
	var chat = $("#chatDisp");
	chat.scrollTop(chat[0].scrollHeight);
	chat.mousemove(function(e){
		if(chat.scrollTop() <= 10){
			//do stuff
		}
	});
});
