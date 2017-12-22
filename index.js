console.log('API starting up');

const db = require('./config/mongoose'); // open db as soon as possible
const config = require('config3');

const port = config.PORT || process.env.PORT || 3000;

console.log(`API listening for HTTP on port ${port}`);
const httpServer = require('./app/app').listen(port);

function shutdown() {
  console.log('\nAPI shutting down');
  httpServer.close();
  db.connection.close().then(() => {
    console.log('Shutdown completed');
    process.exit(0);
  });
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);