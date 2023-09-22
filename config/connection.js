const { connect, connection } = require ('mongoose');

const connectionString =
  process.env.MONGODB_URI || ''; // add DB //

connect(connectionString);

module.exports = connection;
