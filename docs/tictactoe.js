var url = "http://localhost:8080/";
// var url = "https://hidden-spire-43960.herokuapp.com/";

var boxStatus = [true, true, true, true, true, true, true, true, true, true];
var loading = false;

function showLoading(){
    loading = true;
    document.getElementById("loading").className = "loading";
}

function hideLoading(){
    loading = false;
    document.getElementById("loading").className = "hide-element loading";
}

function getGameInfo(){
    showLoading();

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + "table", false);
    xmlHttp.send( null );

    hideLoading();
    return JSON.parse(xmlHttp.response); 
}

function requestAMov(position){
    showLoading();

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url + "make_mov", false);
    xmlHttp.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify({"position": position});
    xmlHttp.send(data);

    hideLoading();
    return JSON.parse(xmlHttp.response);
}

function requestNewGame(){
    showLoading();

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url + "new_game", false);
    xmlHttp.send();

    hideLoading();
    return JSON.parse(xmlHttp.response);
}

function updateGrid(gridInfo){
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            var symb = gridInfo[i][j];
            var numb = 3*i+j+1;
            var id = "box"+numb;

            if(symb == "_"){
                boxStatus[numb-1] = true;
                document.getElementById(id).className = "box";
            } else {
                boxStatus[numb-1] = false
                document.getElementById(id).className = "box--disable box";
            }
        }
    }
}

function updateGame(gameInfo){
    updateGrid(gameInfo.representation);
    if(gameInfo.ended){
        document.getElementById("endGame").className = "subtitle";
    } else {
        document.getElementById("endGame").className = "hide-element subtitle";
    }
}

function selectBox(value){
    if(!boxStatus[value] || loading){
        return;
    }
    
    value = value + 1;
    var gameInfo = requestAMov(value);
    updateGame(gameInfo);
}

function newGame(){
    var gameInfo = requestNewGame();
    updateGame(gameInfo);
}

window.onload = function () {
    var gameInfo = getGameInfo();
    updateGame(gameInfo);
}