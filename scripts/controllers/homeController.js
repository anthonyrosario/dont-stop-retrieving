(function(module){
  var homeController = {};

  homeController.index = function() {
    homeView.index();
  }

  module.homeController = homeController;
})(window);
