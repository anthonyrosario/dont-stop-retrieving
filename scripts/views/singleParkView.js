(function(module) {
  var singleParkView = {};

  var render = function(park) {
    var template = Handlebars.compile($('#single-park-template').text());
    return template(park);
  }

  singleParkView.initSinglePark = function(park) {
    $('#park-info').empty();
    $('#park-info').append(park.toHtml($('#single-park-template')));
    $('#single-park .search-results').empty();
    // Park.all.forEach(function(a){
      // $('#single-park .search-results').append(a.toHtml($('#park-template')));
    // });
    $('#single-park').show().siblings().hide();
  }

  module.singleParkView = singleParkView;
})(window);
