module.exports = {
  MONGO_URI: process.env.NODE_ENV === 'test' ?
      'mongodb://localhost:27017/kenlo-test' :
      'mongodb://localhost:27017/kenlo'
};