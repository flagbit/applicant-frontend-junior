function userLocation() {
  var location = document.getElementById("location");

  // Get location
  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    // Insert Coordinates
    location.innerHTML = "Latitude: " + lat + "°   Longitude: " + lon + "°";

    // Fetch weather data from API for the coordinates
    fetch(
      "https://fcc-weather-api.glitch.me/api/current?lon=" +
        lon +
        "&lat=" +
        lat,
      { method: "GET" }
    )
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(function(data) {
          console.log(data);
          WeatherInfo(data);
        });
      })
      .catch(function(err) {
        //console.log("Fetch Error", err);
        alert(err.message + ". Check for Error 429");
      });
  }

  function error() {
    location.innerHTML =
      "Unable to retrieve your location, <br/> please ensure location access is allowed.";
  }

  location.innerHTML = "Loading your location..."; // Placeholder while loding
}

userLocation();

// Weather information visualization
function WeatherInfo(data) {
  var weatherIcon = document.getElementById("weatherIcon");
  var city = document.getElementById("city");
  var temperature = document.getElementById("temp");
  var wind = document.getElementById("wind");

  var weather = data.weather;

  /*
  console.log(weather);
  console.log(weather[0].icon);
  console.log(data.name);
  */

  city.innerHTML = data.name;
  temperature.innerHTML = "Temperature: <b>" + data.main.temp + "°C</b>";
  wind.innerHTML = "Wind speed: <b>" + data.wind.speed + "</b>";

  if (weather[0].icon) {
    weatherIcon.src = weather[0].icon;
  } else weatherIcon.src = "questionmark.png";
}
