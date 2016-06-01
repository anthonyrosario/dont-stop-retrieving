(function(module){
  var nearestParksController = {};

  nearestParksController.index = function() {
    Park.getParks(nearestParksView.initResults);
    clearArray();
  };

  module.nearestParksController = nearestParksController;
})(window);
