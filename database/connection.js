require('dotenv').config();
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl)
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));

module.exports = mongoose.connection;
