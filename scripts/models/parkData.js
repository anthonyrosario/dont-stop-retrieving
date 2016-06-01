(function(module) {

  function Park(opts) {
    for (key in opts) this[key] = opts[key];
  }

  Park.all = [];

  Park.prototype.toHtml = function(template) {
    var template = Handlebars.compile((template).html());
    return template(this);
  };

  Park.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS parks (' +
      'id INTEGER PRIMARY KEY, ' +
      'name VARCHAR NOT NULL, ' +
      'address VARCHAR NOT NULL, ' +
      'latitude VARCHAR NOT NULL, ' +
      'longitude VARCHAR NOT NULL, ' +
      'website VARCHAR NOT NULL,' +
      'siteUrl VARCHAR NOT NULL,' +
      'cityFeature VARCHAR NOT NULL,' +
      'imageUrl VARCHAR NOT NULL,' +
      'hours VARCHAR NOT NULL);',
    callback
    );
  };

  Park.prototype.insertRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO parks (name, address, latitude, longitude, website, siteUrl, cityFeature, imageUrl, hours) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);',
          'data': [this.common_name, this.address, this.latitude, this.longitude, this.website, this.siteUrl, this.city_feature, this.imageUrl, this.hours],
        }
      ],
      callback
    );
  };

  Park.prototype.deleteRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'DELETE FROM parks WHERE id = ?;',
          'data': [this.id]
        }
      ],
      callback
    );
  };

  Park.prototype.updateRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'UPDATE parks SET name = ?, address = ?, latitude = ?, longitude = ?, website = ?;',
          'data': [this.common_name, this.address, this.latitude, this.longitude, this.website]
        }
      ],
      callback
    );
  };

  Park.addUniqueIdentifier = function() {
    Park.all.forEach(function(park) {
      var name = park.common_name.replace(/\W+/g, '-');
      park.siteUrl = name;
      console.log(park.siteUrl);
    })
  }

  Park.getParks = function(next) {
    $.ajax({
      url: 'https://data.seattle.gov/resource/3c4b-gdxv.json?city_feature=Off+Leash+Areas',
      type: 'GET',
      success: function(data) {
        Park.createParksArray(data);
        Park.all.forEach(function(a){
          a.insertRecord();
        });
        createParks();
        next;
      }
    });
  };

  Park.createParksArray = function(data) {
    Park.all = data.map(function(ele){
      return new Park(ele);
    });
    Park.addUniqueIdentifier();
    Park.addData();
  }

  Park.loadParks = function(rows) {
    Park.all = rows.map(function(ele){
      return new Park(ele);
    });
  };

  Park.initHomePage = function(){
    console.log('fix');
  };

  Park.fetchAll = function(callback) {
    webDB.execute('SELECT * FROM parks', function(rows) {
      if (rows.length) {
        Park.loadParks(rows);
        callback();
      } else {
        Park.getParks();
        webDB.execute('SELECT * FROM parks', function(rows) {
          Park.loadParks(rows);
          callback;
        });
      }
    });
  };

  Park.addData = function() {
    for (var i = 0; i < Park.all.length; i++){
      Park.all[i].hours = hours[i];
      Park.all[i].imageUrl = imgs[i];
    }
  };

  Park.findWhere = function(value, callback) {
    var singleParkObj = Park.all.filter(function(a) {
      if(a.siteUrl === value) {
        console.log(a);
        return a;
      }
    });
    callback(singleParkObj);
  };

  module.Park = Park;
})(window);
