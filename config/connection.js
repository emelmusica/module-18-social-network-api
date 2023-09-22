const mongoose = require ('mongoose');

mongoose.connect (
  process.env.MONGODB_URI || 'magodb://127.0.0.1:27017/socialapi'
);
// connect(connectionString);

module.exports = mongoose.connection;
