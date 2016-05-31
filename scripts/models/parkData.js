(function(module) {
  function Park(opts) {
    for (key in opts) this[key] = opts[key];
  }

  Park.all = [];

  Park.getParks = function(next) {
    $.ajax({
      url: 'https://data.seattle.gov/resource/3c4b-gdxv.json?city_feature=Off+Leash+Areas',
      type: 'GET',
      success: function(data) {
        Park.loadParks(data);
        next();
      }
    });
  }

  Park.prototype.toHtml = function(template) {
    var template = Handlebars.compile((template).html());
    return template(this);
  }

  Park.loadParks = function(data) {
    Park.all = data.map(function(ele){
      return new Park(ele);
    });
  };

  module.Park = Park;
})(window);
