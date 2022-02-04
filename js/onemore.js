var pageCounter=1;
var animalDiv=document.getElementById("animalinform");

var btn = document.getElementById("btn");

btn.addEventListener('click', function () {

    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    myRequest.onload = function () {
        allData = myRequest.responseText;
        aData = JSON.parse(allData);
        renderHTML(aData);
    }
    myRequest.send();
    pageCounter++;

    if(pageCounter>3){
        btn.classList.add("hidebtn");
    }
});

function renderHTML(data) {
    var htmlString='';
    for(i in data){
        htmlString+="<h3>"+data[i].name+ ' is a '+data[i].species+ " that likes to eat ";
        for(j in data[i].foods.likes){

            if(j==0){
                htmlString+=data[i].foods.likes[j];
            }
            else{
                htmlString+=" and "+data[i].foods.likes[j];
            }
            
        }
        htmlString+=" and dislikes "

        for(j in data[i].foods.dislikes){

            if(j==0){
                htmlString+=data[i].foods.dislikes[j];
            }
            else{
                htmlString+=" and "+data[i].foods.dislikes[j];
            }
            
        }
    
        htmlString+=" </h3>"
    }

   
    animalDiv.insertAdjacentHTML('afterend',htmlString)


}

