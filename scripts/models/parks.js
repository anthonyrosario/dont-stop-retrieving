(function(module){
  var parksData = {};

  parksData.all = [];

  parksData.getDogParks = function() {
    $.ajax({
    url: 'https://data.seattle.gov/resource/3c4b-gdxv.json',
    type: 'GET',
    headers: { access_token: process.env.PARKS_TOKEN },
    success: function(data, message, xhr) {
      parksData.all = data.filter(function(obj) {
        return obj.city_feature === 'Off Leash Areas'
      }
    }
  }

  parksData.getDogParks();
  module.parksData = parksData;
})(window)
