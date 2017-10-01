$(document).ready(function(){
	$("#chatSend").submit(function(e){
		e.preventDefault();
		var text = $("#chatInput").val();
		var chat = $("#chatDisp");
		chat.html(function(x, oldHtml){
			oldHtml += '			<span id="remove">\n'
			oldHtml += '				<h3>'+$("#nickname").html()+'</h3>\n';
			oldHtml += '				<p>'+text+'<span id="status">&nbsp;&nbsp;&nbsp;&nbsp;sending...</span></p><br><span>';
			return oldHtml;
		});
		chat.scrollTop(chat[0].scrollHeight);
		$("#chatInput").val("");
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				$("#status").remove();
			}
		}
		req.open("GET", "/submit/?text="+text, true);
		req.send();
	});
});
