// Ajax :Load data without refreshing the webpage

document.getElementById('btn').addEventListener('click', ajaxmethod)
var pageCount = 1;
function ajaxmethod() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCount + '.json')
    ourRequest.onload = function () {
        var webData = JSON.parse(ourRequest.responseText);
        console.log(webData);
        // document.write('<h1>' + webData[1].foods.likes[1] + '</h1>')

        renderHtml(webData);
    };

  
    ourRequest.send();
    pageCount++;
    if (pageCount > 3) {
        document.getElementById('btn').classList.add("hide-me");
    }

};

var divanimal = document.getElementById('animalinfor')
function renderHtml(data) {

    // var htmlStringdata=data[1].name
    var htmlStringdata = " ";

    for (i in data) {
        htmlStringdata += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        for (j in data[i].foods.likes) {

            if (j == 0) {
                htmlStringdata += data[i].foods.likes[j];
            }
            else {
                htmlStringdata += " and " + data[i].foods.likes[j];
            }

        }
        htmlStringdata += "</p>"
    }

    divanimal.insertAdjacentHTML('beforeend', htmlStringdata);

}