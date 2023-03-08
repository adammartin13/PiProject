var musicData = [{"name":"08 All Your'n.mp3"},{"name":"test.mp3"},{"name":"test2.mp3"}];
for (var it = 0; it < musicData.length; it++){ console.log(musicData[it].name)}
function updateTable(){
	var tableHeader = "<tr><th style=\"text-align:left;border-left:none;\">Files</th>" + 
	"<th><img src=\"./images/desktop.png\" alt=\"desktop\" width=\"40px\" height=\"40px\"></th>" + 
	"<th><img src=\"./images/cellphone.png\" alt=\"cellphone\" width=\"40px\" height=\"40px\"></th>" + 
	"<th><img src=\"./images/googleDrive.png\" alt=\"Google Drive\" width=\"40px\" height=\"40px\"></th></tr>";
	var songList = "";
	for (var it = 0; it < musicData.length; it++){ 
		songList += "<tr><td class=\"song\"><button onclick=\"songClick()\">" + musicData[it].name + "</button></td><td>X</td><td>X</td><td>X</td></tr>";
	}	document.getElementById('listData').innerHTML = tableHeader + songList;
}
window.onload = updateTable;
