const mongoose = require('mongoose');

const initDb = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = initDb;
