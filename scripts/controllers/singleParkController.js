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
    var park = location.pathname.match(/\w+-?\w+-?\w+-?/g);

    var review = {
      name: reviewName,
      park: park[1],
      text: reviewText
    };
<<<<<<< HEAD
    reviewData.submitReview(review);
    reviewView.initReview(review);
    document.getElementById('reviewName').value = '';
    document.getElementById('reviewText').value = '';
=======
    Review.submitReview(review);
>>>>>>> 46e81d81c2cd9c22f4af2891980de376c6ff2031
  });

  module.singleParkController = singleParkController;
})(window);
