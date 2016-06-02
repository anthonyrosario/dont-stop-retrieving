(function(module){
  var parkDataController = {};

  parkDataController.index = function(ctx) {
    mapsObj.clearArray();
    Park.getParks(parkDataView.initResults);
  };

  module.parkDataController = parkDataController;
})(window);
