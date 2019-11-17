var APIKey = "acbc54c1984334988145e5d52d06050f";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=Austin,US&units=imperial&appid=" + APIKey;

// AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function(response) {

    // Log the resulting object
    console.log(response);

    // Transfer content to HTML
    $("#city").html("<h1>" + response.name + " Weather Details</h1>");
    $("#temp").text("Temperature (F) " + response.main.temp);
    $("#humid").text("Humidity: " + response.main.humidity);
    $("#wind").text("Wind Speed: " + response.wind.speed);

    //Call for UV index
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;

    $.ajax({
      url: uvURL,
      method: "GET"
    })
      .then(function(uvResponse) {
    
        console.log(uvResponse);
        $("#uv").text(uvResponse.value); 

      });    

    // Log the data in the console as well
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + response.main.temp);
    console.log("UV INdex " + uvResponse);
    
  });

// function for displaying data when city on navbar is clicked

$("#cityWeather").on("click", function(){
    
var cityWeather = $("#cityWeather").val();
var cityURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + cityWeather + ",US&units=imperial&appid=" + APIKey;

$.ajax({
  url: cityURL,
  method: "GET"
})
  .then(function(response) {

    console.log(response);

    $("#city").html("<h1>" + response.name + " Weather Details</h1>").append();
    $("#temp").text("Temperature (F) " + response.main.temp).append();
    $("#humid").text("Humidity: " + response.main.humidity);
    $("#wind").text("Wind Speed: " + response.wind.speed);

    //Call for UV index
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;

    $.ajax({
      url: uvURL,
      method: "GET"
    })
      .then(function(uvResponse) {
    
        console.log(uvResponse);
        $("#uv").text(uvResponse.value); 

      });
    
  });

  })
  
  


