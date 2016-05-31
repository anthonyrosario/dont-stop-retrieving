(function(module){
  var parkDataController = {};

  parkDataController.index = function() {
    Park.getParks(parkDataView.index);
  }

  module.parkDataController = parkDataController;
})(window);
