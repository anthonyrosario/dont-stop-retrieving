(function(module){
  var nearestParksController = {};

  nearestParksController.index = function() {
    nearestParksView.initResults();
  };

  module.nearestParksController = nearestParksController;
})(window);
