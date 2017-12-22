const mongoose = require('mongoose');
const config = require('config3');

mongoose.Promise = require('bluebird');

async function connectWithRetry () {
  try {
    // Auto-reconnect only works once we're connected
    await mongoose.connect(config.MONGO_URI);
  }
  catch (err) {
    console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
    // Otherwise wee want to try again within a few seconds
    setTimeout(connectWithRetry, 5000);
  }
}

if(process.env.NODE_ENV === 'test') {
  require('mockgoose')(mongoose).then(function() {
    console.log('USING MOCK DATABASE!');
    config.MONGO_URI = 'mongodb://localhost/kenlo-test';
    mongoose.connect(config.MONGO_URI);
  });
}
else {
  connectWithRetry();
}

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + config.MONGO_URI);
});

mongoose.connection.on('error', function () {
  console.error('Mongoose connection error: ' + config.mongo.uri);
});

mongoose.connection.on('disconnected', function () {
  console.error('Mongoose connection disconnected');
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose;
