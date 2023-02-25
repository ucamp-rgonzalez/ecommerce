const configure = (app) => {
  app.use('/auth', require('./auth'));
  app.use('/users', require('./users'));
};

module.exports = configure;
