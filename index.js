function userLocation() {
  var location = document.getElementById("location");

  var url = "https://fcc-weather-api.glitch.me/api/current?";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML =
      "Latitude is " + latitude + "° Longitude is " + longitude + "°";

    fetch(url + "lat=" + latitude + "&lon=" + longitude)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
        document.getElementById("root").innerHTML = data.coord.lon;
        return data;
      })
      .catch(function(error) {
        console.error("error");
      });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

userLocation();
