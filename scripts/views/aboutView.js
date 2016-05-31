(function(module) {
  // creates empty aboutView object
  var aboutView = {};
  //Function shows abouts section and hides sibling sections
  aboutView.index = function() {
    $('#about').show().siblings().hide();
  }
  module.aboutView = aboutView;
})(window);
