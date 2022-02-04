
var element;
element=document.body;
//GET METHODS
element=document.getElementsByClassName("para")[2];
element=document.getElementsByTagName("li")[3];
element=document.getElementById("navid");
element=document.getElementById("foot").innerText;
element=document.getElementById("foot").innerHTML;

element=document.getElementById("list").getAttribute("onclick");

element=document.getElementById("list").getAttributeNode("onclick").name;
element=document.getElementById("list").getAttributeNode("onclick").value;

element=document.getElementById("list").attributes;
element=document.getElementById("list").attributes[2].value;
element=document.getElementById("list").attributes[2].name;


//SET METHODS
//element=document.getElementById("head").innerText="Rahul";

document.getElementById("top").innerHTML="Welcome Rahul";
element=document.getElementById("top").innerHTML;

document.getElementById("top").setAttribute("style","border:3px dotted red");//pass 2 argument 1 is name and then value

document.getElementById("top").removeAttribute("style");

//////////////////////New methods are queryselector and all/////////////////////////////
//Syntax: document.querySelector("css selector")  it can be .para,#head
element=document.querySelectorAll(".para")
element=document.querySelector(".para")

//element=document.querySelector(".para").innerText="raj";//
//element=document.querySelectorAll(".para")[1]="sg";
element=document.querySelectorAll("#list li");

console.log(element);

function abc(){
    console.log("Welcome To my World")
}
