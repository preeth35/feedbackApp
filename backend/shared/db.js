const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;
var cachedDb = null;

module.exports = connectToDatabase = (DBstring, context = null) => {
  if(context !== null) {
    context.callbackWaitsForEmptyEventLoop = false;
  }

  if (cachedDb) {
    console.log('=> using cached database connection');
    return Promise.resolve(cachedDb);
  }

  return mongoose.connect(DBstring)
    .then(db => {
      cachedDb = db;
      console.log('=> using new database connection');
      return Promise.resolve(cachedDb);
    }).catch(err => {
      console.log('=> a database error occurred: ', err);
      return Promise.reject("Failed to connect to the database.");
    })

};
