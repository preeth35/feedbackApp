const AWS = require('aws-sdk');
const connectToDatabase = require(process.env.root_dir+'/shared/db');
const responseHandler = require(process.env.root_dir+'/shared/responsehandler');
const Feedback = require(process.env.root_dir+'/models/feedback');

module.exports.main = (event, context, callback) => {
  connectToDatabase(process.env.DB, context)
    .then(async () => {
      Feedback.create(JSON.parse(event.body),
        function(err, data) {
          if (err) {
            responseHandler.error("Error creating Feedback", callback);
          }
        responseHandler.success(data, callback);
      })

    }).catch(err => responseHandler.error("Error connecting", callback));

};
