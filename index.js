function userLocation() {
  var location = document.getElementById("location");

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    location.innerHTML = "Latitude:" + lat + "° Longitude:" + lon + "°";

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
      .catch(function(error) {
        console.log("Fetch Error", error);
      });
    /*
      .then(function(response) {

        return response.json();
      })
      .then(function(data) {
        data = JSON.stringify(data);
        console.log(data);
        dataObject = JSON.parse(data); //this.data?
        console.log(dataObject);
        WeatherInfo(dataObject);
        return dataObject;
      })
      .catch(function(error) {
        console.error(error);
      });*/
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Loading your location...";
}

userLocation();

function WeatherInfo(data) {
  var weatherIcon = document.getElementById("weatherIcon");
  var city = document.getElementById("city");
  var temperature = document.getElementById("temp");
  var wind = document.getElementById("wind");

  var weather = data.weather;
  console.log(weather);

  console.log(weather[0].icon);
  console.log(data.name);

  weatherIcon.src = weather[0].icon;
  city.innerHTML = data.name;
  temperature.innerHTML = data.main.temp;
  wind.innerHTML = data.wind.speed;
}
