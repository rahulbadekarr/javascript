
var e=document.getElementById("list").parentElement;
//var e=document.getElementById("main").parentElement; //output is null
//var e=document.getElementById("main").parentNode; // output is document  this is the difference ,else all same

//e=document.getElementById("list").children;
//e=document.getElementById("list").children[3];
//e=document.getElementById("list").childNodes;

//e=document.getElementById("list").firstElementChild;//Element targets the hlml tag
//e=document.getElementById("list").lastElementChild;
//e=document.getElementById("list").lastChild;//this targets the next blank ,or enter or if html tag ,we can check through childNodes
//e=document.getElementById("list").firstChild;
//e=document.getElementById("list").nextElementSibling;
//e=document.getElementById("list").previousElementSibling;
//e=document.getElementById("list").nextSibling;

// var e=document.getElementById("list").children[0];
// var d=e.nextElementSibling;
// console.log(d);

e=document.getElementById("list").previousSibling;

console.log(e);