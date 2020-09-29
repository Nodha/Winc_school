const imdbUrl = "https://www.imdb.com/title/";
const jsonPath = "database.json";

let output = document.getElementById("grid");
let radios = document.forms["form"];
let filterOptions = document.getElementById("filterOptions");

let filterOptionArray = ["New", "X-Men", "Avengers", "Batman", "Princess"];


//main function list for page load
function init(){
    getList();
    getFilterOptionsFromArray();
    filter();
}

//get List from json
function getList(filter = false){
    fetch(jsonPath).then(function(response){
        return response.json();
    }).then(function(json){
        data(json, filter); 
    });
}

//create list of all movies
function data(data, filter){
    output.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        if(
            filter === false ||
            filter == 'New' && data[i].Year >= 2014 ||
            filter != 'New' && data[i].Title.includes(filter)
        ){
            movieList = `<div class="column">`;
            movieList += `<a href="${imdbUrl}${data[i].imdbID}/" target="_blank"> <div class="poster" style="background-image: url(${data[i].Poster});"></div>`;
            movieList += `</div>`;

            output.innerHTML += movieList;
        }
    };
}

function filter(){
    for(var i = 0, max = radios.length; i < max; i++) {
        radios.elements["movies"][i].onclick = function() {
        
        if(this.value){
            getList(this.value);
        }
    }
}}

function getFilterOptionsFromArray(){
    
    return filterOptionArray.map(function(options) {
        optionsOutput = ` <li class="radio_btn">`;
        optionsOutput += `<input type="radio" id="${options}" name="movies" value="${options}" >`;
        optionsOutput += `<label for="${options}">${options}</label>`;
        optionsOutput += `</li>`;
        
        filterOptions.innerHTML += optionsOutput; 
    });
}

//initilize functions on load
init();



  