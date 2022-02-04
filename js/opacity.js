var id=0;
document.getElementById("fadein").addEventListener("click",hide);
function hide(){
    id=setInterval(hideStart,1000);
}

let opacity=0;
function hideStart(){
    var headi=document.getElementById("hel");

    opacity=Number(window.getComputedStyle(headi).getPropertyValue("opacity"));
    if(opacity>0)
    {
        opacity=opacity-0.1;
        headi.style.opacity=opacity;

    }
    else{
        clearInterval(id);
    }
    
}

////////////////

document.getElementById("fadeout").addEventListener("click",unhide);

function unhide(){
    id=setInterval(show,1000);
}


function show(){
    var headi=document.getElementById("hel");

    opacity=Number(window.getComputedStyle(headi).getPropertyValue("opacity"));
    if(opacity<1)
    {
        opacity=opacity+0.1;
        headi.style.opacity=opacity;

    }
    else{
        clearInterval(id);
    }
    
    
}