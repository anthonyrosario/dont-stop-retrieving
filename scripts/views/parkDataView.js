(function(module){
  var parkDataView = {};

  parkDataView.index = function() {
    console.log(Park.all);
    $('#results').show().siblings().hide();
    $('.search-results').empty();
    Park.all.forEach(function(park){
      $('.search-results').append(park.toHtml($('#park-template')));
    });
  };

  module.parkDataView = parkDataView;
})(window);
