var clear = setTimeout(animBox, 4000);
function animBox() {
    var target = document.getElementById("box");
    target.style.width = "500px";
};

document.getElementById("stop").addEventListener("click", stopAnim);

function stopAnim() {
    console.log("Stop clicked");
    clearTimeout(clear);
}



// E.g 2
let id=0;
function prinNewmsg()
{
    document.getElementById("hel").innerHTML="4 Seconds over";
}

document.getElementById("starting").addEventListener("click",starTing);
document.getElementById("stopping").addEventListener("click",stopping);

function starTing(){
    id=window.setTimeout(prinNewmsg,4000);
}

function stopping(){
    window.clearTimeout(id);
}