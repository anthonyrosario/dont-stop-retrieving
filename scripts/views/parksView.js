(function(module) {
  var parksView = {};

  var ui = function() { //cache the DOM query if used more than once.
    var $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(data) { //render the url to the li
    return $('<li>').html('<a href="' + data.html_url + '">' + data.full_name +
  '</a>');
  };
  parksView.index = function() {
    ui(); //cache the DOM query to hide everything except data displayed
    $('#about ul').append(Parks.with('forks_count').map(render)); //render the data
  };
  module.parksView = parksView;
})(window);
