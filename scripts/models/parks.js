(function(module) {
  //creating empty Parks object
  var Parks = {};
  //creating an empty array of all the Parks.
  Parks.all = [];
  //the get call to obtain the API data
  Parks.requestParks = function(callback) {
    $.get().done(function(data, message, xhr) {
      parks.all = data;
    })
    .done(callback);
  };
  //generic Parks filtering method.
  Parks.with = function(attr) {
    return parks.all.filter(function(data) {
      return data[attr];
    });
  };
  module.Parks = Parks;
})(window);
