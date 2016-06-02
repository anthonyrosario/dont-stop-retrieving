 // (function(module){

  function createParks() {
    for(var i = 0; i < Park.all.length; i++) {
      var park = Park.all[i];
      var location = new google.maps.LatLng(park['latitude'], park['longitude']);
      addMarker(map1, park['common_name'], location);
    }
  };

  function addMarker(map, name, location) {
    var dogIcon = '/../../images/paws.png';
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: dogIcon
    });

    google.maps.event.trigger($('#map-one')[0], 'resize');

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

  function clearArray() {
    for (var i = 0; i < deleteMarker.length; i++) {
      deleteMarker[i].setMap(null);
    }
    console.log('this is cleared');
  }

  google.maps.event.addDomListener(window, 'load', initialize); //come back to this

// })();
