
//To remove and replace child

var newelement=document.createElement("li");
var newtext=document.createTextNode("Feedback");

newelement.appendChild(newtext);


var target=document.getElementById("list");
//var getelemnt=target.childNodes;
var oldelement=target.children[3];
//console.log(getelemnt);
//target.replaceChild(newelement,oldelement);
target.removeChild(oldelement); 

//Copy/clone method

var target=document.getElementById("list").children[2];
var copyelement=target.cloneNode(true);
//console.log(copyelement);

document.getElementById("list1").appendChild(copyelement);
