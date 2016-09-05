(function(module){

  function Review(opts) {
    for (key in opts) this[key] = opts[key];
  }

  Review.all = [];

  var config = {
   apiKey: "AIzaSyBwSHRImqHsjV2Xz7204qEhz7F4cBexHeg",
   authDomain: "dog-park-reviews-7ce13.firebaseapp.com",
   databaseURL: "https://dog-park-reviews-7ce13.firebaseio.com",
   storageBucket: "dog-park-reviews-7ce13.appspot.com",
 };

  var app = firebase.initializeApp(config);
  var database = app.database();
  var databaseRef = database.ref().child('reviews');

  Review.filterSingleParkReview = function(ctx,next) {
    ctx.reviews = Review.all.filter(function(r) {
      return r.park === ctx.params.id;
    });
    next();
  };

  Review.getSingleParkReviews = function(ctx, next) {
    Review.getReviews(ctx, next, Review.filterSingleParkReview);
  };

  Review.getReviews = function(ctx, next, callback) {
    databaseRef.once('value', function(snapshot) {
      Review.all = [];
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        Review.all.push(new Review(childData));
      });
      callback(ctx, next);
    });
  };

  Review.submitReview = function(review) {
    databaseRef.push().set(review);
  };

  databaseRef.on('child_added', function(snapshot) {
    var newReview = new Review(snapshot.val());
    Review.all.push(newReview);
    reviewView.initReview(newReview);

  });

  module.Review = Review;
})(window);
