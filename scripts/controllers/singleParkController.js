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

  $('#reviewBtn').on('click', function(e) {
    e.preventDefault();
    var reviewName = $('#reviewName').val();
    var reviewText = $('#reviewText').val();
    var review = {
      name: reviewName,
      text: reviewText
    };
    Review.submitReview(review);
  });

  module.singleParkController = singleParkController;
})(window);
