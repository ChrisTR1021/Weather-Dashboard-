var searchButton = document.querySelector("#searchBttn");
var inputCity = document.querySelector("#city-name");
var apiKey = "6cb51ee488390e9ab28eca71544422ef";



var cityLocationCoordinates = () => {
    // user can enter in designated city and extra space will be removed 
    var cityTitle = inputCity.value.trim(); 
    // will return if the cityTitle is empty
    if(!cityTitle) return;
    var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityTitle}&limit=5&appid=${apiKey}`;

    // City coordinates based off (name, longitude and latitude) comes from the API response
    fetch(apiUrl).then(res => res.json()).then(data => {
        if(!data.length) return alert("error fetching the coordinates")
    }).catch(() => {
        alert("error fetching the coordinates");
        var { name, lat, lon } = data[0];
        getWeatherSpecifics(name, lat, lon);
    });

}

var getWeatherSpecifics = (cityTitle, lat, lon) => {
    var weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid={apiKey}`;

    fetch(weatherApiUrl).then(res => res.json()).then(data =>{
        console.log(data);
    }).catch(() => {
        alert("error fetching the coordinates");
    });

}
searchButton.addEventListener("click", cityLocationCoordinates);