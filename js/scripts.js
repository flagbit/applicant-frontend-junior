if (navigator.geolocation) {
  // Request the current position
  // If successful, call getWeather; if not call getError
  navigator.geolocation.getCurrentPosition(getWeather, getError);
} else {
  alert('Geolocation is not available!');
}


function getWeather(pos) {
  // Get the coordinates of the current possition.
  var geoLatitude = String(pos.coords.latitude.toFixed(5));
  var geoLongitude = String(pos.coords.longitude.toFixed(5));

  //construct the url and call httpRequestAsync
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + geoLatitude + "&lon=" + geoLongitude;
  console.log(url);
  httpRequestAsync(url, showWeather);


}
// getCurrentPosition: Error returned
function getError(err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case err.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case err.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    default:
      alert("An unknown error occurred.");
  }
}


function httpRequestAsync(url, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200)
      callback(httpRequest.responseText);
  }
  httpRequest.open("GET", url, true); // true for asynchronous 
  httpRequest.send();
}


function showWeather(response) {
  let cityName = document.getElementById("city-name");
  let textWeather = document.getElementById("text-weather");
  let textCelsius = document.getElementById("text-celsius");
  let textWind = document.getElementById("text-wind");
  let jsonObject = JSON.parse(response);
  let weatherIcon = document.getElementById("weather-icon");
  let backgroundSource = document.getElementById("image-weather");

  console.log(jsonObject);

  cityName.innerHTML = jsonObject.name;
  textWeather.innerHTML = jsonObject.weather[0].description;
  textCelsius.innerHTML = String(jsonObject.main.temp.toFixed(0)) + " °C";
  textWind.innerHTML = jsonObject.wind.speed + " km/h";

  //zum testen
  jsonObject.weather[0].description = "clear sky";
  //jsonObject.weather[0].description = "few clouds";
  //jsonObject.weather[0].description = "rain";
  //jsonObject.weather[0].description = "snow";
  //jsonObject.weather[0].description = "mist";

  switch (jsonObject.weather[0].description) {

    case "clear sky":
      weatherIcon.className = "wi wi-day-sunny";
      backgroundSource.src = "svg/sunny.svg";
      document.getElementById("main").style.backgroundColor = "rgb(237, 123, 27)";
      break;

    case "scattered clouds":
      weatherIcon.className = "wi wi-cloud";
      backgroundSource.src = "svg/cloudy.svg";
      document.getElementById("main").style.backgroundColor = "rgb(0, 153, 61)";
      break;

    case "broken clouds":
      weatherIcon.className = "wi wi-cloudy";
      backgroundSource.src = "svg/cloudy.svg";
      document.getElementById("main").style.backgroundColor = "rgb(0, 153, 61)";
      break;

    case "shower rain":
      weatherIcon.className = "wi wi-showers";
      backgroundSource.src = "svg/rainy.svg";
      document.getElementById("main").style.backgroundColor = "rgb(65, 71, 71)";
      break;

    case "rain":
      weatherIcon.className = "wi wi-rain";
      backgroundSource.src = "svg/rainy.svg";
      document.getElementById("main").style.backgroundColor = "rgb(65, 71, 71)";
      break;

    case "thunderstorm":
      weatherIcon.className = "wi wi-thunderstorm";
      backgroundSource.src = "svg/rainy.svg";
      document.getElementById("main").style.backgroundColor = "rgb(65, 71, 71)";
      break;

    case "snow":
      weatherIcon.className = "wi wi-snow";
      backgroundSource.src = "svg/snowy.svg";
      document.getElementById("main").style.backgroundColor = "rgb(163, 61, 95)";
      break;

    case "mist":
      weatherIcon.className = "wi wi-fog";
      backgroundSource.src = "svg/foggy.svg";
      document.getElementById("main").style.backgroundColor = "rgb(158, 161, 162)";
      break;

    default:
      weatherIcon.className = "wi wi-day-cloudy";
      backgroundSource.src = "svg/cloudy.svg";
      document.getElementById("main").style.backgroundColor = "rgb(0, 153, 61)";
      break;
      
  }


}

