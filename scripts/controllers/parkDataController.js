(function(module){
  var parkDataController = {};

  parkDataController.index = function() {
    Park.getParks(parkDataView.initResults);
    // next();
  };

  module.parkDataController = parkDataController;
})(window);
