(function(module){

  var mapOne = document.getElementById('map-one');
  var mapTwo = document.getElementById('map-two');

  var myOptions = {
    zoom: 12,
    center: new google.maps.LatLng(47.618217, -122.351832),
    mapTypeId: google.maps.MapTypeId.STREET,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };

  var map1 = new google.maps.Map(mapOne, myOptions);
  var map2 = new google.maps.Map(mapTwo, myOptions);

})();
