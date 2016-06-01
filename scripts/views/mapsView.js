 //(function(module){
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
      var marker = new google.maps.Marker({map: map1, animation: google.maps.Animation.DROP, position: placeInfo.geometry.location});
      map1.setCenter(placeInfo.geometry.location);
      map1.setZoom(12);
      deleteMarker.push(marker);
      userLat = placeInfo.geometry.location.lat();
      userLng = placeInfo.geometry.location.lng();
    }
  }

  function createParks() {
    for(var i = 0; i < Park.all.length; i++) {
      var park = Park.all[i];
      var location = new google.maps.LatLng(park['latitude'], park['longitude']);
      addMarker(map1, park['common_name'], location);
    }
  };

  function addMarker(map, name, location) {
    var dogIcon = '/../../images/dog_face.png';
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
