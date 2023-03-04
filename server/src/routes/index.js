const authToken = require('../middlewares/authToken');

const configure = (app) => {
  app.use('/auth', require('./auth'));
  app.use('/users', authToken, require('./users'));
};

module.exports = configure;
