$(document).ready(function(){
	var socket = io();
	socket.on('jsonUpdated'){
		alert("Called");
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				alert("Received");
				//chatData = JSON.parse(req.responseText);
				/*chat.html(function(x, oldHtml){
					oldHtml += '			<h3>'+$("#nickname").html()+'</h3>\n';
					oldHtml += '			<p>'+text+'<span id="status">&nbsp;&nbsp;&nbsp;&nbsp;sending...</span></p><br>';
					return oldHtml;
				});*/
			}
		}
		req.open("GET", "../chatData.json", true);
		req.send();
	}
});
