(function(module) {
  var parksController = {};
  //routes the parksController data to the index page
  parksController.index = function(ctx, next) {
    parksView.index(ctx.parks);
  };

  parksController.loadAll = function(ctx, next) {
    var parksData = function(allParks) {
      ctx.parks = Parks.all;
      next();
    };
    if (Parks.all.length) {
      ctx.parks = Parks.all;
      next();
    } else {
      Parks.fetchAll(parksData);
    }
  };

  module.parksController = parksController;
})(window);
