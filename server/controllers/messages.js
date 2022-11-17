var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        res.send('Unable to retrieve messages');
      } else {
        res.send(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log(req.body);
    models.messages.create(req.body, (err, data) => {
      if (err) {
        res.send('Unable to post message');
      } else {
        res.send(data);
      }
    });
  } // a function which handles posting a message to the database
};
