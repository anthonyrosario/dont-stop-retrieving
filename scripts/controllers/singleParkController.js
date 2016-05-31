(function(module) {
  var singleParkController = {}

  singleParkController.index = function() {
    singleParkView.initSinglePark();
  }

  module.singleParkController = singleParkController;
})(window);
