(function(module) {
  //iterating through each Parks object and adding the elements.
  function Parks (ele) {
    Parks.keys(ele).forEach(function(e, index, keys) {
      this[e] = ele[e];
    },this);
  }
  //using SQL to create data
  Parks.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS parks (' +
      'id INTEGER PRIMARY KEY, ' +
      'name VARCHAR NOT NULL, ' +
      'address VARCHAR NOT NULL, ' +
      'latitude VARCHAR NOT NULL, ' +
      'longitude VARCHAR NOT NULL, ' +
      'website VARCHAR NOT NULL);',
    callback
  );
  };
  //using SQL to allow truncation of parks
  Parks.truncateTable = function(callback) {
    webDB.execute(
      'DELETE FROM parks;',
      callback
    );
  };
  //using SQL to allow new park locations to be created.
  Parks.prototype.insertRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO parks (name, address, latitude, longitude, website) VALUES (?, ?, ?, ?, ?);',
          'data': [this.name, this.address, this.latitude, this.longitude, this.website],
        }
      ],
      callback
    );
  };
  //using SQL to allow new parks to be deleted
  Parks.prototype.deleteRecord = function(callback) {
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
//using SQL to amend records
  Parks.prototype.updateRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'UPDATE parks SET name = ?, address = ?, latitude = ?, longitude = ?, website = ?;',
          'data': [this.name, this.address, this.latitude, this.longitude, this.website]
        }
      ],
      callback
    );
  };
//using SQL to load all Park data into the table
  Parks.loadAll = function(rows) {
    Parks.all = rows.maps(function(ele) {
      return new parks(ele);
    });
  };
//using SQL to display the data or grab the data using AJAX call
  Parks.fetchAll = function(callback) {
    webDB.execute('SELECT * FROM parks ORDER BY location DESC', function(rows) {
      if (rows.length) {
        Parks.loadAll(rows);
        next();
      } else {
        $.ajax({
          url: '',
          type: GET,
          headers:{'Authorization': 'token' + PARKS_TOKEN},
          success: function(data) {console.log(data);}
        });
        webDB.execute('SELECT * FROM parks', function(rows) {
          Parks.loadAll(rows);
          callback();
        });
      }
    });
  };

  module.Parks = Parks;
})(window);
