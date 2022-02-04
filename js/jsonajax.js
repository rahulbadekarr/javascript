
var pageCounting=1;
var buttOn=document.getElementById("btn");


//Anonymous function below start
document.getElementById("btn").addEventListener('click',function(){

    var ourData=new XMLHttpRequest(); //object creation ourDAta
    ourData.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounting+'.json');

    ourData.onload=function(){
        var newData=JSON.parse(ourData.responseText);
        //console.log(newData[1]);
        //console.log(ourData.responseText);
        renderHtml(newData);

    };
    
    ourData.send();
    pageCounting++;
    if(pageCounting>3){
        buttOn.classList.add("hide-me");

    }
    

});

//Anonymous function below end

//renderHtml is called above
function renderHtml(data){
   

    var htmlString="";
    for(i=0;i<data.length;i++){
        htmlString+="<p>"+data[i].name+" is a "+data[i].species+" that likes to eat, ";

        for(j=0;j<data[i].foods.likes.length;j++){

            if(j==0){
                htmlString+=data[i].foods.likes[j];

            }
            else{
                htmlString+=" and "+data[i].foods.likes[j];
            }

            
            

        }
        htmlString+="</p>"
    }

    var divButton=document.getElementById("disp");
    divButton.insertAdjacentHTML('beforeend',htmlString);

}


