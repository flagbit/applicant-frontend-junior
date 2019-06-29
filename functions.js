const endpoint = "https://fcc-weather-api.glitch.me/";

let city, country;
let tempCurrent, tempMin, tempMax;
let cloudImg, cloudText;
let windSpeed, windDegree;
let spinner, widget;

document.addEventListener("DOMContentLoaded", () => {

    city = document.getElementById("city");
    country = document.getElementById("country");
    tempCurrent = document.getElementById("temp-current");
    tempMin = document.getElementById("temp-min");
    tempMax = document.getElementById("temp-max");
    cloudImg = document.getElementById("cloud-img");
    cloudText = document.getElementById("cloud-text");
    windSpeed = document.getElementById("wind-speed");
    windDegree = document.getElementById("wind-degree");
    spinner = document.getElementById("spinner-wrapper");
    widget = document.getElementById("widget");

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                sendRequest(pos).then(
                    (response) => {
                        parseResponse(JSON.parse(response));
                    }, (error) => {
                        showError(error);
                        throw new Error(`Error while making the request:\n${error}`);
                    })
            }, (err) => {
                if (err.code === err.PERMISSION_DENIED) {
                    //TODO write a manual option to chose a location ;)
                    showError("Please allow the access to your location.");
                } else {
                    showError(err.message);
                }
                throw new Error(`Error while getting geolocation:\n${err.message} (Code: ${err.code})`);
            })
    } else {
        showError("Your device is not able to deliver a geolocation");
        throw new Error("Device not able to deliver geolocations");
    }

});


function sendRequest(pos) {

    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        let url = endpoint + "/api/current?lon=" + pos.coords.longitude + "&lat=" + pos.coords.latitude;
        request.onload = function () {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(request.statusText);
            }
        };
        request.onerror = function () {
            reject("Network Error");
        };
        request.open('GET', url);
        request.send();
    });

}


function parseResponse(response) {

    city.innerHTML = response.name;
    country.innerHTML = response.sys.country;

    const tempUnit = " °C";
    tempCurrent.innerHTML = getTemperature(response.main.temp) + tempUnit;
    tempMin.innerHTML = getTemperature(response.main.temp_min) + tempUnit;
    tempMax.innerHTML = getTemperature(response.main.temp_max) + tempUnit;

    cloudImg.classList.add(getIcon(response.weather[0].main));
    cloudText.innerHTML = response.weather[0].description;

    const speedUnit = " m/s";
    windSpeed.innerHTML = response.wind.speed + speedUnit;
    windDegree.innerHTML = parseInt(response.wind.deg);

    spinner.classList.add("hidden");
    widget.classList.remove("hidden");

}


function getIcon(weather) {
    let iconClass = "fa-";
    switch (weather) {
        case "Thunderstorm":
            iconClass += "bolt";
            break;
        case "Drizzle":
            iconClass += "cloud-rain";
            break;
        case "Rain":
            iconClass += "cloud-showers-heavy";
            break;
        case "Snow":
            iconClass += "snowflake";
            break;
        case "Atmosphere":
            iconClass += "smog";
            break;
        case "Clear":
            iconClass += "sun";
            break;
        case "Clouds":
            iconClass += "cloud-sun";
            break;
        default:
            iconClass += "sun";
            break;
    }
    return iconClass;
}


/**
 * Rounds the given temperature to one decimal place
 */
function getTemperature(temp) {
    return (Math.round(temp * 100) / 100).toFixed(1);
}


function showError(error) {
    document.body.innerHTML = `
    <div>
        <p>Sorry, but the data could not be loaded:</p>
        <p class="small">${error}</p>
    </div>`;
}