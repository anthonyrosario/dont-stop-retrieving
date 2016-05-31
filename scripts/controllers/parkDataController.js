(function(module){
  var parkDataController = {};

  parkDataController.index = function(ctx, next) {
    Park.getParks(parkDataView.initResults);
    next();
  };

  module.parkDataController = parkDataController;
})(window);
