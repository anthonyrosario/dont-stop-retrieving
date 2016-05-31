(function(module){
  var parkDataController = {};

  parkDataController.index = function() {
    Park.getParks(parkDataView.initResults);
  };

  module.parkDataController = parkDataController;
})(window);
