//abc is present in list  i.e contains
var target=document.getElementById("list");
var check=document.getElementById("abc");
// var check=document.getElementsByClassName(".abc")

var con=target.contains(check);
console.log(con);

//has attibute
var target=document.getElementById("list");
var con=target.hasAttribute("class");//or id
// var con=target.hasChildNodes();
//console.log(con);

//Equal method

var a=document.getElementById("list").children[1];
var b=document.getElementById("list1").children[1];//you can put other index as well
var equal=a.isEqualNode(b);
console.log(equal);

