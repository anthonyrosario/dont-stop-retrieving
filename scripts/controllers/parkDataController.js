(function(module){
  var parkDataController = {};

  parkDataController.index = function() {
    clearArray();
    Park.getParks(parkDataView.initResults);
  };

  module.parkDataController = parkDataController;
})(window);
