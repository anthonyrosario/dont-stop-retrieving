(function(module){
  var parkDataController = {};

  parkDataController.index = function(ctx, next) {
    clearArray();
    Park.getParks(parkDataView.initResults);
    // next();
  };

  module.parkDataController = parkDataController;
})(window);
