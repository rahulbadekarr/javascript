
var el;
el=document.querySelector("#dcsm").style.color;
el=document.querySelector("#dcsm").style.color="red";

//el=document.querySelector("#dcsm").className="abc";
document.querySelector("#dcsm").classList.add("efg");
document.querySelector("#dcsm").classList.add("hij");
//document.querySelector("#dcsm").classList.remove("hij");

el=document.querySelector("#dcsm").classList;
console.log(el);    