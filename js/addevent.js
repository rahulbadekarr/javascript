document.getElementById("top").addEventListener("click",fname);

document.getElementById("top").addEventListener("dblclick",function(){
    this.style.background="green";
});

function fname(){
    //document.getElementById("top").style.background="red"; use this or below ,it works same
    this.style.background="red";
};


//Focus,input and blur,change function

document.getElementById("inptext").addEventListener("focus",foCus);
document.getElementById("inpsir").addEventListener("focus",foCus);
function foCus(){
    this.style.background="tan";
}

document.getElementById("inptext").addEventListener("blur",blurring);
document.getElementById("inpsir").addEventListener("blur",blurring);
function blurring(){
    this.style.background="";
}

document.getElementById("inptext").addEventListener("input",inputFunc);
function inputFunc(){
    var x=this.value;
    document.getElementById("testtext").innerHTML= x ;
};

document.getElementById("inpch").addEventListener("change",onChang);
function onChang(){
    var x= this.value;
    document.getElementById("testtext").innerHTML= x ;
};

// document.getElementById("inpch").addEventListener("select",onChang);
// function onChang(){
//     var x= this.value;
//     document.getElementById("testtext").innerHTML= x ;
// };

function subFunction(){
    var name=document.getElementById("inptext").value;
    alert("Name is "+ name);
};