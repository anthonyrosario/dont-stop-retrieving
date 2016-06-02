(function(module){
  var homeController = {};

  homeController.index = function() {
    homeView.initHomePage();
  };

  module.homeController = homeController;
})(window);
