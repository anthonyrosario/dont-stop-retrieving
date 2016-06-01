(function(module) {
  var reviewView = {};

  var render = function(review) {
    var template = Handlebars.compile($('#review-template').text());
    return template(review);
  };

  reviewView.initReview = function(review) {
    $('#review-info').before(render(review));
    console.log(review);
    $('#review-info').fadeIn('fast');
  };

  module.reviewView = reviewView;
})(window);
