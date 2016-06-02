var infoWindow, map1, autocomplete;
var deleteMarker = [];
var userLat = '';
var userLng = '';

function initialize() {
  var mapOne = document.getElementById('map-one');

  var styles = [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        { hue: '#22648c' }
      ]
    },{
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        { hue: '#1900ff' },
        { visibility: 'on' },
        { color: '#15a3dd' }
      ]
    },{
      featureType: 'poi.park',
      stylers: [
        { color: '#22408c' },
        { hue: '#00ff19' }
      ]
    }
  ];

  var styledMap = new google.maps.StyledMapType(styles, {name: 'Styled Map'});

  var myOptions = {
    zoom: 11,
    center: new google.maps.LatLng(47.618217, -122.351832),
    mapTypeId: [google.maps.MapTypeId.STREET, 'map_style'],
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };

  map1 = new google.maps.Map(mapOne, myOptions);
  map1.mapTypes.set('map_style', styledMap);
  // map1.setMapTypeId('map_style');

  var input = document.getElementById('home-page-search');
  var options = {
    types: ['address']
  };

  autocomplete = new google.maps.places.Autocomplete(input, options);
  autocomplete.bindTo('bounds', map1);
  autocomplete.addListener('place_changed', mapsObj.locationMarker);

}

google.maps.event.addDomListener(window, 'load', initialize);
