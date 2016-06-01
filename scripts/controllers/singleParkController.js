(function(module) {
  var singleParkController = {};

  singleParkController.index = function(ctx, next) {
    Park.addData();
    singleParkView.initSinglePark(ctx.park);
    // next();
  };

  singleParkController.loadSinglePark = function(ctx, next) {
    Park.addUniqueIdentifier();
    console.log(Park.all);
    var parkData = function(park) {
      ctx.park = park;
      next();
    };
    Park.findWhere(ctx.params.id, parkData);
  };
  module.singleParkController = singleParkController;
})(window);
