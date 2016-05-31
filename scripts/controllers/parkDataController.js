(function(module){
  var parkController = {};

  parkController.index = function() {
    Park.getParks(parkView.index);
  }

  module.parkController = parkController;
})(window);
