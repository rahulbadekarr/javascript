var tex=document.createTextNode("This is just a typing test of text");
var com=document.createComment("This hr is just a typing test of text");
var tag=document.createElement("h2");


console.log(tex);
console.log(com);
console.log(tag);

tag.appendChild(tex);//this is for appending 
document.getElementById("head").appendChild(tag);//this is to print on page

// to print on exact position use below
var target=document.getElementById("head");
target.insertBefore(tag,target.childNodes[3]);


//very important tag below which will tag with text 
var tag_txt=document.getElementById("head");
var newinsert="<h3>We have a tag with text</h3>"
//tag_txt.insertAdjacentHTML('afterbegin',newinsert);
//tag_txt.insertAdjacentHTML('afterend',newinsert);
tag_txt.insertAdjacentHTML('beforeend',newinsert);

/////////////simple e.g in 1 go
// var textdata=document.createTextNode("We have inserted a textnode");
// var tag=document.createElement("h3");

// tag.appendChild(textdata);
// var target=document.getElementById("head");
// target.insertAdjacentElement('beforeend',tag)

var texts=document.createTextNode("Hi rmono");
var element=document.createElement("h1");
element.appendChild(texts);

var target=document.getElementById("head");
target.insertAdjacentElement('beforeend',element)