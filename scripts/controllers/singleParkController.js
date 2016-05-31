(function(module) {
  var singleParkController = {}

  singleParkController.index = function(ctx, next) {

    singleParkView.initSinglePark(ctx.park);
  }

  singleParkController.loadSinglePark = function() {
    var parkData = function(park) {
      ctx.park = park;
      next();
    }
    Park.findWhere('name', ctx.params.name.replace('+', ' '), parkData);
  }
  module.singleParkController = singleParkController;
})(window);
