
const { mulava } = require('./mulava.class');
const createModel = require('../../models/mulava.model');
const hooks = require('./mulava.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };


  app.use('/mulava', new mulava(options, app));


  const service = app.service('mulava');

  service.hooks(hooks);
};
