const connectToDatabase = require(process.env.root_dir+'/shared/db');
const responseHandler = require(process.env.root_dir+'/shared/responsehandler');
const Feedback = require(process.env.root_dir+'/models/feedback');
const E = require(process.env.root_dir+'/shared/errorMessages');

module.exports.main = (event, context, callback) => {
  connectToDatabase(process.env.DB, context)
    .then(async () => {
      // logic
      Feedback.create(JSON.parse(event.body),
        function(err, data) {
          if (err) {
            responseHandler.error(E.creating, callback);
          }
        responseHandler.success(data, callback);
      })
       
    }).catch(
      // Error
      err => responseHandler.error(E.connecting, callback)
      );

};
