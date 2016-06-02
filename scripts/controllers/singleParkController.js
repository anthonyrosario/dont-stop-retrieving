(function(module) {
  var singleParkController = {};

  singleParkController.index = function(ctx, next) {
    Park.addData();
    singleParkView.initSinglePark(ctx.park);
    next();
  };

  singleParkController.loadSinglePark = function(ctx, next) {
    var parkData = function(park) {
      ctx.park = park;
      next();
    };
    Park.findWhere(ctx.params.id, parkData);
  };

  $('#review-btn').on('click', function(e) {
    e.preventDefault();
    var reviewName = $('#review-name').val();
    var reviewText = $('#review-text').val();
    var park = location.pathname.match(/\w+-?\w+-?\w+-?/g);

    var review = {
      name: reviewName,
      park: park[1],
      text: reviewText
    };
    Review.submitReview(review);
    document.getElementById('review-name').value = '';
    document.getElementById('review-text').value = '';

  });

  module.singleParkController = singleParkController;
})(window);
