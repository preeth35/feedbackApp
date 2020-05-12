const AWS = require('aws-sdk');
const connectToDatabase = require(process.env.root_dir+'/shared/db');
const responseHandler = require(process.env.root_dir+'/shared/responsehandler');
const Supervisor = require(process.env.root_dir+'/models/supervisor');

module.exports.main = (event, context, callback) => {
  connectToDatabase(process.env.DB, context)
    .then(async () => {

      Supervisor.create(JSON.parse(event.body),
        function(err, data) {
          if (err) {
            responseHandler.error("Error creating Supervisor", callback);
          }
          else
          {
            responseHandler.success(data, callback);
          }
      });

    }).catch(err => responseHandler.error("Error connecting", callback));

};
