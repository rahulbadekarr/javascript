var a = 0;
var stop = setInterval(moveBox, 200);

function moveBox() {
    if (a == 100) {
        //clearInterval(stop);
        moveRight();
       
    }
    else {
        a = a + 10;
        var target = document.getElementById("box");
        target.style.marginLeft = a + 'px';

    }
}


var b=100;
function moveRight() {

  
    if (b==0){
        clearInterval(stop);
      
    }
    else{
        
        b = b - 10;
        var target = document.getElementById("box");
        target.style.marginLeft = b + 'px';
    }
   

}

// e.g 2
let id=0;
let seconds=0;
function prinNewmsg()
{
    document.getElementById("hel").innerHTML= seconds+" Seconds over";
    seconds++;
}

document.getElementById("starting").addEventListener("click",starTing);
document.getElementById("stopping").addEventListener("click",stopping);

function starTing(){
    id=setInterval(prinNewmsg,1000);
}

function stopping(){
    clearInterval(id);
}
