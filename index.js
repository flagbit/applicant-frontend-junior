fetch("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log("error");
  });
