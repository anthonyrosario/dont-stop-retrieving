var infoWindow, map1;
var deleteMarker = [];
var userLat = '';
var userLng = '';

function initialize() {
  var mapOne = document.getElementById('map-one');

  var myOptions = {
    zoom: 11,
    center: new google.maps.LatLng(47.618217, -122.351832),
    mapTypeId: google.maps.MapTypeId.STREET,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };

  map1 = new google.maps.Map(mapOne, myOptions);

  var input = document.getElementById('home-page-search');
  var options = {
    types: ['address']
  };

  var autocomplete = new google.maps.places.Autocomplete(input, options);
  autocomplete.bindTo('bounds', map1);
  autocomplete.addListener('place_changed', locationMarker);

  function locationMarker() {
    clearArray();
    var placeInfo = autocomplete.getPlace();
    console.log(placeInfo);
    var marker = new google.maps.Marker({map: map1, animation: google.maps.Animation.DROP, position: placeInfo.geometry.location});
    map1.setCenter(placeInfo.geometry.location);
    map1.setZoom(12);
    deleteMarker.push(marker);
    userLat = placeInfo.geometry.location.lat();
    userLng = placeInfo.geometry.location.lng();
  }
}
