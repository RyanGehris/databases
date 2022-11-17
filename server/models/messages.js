var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('select m.message, m.roomname, u.username from messages m inner join users u on u.id = m.userid;', (err, results) => {
      if (err) {
        console.log('error in messages.js getAll');
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }, // a function which produces all the messages
  create: function (requestBody, callback) {
    let {username, message, roomname} = requestBody;
    var newQuery = `INSERT INTO messages (message, userid, roomname) VALUES ("${message}", (SELECT id from users WHERE username = "${username}"), "${roomname}");`;
    db.query(newQuery, (err, results) => {
      if (err) {
        callback(err);
      } else {
        console.log(results);
        callback(null, 'DB create successful!');
      }
    });
  } // a function which can be used to insert a message into the database
};
