(function(module){

  var mapsObj = {};

  mapsObj.createParks = function() {
    for(var i = 0; i < Park.all.length; i++) {
      var park = Park.all[i];
      var location = new google.maps.LatLng(park['latitude'], park['longitude']);
      mapsObj.addMarker(map1, park['common_name'], location);
    }
  };

  mapsObj.addMarker = function(map, name, location) {
    var dogIcon = '/../../images/paws.png';
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: dogIcon
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
  };

  mapsObj.clearArray = function(){
    for (var i = 0; i < deleteMarker.length; i++) {
      deleteMarker[i].setMap(null);
    }
  };

  mapsObj.locationMarker = function(){
    mapsObj.clearArray();
    var placeInfo = autocomplete.getPlace();
    var marker = new google.maps.Marker({map: map1, animation: google.maps.Animation.DROP, position: placeInfo.geometry.location});
    map1.setCenter(placeInfo.geometry.location);
    map1.setZoom(12);
    deleteMarker.push(marker);
    userLat = placeInfo.geometry.location.lat();
    userLng = placeInfo.geometry.location.lng();
  };

  module.mapsObj = mapsObj;
})(window);
