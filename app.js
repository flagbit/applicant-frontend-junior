const buttonEl = document.querySelector('.getLocation');
const bodyEl = document.querySelector('body');

const weatherLocationEl = document.querySelector('.weather__location');
const weatherSvgEl = document.querySelector('.weather__svg img');
const weatherTempEl = document.querySelector('.weather__temp');
const weatherWindEl = document.querySelector('.weather__wind');

let latitudeEL;
let longitudeEL;

//   Get the location of the user
buttonEl.addEventListener('click', getLocation)

function getLocation() {
    if (navigator.geolocation) { //use navigator object and geolocation method
        navigator.geolocation.getCurrentPosition(getPosition);

    } else {
        alert("Can't get location");
    }
}

function getPosition(pos) {
    latitudeEL = pos.coords.latitude;
    longitudeEL = pos.coords.longitude;
    getData();
}
// Display Data 
function getData() {
    const api = `https://fcc-weather-api.glitch.me/api/current?lat=${latitudeEL}&lon=${longitudeEL}`;

    fetch(api)
        .then(response => { // execute only if data are available
            return response.json(); //convert data into Json String

        })
        .then(data => {
            console.log(data);
            weatherLocation = data.name;
            currentTemp = data.main.temp;
            currentWind = data.wind.speed;
            currentSvg = data.weather[0].icon

            weatherLocationEl.textContent = weatherLocation;
            weatherSvgEl.src = currentSvg;
            weatherTempEl.textContent = currentTemp + ' °C';
            weatherWindEl.textContent = currentWind;
        })
}