function selectBox(value){
    value = value + 1
    var id = "box" + value
    document.getElementById(id).className = "box--disable box";
}

window.onload = function () {
    for(var i = 1; i < 10; i++){
        var id = "box" + i
        document.getElementById(id).className = "box";
    }

    document.getElementById("loading").className = "hide-element loading";
}