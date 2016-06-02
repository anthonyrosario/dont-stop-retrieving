(function(module){
  var nearestParksView = {};

  nearestParksView.initResults = function() {
    var nearestParks = [];
    scroll(0,0);
    $('#home-page-search').val('');
    $('section').hide();
    $('#results').fadeIn('fast');
    var center = map1.getCenter();
    google.maps.event.trigger($('#map-one')[0], 'resize');
    map1.setCenter(center);
    $('.search-results').empty();
    nearestParks = MapLocation.findDistance(Park.all, userLat, userLng);
    nearestParks.forEach(function(park){
      $('.search-results').append(park.toHtml($('#nearest-park-template')));
    });
  };

  module.nearestParksView = nearestParksView;
})(window);
