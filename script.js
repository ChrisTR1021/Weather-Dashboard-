var searchButton = document.querySelector("#searchBttn");
var inputCity = document.querySelector("#city-name");
var apiKey = "6cb51ee488390e9ab28eca71544422ef";

var cityLocationCoordinates = () => {
    // user can enter in designated city and extra space will be removed 
    var cityTitle = inputCity.value.trim(); 
    // will return if the cityTitle is empty
    if(!cityTitle) return;
    var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=${cityTitle}&limit=1&appid=${APIKEY}';


    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data)
    }).catch(() => {
        alert("error fetching the coordinates");
    });
    
}
searchButton.addEventListener("click", cityLocationCoordinates);