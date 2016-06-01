(function(module){
  var parkDataView = {};

  parkDataView.initResults = function() {
    var nearestParks = [];
    $('#results').fadeIn('fast').siblings().hide();
    $('.search-results').empty();
    nearestParks = MapLocation.findDistance(Park.all, userLat, userLng);
    nearestParks.forEach(function(park){
      $('.search-results').append(park.toHtml($('#park-template')));
    });
  };

  module.parkDataView = parkDataView;
})(window);
