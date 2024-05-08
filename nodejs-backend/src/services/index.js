const users = require("./users/users.service.js");
const userProfile = require("./userProfile/userProfile.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(userProfile);
    // ~cb-add-configure-service-name~
};
