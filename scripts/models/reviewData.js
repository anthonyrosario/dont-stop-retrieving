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
    console.log(Review.all);
    ctx.reviews = Review.all.filter(function(r) {
      console.log(r);
      return r.park === ctx.params.id;
    });
    console.log(ctx.reviews);
  };

  Review.getSingleParkReviews = function(ctx, next) {
    console.log('hiii', ctx);

    // if (next) {
    // Review.getReviews();
    if (Review.all.length === 0) {
      Review.filterSingleParkReview(ctx);
      console.log(ctx.reviews);
      next();
    } else {
      Review.filterSingleParkReview(ctx);
      next();
    };
    // }
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

  Review.getReviews();

  module.Review = Review;
})(window);
