
var width = 100;
var difference = 2;
var id = 0;

document.getElementById("box1").addEventListener("mouseenter", increaseSize);

function increaseSize() {
    id = setInterval(zoomIn, 30);
    alert("mousein");

}

function zoomIn() {
    if (width < 200) {
        width = width + difference;
        document.getElementById("box1").style.width = width;

    }
    else {
        clearInterval(id);
    }
}

document.getElementById("box1").addEventListener("mouseout", decreaseSize);

function decreaseSize() {
    //id=setInterval(incresing,30);
    //alert("mouseout");

}