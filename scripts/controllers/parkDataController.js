(function(module){
  var parkDataController = {};

  parkDataController.index = function() {
    google.maps.event.trigger($('#map-one')[0], 'resize');
    Park.getParks(parkDataView.initResults);
    // next();
  };

  module.parkDataController = parkDataController;
})(window);
