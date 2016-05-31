// (function(module){
  var infoWindow, map1, map2;

  function initialize() {
    var mapOne = document.getElementById('map-one');
    var mapTwo = document.getElementById('map-two');

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
    map2 = new google.maps.Map(mapTwo, myOptions);

    var input = document.getElementById('home-page-search');
    var options = {
      types: ['address']
    };

    var autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.bindTo('bounds', map1);
    autocomplete.addListener('place_changed', locationMarker);

    function locationMarker () {
      var placeInfo = autocomplete.getPlace();
      var marker = new google.maps.Marker({map: map1, animation: google.maps.Animation.DROP, position: placeInfo.geometry.location});
      map1.setCenter(placeInfo.geometry.location);
      map1.setZoom(12);
    }

    for(var x in dogParkLocations) {
      var park = dogParkLocations[x];
      var location = new google.maps.LatLng(park.latitude, park.longitude);
      addMarker(map1, park.name, location);
    }
  }

  function addMarker(map, name, location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

    google.maps.event.addListener(marker, 'click', function(){
      if (typeof infoWindow != 'undefined'){
        infoWindow.close();
      }
      infoWindow = new google.maps.InfoWindow({
        content: name
      });
      infoWindow.open(map, marker);
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

// })();
