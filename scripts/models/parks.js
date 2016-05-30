(function(module){
  var parksData = {};

  parksData.all = [];

  parksData.getDogParks = function() {

  $.get('https://data.seattle.gov/resource/3c4b-gdxv.json')
    .done(function(data, message, xhr) {
      parksData.all = data.filter(function(obj) {
        return obj.city_feature === 'Off Leash Areas'
      });
    })
}

  module.parksData = parksData;
})(window)
