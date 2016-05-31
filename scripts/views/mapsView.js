// (function(module){

  function initialize() {
    // var map = new google.maps.Map(document.getElementById('map-one'), {
    //   center: new google.maps.LatLng(47.618217, -122.351832),
    //   mapTypeId: google.maps.MapTypeId.STREET,
    //   zoom: 12
    // });

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

    var map1 = new google.maps.Map(mapOne, myOptions);
    var map2 = new google.maps.Map(mapTwo, myOptions);

    for(var x in dogParkLocations) {
      var park = dogParkLocations[x];
      var location = new google.maps.LatLng(park.latitude, park.longitude);
      var marker = new google.maps.Marker({
        position: location,
        title: park.name,
        map: map1
      });
    }
  }

  google.maps.event.addDomListener(window, 'load', initialize);

// })();
