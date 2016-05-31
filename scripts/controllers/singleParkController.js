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
  Park.all.findWhere('id', ctx.params.id, parkData);
  }
  module.singleParkController = singleParkController;
})(window);
