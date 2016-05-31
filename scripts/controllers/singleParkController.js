(function(module) {
  var singleParkController = {}

  singleParkController.index = function(ctx) {
    singleParkView.initSinglePark(ctx.park);
  }

  singleParkController.loadSinglePark = function(ctx, next) {
    var parkData = function(park) {
      ctx.park = park;
      next();
    }
  Park.findWhere(ctx.params.id, parkData);
  }
  module.singleParkController = singleParkController;
})(window);
