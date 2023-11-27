var searchButton = document.querySelector("#searchBttn");
var inputCity = document.querySelector("#city-input");


var cityLocationCoordinates = () => {
    // user can enter in designated city and extra space will be removed 
    var cityTitle = inputCity.value.trim(); 
    // will return if the cityTitle is empty
    if(!cityTitle) return;
    console.log(cityTitle);
}
searchButton.addEventListener("click", cityLocationCoordinates);