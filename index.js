var songSelected = sessionStorage.getItem("songSelected");

function backButtonClick(){
    window.location.replace("./index.html");
}

function songClick(song){
    window.location.replace("./songInfo.html");
    var songSelected = song;
    sessionStorage.setItem("songSelected", songSelected);
}
