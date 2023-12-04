var searchButton = document.querySelector("#searchBttn");
var inputCity = document.querySelector("#city-name");
var apiKey = "6cb51ee488390e9ab28eca71544422ef";
var weatherCurrent = document.querySelector(".weatherCurrent");
var weatherCardsPile = document.querySelector(".card-pile");


var getcityLocationCoordinates = () => {
    // user can enter in designated city and extra space will be removed 
    var cityTitle = inputCity.value.trim(); 
    // will return if the cityTitle is empty
    if(!cityTitle) return;
    var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityTitle}&limit=5&appid=${apiKey}`;

    // City coordinates based off (name, longitude and latitude) comes from the API response
    fetch(apiUrl).then(res=> res.json()).then(data => {
        if(!data.length) return alert(`no coordinates found for ${cityTitle}`);
        var { name, lat, lon } = data[0];
        getWeatherSpecifics(name, lat, lon);
    }).catch(() => {
        alert("error fetching the coordinates");
    });
}
var getWeatherSpecifics = (cityTitle, lat, lon) => {
    var weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(weatherApiUrl).then(res => res.json()).then(data =>{

        //allows for a filter to only get one Forecast for the day 
        var distinctForecastPeriod =[];
        var fiveDayForecast = data.list.filter(forecast => {
            var forecastDate = new Date(forecast.dt_txt).getDay();
            if(!distinctForecastPeriod.includes(forecastDate)) {
                return distinctForecastPeriod.push(forecastDate);
            }
        });

    }).catch(() => {
        alert("error fetching the weather data");
    });

    var createWeatherCard = (weatherObject) => {
        return `<li class="card">
        <h3>(${weatherObject.dt_txt.split(" ")[0]})</h3>
        <img src="https://openweathermap.org/img/wn${weatherObject.weather[0].icon}@2x.png" alt= weather icons
        <h4>Temp: ${(weatherObject.main.temp - 274.13).toFixed(2)}°C</h4>
        <h4>Wind: ${weatherObject.wind.speed}M/S</h4>
        <h4>Humidity: ${weatherObject,main.humidity}%</h4>
      </li>`;
    }
}


searchButton.addEventListener("click", getcityLocationCoordinates);