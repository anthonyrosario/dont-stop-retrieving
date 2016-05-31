(function(module) {
  var singleParkView = {};

  var render = function(park) {
    var template = Handlebars.compile($('#single-park-template').text());
    return template(park);
  }


  module.singleParkView = singleParkView;
})(window);
