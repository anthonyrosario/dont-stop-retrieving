(function(module){
  var parkDataController = {};

  parkDataController.index = function(ctx, next) {
    clearArray();
    Park.fetchAll(parkDataView.initResults);
  };

  module.parkDataController = parkDataController;
})(window);
