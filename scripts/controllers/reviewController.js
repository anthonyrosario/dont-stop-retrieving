(function(module){
  var reviewController = {};

  reviewController.index = function(ctx, next) {
    $('#review-info').empty();
    reviewView.initSingleParkReview(ctx.reviews);
  };

  module.reviewController = reviewController;
})(window);
