require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./config/db')().then(() => {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  require('./routes')(app);

  app.listen(+process.env.APP_PORT, () => {
    console.log(`Server listen port ${process.env.APP_PORT}`);
  });
});
