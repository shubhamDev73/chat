$(document).ready(function(){
	function update(){
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				if(req.responseText != ''){
					if($("#remove0")) $("#remove0").remove();
					if($("#remove1")) $("#remove1").remove();
					chatData = JSON.parse(req.responseText);
					var chat = $("#chatDisp");
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
