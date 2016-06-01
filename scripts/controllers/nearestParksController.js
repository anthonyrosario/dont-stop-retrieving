(function(module){
  var nearestParksController = {};

  nearestParksController.index = function() {
    Park.getParks(nearestParksView.initResults);
  };

  module.nearestParksController = nearestParksController;
})(window);
