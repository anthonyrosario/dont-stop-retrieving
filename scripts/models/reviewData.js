(function(module){

  function Review(opts) {
    for (key in opts) this[key] = opts[key];
  }

  Review.all = [];

  var config = {
    apiKey: "AIzaSyCX1RjIqsSO49bC-FYz_RhK5AykS0BfdgA",
    authDomain: "dog-park-reviews.firebaseapp.com",
    databaseURL: "https://dog-park-reviews.firebaseio.com",
    storageBucket: "dog-park-reviews.appspot.com",
  };

  var app = firebase.initializeApp(config);
  var database = app.database();
  var databaseRef = database.ref().child('reviews');

  Review.filterSingleParkReview = function(ctx) {
    ctx.reviews = Review.all.filter(function(r) {
      return r.id === ctx.params.id;
    });
  };

  Review.getSingleParkReviews = function(ctx, next) {
    if (next) {
      if (Review.all === 0) {
        Review.getReviews();
        Review.filterSingleParkReview();
        next();
      } else {
        Review.filterSingleParkReview();
        next();
      };
    }
  };

  Review.getReviews = function() {
    databaseRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        Review.all.push(new Review(childData));
      });
    });
  };

  Review.submitReview = function(review) {
    databaseRef.push().set(review);
  };

  module.Review = Review;
})(window);
