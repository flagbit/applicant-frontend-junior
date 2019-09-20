function userLocation() {
  var location = document.getElementById("location");

  var url =
    "https://fcc-weather-api.glitch.me/api/current?lon=:longitude&lat=:latitude";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    location.innerHTML = "Latitude is " + lat + "° Longitude is " + lon + "°";

    fetch(
      "https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Loading your location...";
}

userLocation();
