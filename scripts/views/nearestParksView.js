(function(module){
  var nearestParksView = {};

  nearestParksView.initResults = function() {
    var nearestParks = [];
    $('section').hide();
    $('#results').fadeIn('fast');
    $('.search-results').empty();
    nearestParks = MapLocation.findDistance(Park.all, userLat, userLng);
    nearestParks.forEach(function(park){
      $('.search-results').append(park.toHtml($('#nearest-park-template')));
    });
  };

  module.nearestParksView = nearestParksView;
})(window);
