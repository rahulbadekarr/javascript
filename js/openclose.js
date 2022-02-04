
var newWindow;
document.getElementById("open").addEventListener('click',openWindow);
function openWindow(){
    //newWindow=window.open("http://www.google.com","","height=200px,width=200px,left=200px,right=200px,top=200px");
    newWindow=window.open("https://www.google.com","","height=200px,width=200px,left=200px,right=200px,top=200px");
};

document.getElementById("close").addEventListener('click',closeWindow);
function closeWindow(){
    newWindow.close();
};

document.getElementById("resize").addEventListener('click',resizeWindow);
function resizeWindow(){
    //newWindow.resizeTo(800,800);
    //newWindow.resizeBy(500,500);
    //newWindow.moveTo(500,500);
    //newWindow.moveBy(500,500);
    //window.scrollBy(0,250);//x,y AXIS
    //window.scrollTo(0,350);//x,y AXIS
    window.scrollBy(0,-100);//x,y AXIS
};