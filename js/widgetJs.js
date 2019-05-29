//Getting permission from User or Not
if (navigator.geolocation) {				
 navigator.geolocation.getCurrentPosition(getData);
} else {
 alert('Geolocation is not supported in your browser');
}




function getData(position) {
  //Get Latitude and Longitude
  latitude =position.coords.latitude;
  longitude =position.coords.longitude;
  
  var  apiUrl = "https://cors-anywhere.herokuapp.com/https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;

  $.getJSON(apiUrl,function(data){
    // Getting and Setting data from apiUrl to HTML entities 
    $("#place").html(data.name + ", " + data.sys.country);
    $("#temp").html(data.main.temp.toFixed(1)+ " °C");
	$("#wind").html(data.wind.speed);
    
		
		//Set Weather Speed Icon
		var speed=data.wind.speed;
		
		if(speed<1){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-0.svg' width='40' ></object>");
		}
		else if(speed<2){
			$("#windSpeedIcon").html("<object style='color:white' id='windIcon' data='../svg/wind/wi-wind-beaufort-1.svg' width='40' ></object>");
		}
		else if(speed<3){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-2.svg' width='40' ></object>");
		}
		else if(speed<4){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-3.svg' width='40' ></object>");
		}
		else if(speed<5){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-4.svg' width='40' ></object>");
		}
		else if(speed<6){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-5.svg' width='40' ></object>");
		}
		else if(speed<7){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-6.svg' width='40' ></object>");
		}
		else if(speed<8){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-7.svg' width='40' ></object>");
		}
		else if(speed<9){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-8.svg' width='40' ></object>");
		}
		else if(speed<10){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-9.svg' width='40' ></object>");
		}
		else if(speed<11){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-10.svg' width='40' ></object>");
		}
		else if(speed<12){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-11.svg' width='40' ></object>");
		}
		else if(speed<13){
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-wind-beaufort-12.svg' width='40' ></object>");
		}
		else{
			$("#windSpeedIcon").html("<object id='windIcon' data='../svg/wind/wi-na.svg' width='40' ></object>");
		}
		
		//Set Weather Cloud Icon 
		var weatherDescription=data.main.description;
		
		if(weatherDescription='Clouds'){
			$("#weatherIcon").html("<object id='description' data='../svg/description/wi-cloudy.svg' width='40' ></object>");
		}
		else if(weatherDescription='Drizzle'){
			$("#weatherIcon").html("<object id='description' data='../svg/description/wi-raindrops.svg' width='40' ></object>");
		}
		else if(weatherDescription='Rain'){
			$("#weatherIcon").html("<object id='description' data='../svg/description/wi-rain.svg' width='40' ></object>");
		}
		else if(weatherDescription='Snow'){
			$("#weatherIcon").html("<object id='description' data='../svg/description/wi-snow.svg' width='40' ></object>");
		}
		else if(weatherDescription='Clear'){
			$("#weatherIcon").html("<object id='description' data='../svg/description/wi-day-sunny.svg' width='40' ></object>");
		}
		else if(weatherDescription='Thunderstorm'){
			$("#weatherIcon").html("<object id='description' data='../svg/description/wi-thunderstorm.svg' width='40' ></object>");
		}
		else if(weatherDescription='Mist'){
			$("#weatherIcon").html("<object id='description' data='../svg/description/wi-day-haze.svg' width='40' ></object>");
		}
		else{
			$("#windSpeedIcon").html("<object id='description' data='../svg/wind/wi-na.svg' width='40' ></object>");
		}
		
  });
}


                                           
