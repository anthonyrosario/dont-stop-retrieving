(function(module) {
  var reviewView = {};

  var render = function(review) {
    var template = Handlebars.compile($('#review-template').text());
    return template(review);
  };

  reviewView.initReview = function(review) {
    $('#review-info').prepend(render(review));
    $('#review-info').fadeIn('fast');
  };

  reviewView.initSingleParkReview = function(reviews) {
    reviews.forEach(function (review) {
      $('#review-info').append(render(review));
      $('#review-info').fadeIn('fast');
    });
  };
  module.reviewView = reviewView;
})(window);
