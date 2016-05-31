(function(module) {
  var singleParkController = {}

  Parks.createTable();

  singleParkController.index = function() {

    singleParkView.initSinglePark();
  }

  module.singleParkController = singleParkController;
})(window);
