const mulava = require('./mulava/mulava.service.js');

module.exports = function (app) {
  app.configure(mulava);
};
