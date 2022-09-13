// Seatgeek api
// my ID
const clientId = 'MjkwNzYwNjh8MTY2MzA4MjYzNi4yNDI1OTEx'; 

// my secret (not using below)
const seatSecret = 'c0c6077e57c5b2704b0249ea93b976cad9ab01c4b6e98f47231b108372000adc';

// seatGeek api url
const seatGeek = 'https://api.seatgeek.com/2/' 

// grab button
var newButton = document.getElementById('newButton'); 

var superAwesome = function userValue() {

		// grab the value of the input field
    var userInput = document.getElementById('userInput').value; 

		// let user see what they typed in
    console.log(userInput); 

		// fetch the seat geek venues api based on what the user typed in
    fetch(seatGeek+'venues?city='+userInput+'&client_id='+clientId)
		
		// convert the response into text friendly... i think?
     .then(response => response.text()) 

		 // show us the results in the console log
     .then(result => console.log(result)); 

		 console.log = function(message) {
			document.getElementById('result1').innerHTML = message;                                                            
}}

newButton.addEventListener("click", superAwesome);  

// Geolocation data api
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
};

fetch("https://v1.nocodeapi.com/simonphd/lookup/doTeAmBZbLzsExUV", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

		console.log = function(message) {
			document.getElementById('result2').innerHTML = message;
	};

// Google map with geolocator api
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.266666, lng: -97.733330},
    zoom: 10,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;