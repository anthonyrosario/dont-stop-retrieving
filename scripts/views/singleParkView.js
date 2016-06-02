(function(module) {
  var singleParkView = {};

  var render = function(park) {
    var template = Handlebars.compile($('#single-park-template').text());
    return template(park);
  };

  singleParkView.initSinglePark = function(park) {
    $('#park-info').empty();
    $('#park-info').append(render(park[0]));
    $('#single-park .search-results').empty();
    $('#single-park').fadeIn('fast').siblings().hide();
  };

  module.singleParkView = singleParkView;
})(window);
