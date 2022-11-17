var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
      if (err) {
        res.send('Unable to retrieve users');
      } else {
        res.send(data);
      }
    });
  },
  post: function (req, res) {
    models.users.create(req.body, (err, data) => {
      if (err) {
        res.send('Unable to post user');
      } else {
        res.send(data);
      }
    });
  }
};
