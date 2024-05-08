const { UserProfile } = require('./userProfile.class');
const createModel = require('../../models/userProfile.model');
const hooks = require('./userProfile.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/userProfile', new UserProfile(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('userProfile');

  service.hooks(hooks);
};