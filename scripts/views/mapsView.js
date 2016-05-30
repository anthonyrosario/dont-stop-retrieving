function initMap() {
  var $mapDiv = $('.map');
  var map = new google.maps.Map($mapDiv[0], {
    center: {lat: 47.6050, lng: -122.3344},
    zoom: 12,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  });
}

initMap();
