(function(module){

  var $mapDiv = $('.map');

  var myOptions = {
    zoom: 12,
    center: new google.maps.LatLng(47.618217, -122.351832),
    mapTypeId: google.maps.MapTypeId.STREET,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };

  var map1 = new google.maps.Map($mapDiv[0], myOptions);
  var map2 = new google.maps.Map($mapDiv[1], myOptions);

  function initialize() {
    var input = document.getElementsByClassName('search-box');
    var autocomplete = new google.maps.places.Autocomplete(input);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

})();
