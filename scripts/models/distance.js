(function(module) {
  var MapLocation = {};
  MapLocation.distance = function(lat1, lon1, lat2, lon2, unit) {
    var radLat1 = Math.PI * lat1/180;
    var radLat2 = Math.PI * lat2/180;
    var radLon1 = Math.PI * lon1/180;
    var radLon2 = Math.PI * lon2/180;
    var theta = lon1-lon2;
    var radTheta = Math.PI * theta/180;
    var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if(unit === 'K') { dist = dist * 1.609344};
    if(unit === 'N') { dist = dist * 0.8684};
    return dist;
  };

  MapLocation.findDistance = function(array, userLat, userLon) {
    array.filter(function(a) {
      distance(userLat, userLon, a.latitude, a.longitude, 'M');
    })
    .sort(function(a, b) {
      return a - b;
    });
  }
});
