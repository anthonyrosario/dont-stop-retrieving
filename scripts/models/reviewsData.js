(function(module){
  var reviewsData = {};

  var config = {
  apiKey: "AIzaSyCX1RjIqsSO49bC-FYz_RhK5AykS0BfdgA",
  authDomain: "dog-park-reviews.firebaseapp.com",
  databaseURL: "https://dog-park-reviews.firebaseio.com",
  storageBucket: "dog-park-reviews.appspot.com",
  };

  var app = firebase.initializeApp(config);
  var database = app.database();
  var databaseRef = database.ref().child('reviews');

  reviewData.getReviews = function() {

  };

  reviewData.submitReview = function(review) {
    databaseRef.push().set(review);
  };

  module.reviewData = reviewData;
})(window);
