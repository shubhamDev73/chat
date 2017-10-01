$(document).ready(function(){
	var socket = io();
	var chat = $("#chatDisp");
	$("#chatSend").submit(function(e){
		e.preventDefault();
		var nickname = $("#nickname").html();
		var text = $("#chatInput").val();
		chat.html(function(x, oldHtml){
			oldHtml += '			<span id="remove">\n'
			oldHtml += '				<h3>'+nickname+'</h3>\n';
			oldHtml += '				<p>'+text+'&nbsp;&nbsp;&nbsp;&nbsp;sending...</p><br><span>';
			return oldHtml;
		});
		chat.scrollTop(chat[0].scrollHeight);
		$("#chatInput").val("");
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				$("#remove").remove();
				socket.emit('update', [nickname, text]);
			}
		}
		req.open("GET", "/submit/?text="+text, true);
		req.send();
	});
	socket.on('add', function(list){
		chat.html(function(x, oldHtml){
			oldHtml += '			<h3>'+list[0]+'</h3>\n';
			oldHtml += '			<p>'+list[1]+'</p><br>';
			return oldHtml;
		});
		chat.scrollTop(chat[0].scrollHeight);
	});
	chat.scrollTop(chat[0].scrollHeight);
});
