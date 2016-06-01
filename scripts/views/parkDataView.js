(function(module){
  var parkDataView = {};

  parkDataView.initResults = function() {
    $('#results').fadeIn('fast').siblings().hide();
    google.maps.event.trigger($('#map-one')[0], 'resize');
    $('.search-results').empty();
    Park.all.forEach(function(park){
      $('.search-results').append(park.toHtml($('#park-template')));
    });
  };

  module.parkDataView = parkDataView;
})(window);
