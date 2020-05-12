const connectToDatabase = require(process.env.root_dir+'/shared/db');
const responseHandler = require(process.env.root_dir+'/shared/responsehandler');
const Client = require(process.env.root_dir+'/models/client');
const E = require('shared/helpers/errorMessages');


module.exports.main = async event => {
  connectToDatabase(process.env.DB, context)
    .then(async () => {

      Client.findById(event.pathParameters.id)
       .exec(function(err, data) {
         if (err) {
           responseHandler.error(err, E.retrieving, callback,origin);
           }
         responseHandler.success(callback,data,origin);
       });

    }).catch(err => {
      responseHandler.error(err, E.connecting, callback,origin);
    });
};
