var searchButton = document.querySelector(".search-btn");
var inputCity = document.querySelector("input-city");


var cityLocationCoordinates = () => {
    // user can enter in designated city and extra space will be removed 
    var cityTitle = inputCity.value.trim(); 
    // will return if the cityTitle is empty
    if(!cityTitle) return;
    console.log(cityTitle);
}
searchButton.addEventListener("click", cityLocationCoordinates)