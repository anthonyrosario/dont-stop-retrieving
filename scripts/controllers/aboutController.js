(function(module) {
  //creating an empty aboutController object.
  var aboutController = {};
  //routes the view to the About info
  aboutController.index = function() {
    parks.requestParks(parksView.index);
  };
  module.aboutController = aboutController;
})(window);
