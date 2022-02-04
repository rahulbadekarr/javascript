document.getElementById("open").addEventListener('click',openWind);
var newW;
function openWind(){
        newW=window.open("http://www.google.com");
}

document.getElementById("close").addEventListener('click',closeWind);
function closeWind(){
        newW.close();
}

document.getElementById("move").addEventListener('click',moveUp);
function moveUp(){
        window.scrollBy(0,100);
       
}
