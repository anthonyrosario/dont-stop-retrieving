(function(module){
  var parkDataView = {};

  parkDataView.initResults = function() {
    $('section').hide();
    $('#results').fadeIn('fast');
    var center = map1.getCenter();
    google.maps.event.trigger($('#map-one')[0], 'resize');
    map1.setCenter(center);
    $('.search-results').empty();
    Park.all.forEach(function(park){
      $('.search-results').append(park.toHtml($('#park-template')));
    });
  };

  module.parkDataView = parkDataView;
})(window);
