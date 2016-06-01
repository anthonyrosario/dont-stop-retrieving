(function(module) {
  function Park(opts) {
    for (key in opts) this[key] = opts[key];
  }

  Park.all = [];

  function addUniqueIdentifier() {
    for (var i = 0; i < Park.all.length; i++) {
      var name = Park.all[i].common_name.replace(/\s/g, '-');
      console.log(name);
      Park.all[i].id = name;
    }
  }

  Park.getParks = function(next) {
    $.ajax({
      url: 'https://data.seattle.gov/resource/3c4b-gdxv.json?city_feature=Off+Leash+Areas',
      type: 'GET',
      success: function(data) {
        Park.loadParks(data);
        createParks();
        next();
      }
    });
  };

  Park.prototype.toHtml = function(template) {
    var template = Handlebars.compile((template).html());
    return template(this);
  };

  Park.loadParks = function(data) {
    Park.all = data.map(function(ele){
      return new Park(ele);
    });
    addUniqueIdentifier();
  };

  Park.addData = function() {
    for (var i = 0; i < Park.all.length; i++){
      Park.all[i].hours = hours[i];
      Park.all[i].img = imgs[i];
    }
  };

  Park.findWhere = function(value, callback) {
    var singleParkObj = Park.all.filter(function(a) {
      if(a.id === value) {
        return a;
      }
    });
    callback(singleParkObj);
  };

  module.Park = Park;
})(window);
