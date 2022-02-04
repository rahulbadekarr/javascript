
//add,remove,lenght,toggle are present in classlist 
document.getElementById("dcsm").addEventListener("click",fname);
function fname() {

    document.getElementById("dcsm").classList.add("sam", "lhi");
    addd = document.getElementById("dcsm").classList;
    console.log(addd);
    document.getElementById("dcsm").style.background = "yellow";
    document.getElementById("dcsm").classList.remove("xyz");
    ree = document.getElementById("dcsm").classList;
    console.log(ree);

    len = document.getElementById("dcsm").classList.length;
    console.log(len);

};

//Important function toggle
document.getElementById("dcsm").addEventListener("click", toggl);

function toggl() {
    //document.getElementById("dcsm").classList.toggle("togg");    //this is for toggle
    //e = document.getElementById("dcsm").classList;

    //e=document.getElementById("dcsm").classList.item(1); //this is for item
    //e=document.getElementById("dcsm").classList.contains("abc"); //this is for contains
    //console.log(e);
    
};
