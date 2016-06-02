(function(module){
  var reviewController = {};

  reviewController.index = function(ctx, next) {
    reviewView.initSingleParkReview(ctx.reviews);
    next();
  };

  module.reviewController = reviewController;
})(window);
