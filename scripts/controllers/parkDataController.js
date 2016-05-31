(function(module){
  var parkDataController = {};

  parkDataController.index = function() {
    ParkData.getParks(parkDataView.index);
  }

  module.parkDataController = parkDataController;
})(window);
