// Variables

// Functions

// Event listeners

// Local Storage

// Google map
function initMap() {
  // Location
  const austin = { lat: 30.266666, lng: -97.733330 };
  // The map, zoomed at Austin
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: austin,
  });
  // The marker, positioned at Austin
  const marker = new google.maps.Marker({
    position: austin,
    map: map,
  });
}

window.initMap = initMap;