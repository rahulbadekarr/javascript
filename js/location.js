document.getElementById("loc").addEventListener('click',locFun);
function locFun(){
     location.assign("https://www.google.com");
    //location.reload(); and replace() ,only assign is imp
}

document.getElementById("forward").addEventListener('click',backWard);

function backWard(){
    history.forward();
}