var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('select * from users', (err, results) => {
      if (err) {
        console.log('error in users.js getAll');
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  create: function (requestBody, callback) {
    var newQuery = 'insert into users (username) values (\'' + requestBody.username + '\')';
    db.query(newQuery, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, 'DB user created!');
      }
    });
  }
};
