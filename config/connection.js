const { connect, connection } = require ('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'magodb://127.0.0.1:27017/socialapi'; 

connect(connectionString);

module.exports = connection;
