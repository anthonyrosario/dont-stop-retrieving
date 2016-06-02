(function(module){
  var reviewController = {};

  reviewController.index = function(ctx, next) {
    reviewView.initSingleParkReview(ctx.reviews);
  };

  module.reviewController = reviewController;
})(window);
