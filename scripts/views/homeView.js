(function(module) {
  //creates empty homeView object
  var homeView = {};
  //Method shows home sections and hides sibling sections
  homeView.initHomePage = function() {
    $('#home').show().siblings().hide();
  }
  module.homeView = homeView;
})(window);
