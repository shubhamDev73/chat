$(document).ready(function(){
	var chat = $("#chatDisp");
	chat.scrollTop(chat[0].scrollHeight);
	function update(){
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				if(req.responseText != ''){
					if($("#remove")) $("#remove").remove();
					chatData = JSON.parse(req.responseText);
					chat.html(function(x, oldHtml){
						oldHtml += '			<h3>'+chatData.chats[0][0]+'</h3>\n';
						oldHtml += '			<p>'+chatData.chats[0][1]+'</p><br>';
						return oldHtml;
					});
					chat.scrollTop(chat[0].scrollHeight);
				}
				update();
			}
		}
		req.open("POST", "/update/", true);
		req.send();
	}
	update();
});
