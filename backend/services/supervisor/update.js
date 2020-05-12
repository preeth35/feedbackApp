const connectToDatabase = require(process.env.root_dir+'/shared/db');
const responseHandler = require(process.env.root_dir+'/shared/responsehandler');
const supervisor = require(process.env.root_dir+'/models/supervisor');
const E = require('shared/helpers/errorMessages');

module.exports.main = async event => {
  connectToDatabase(process.env.DB, context)
    .then(async () => {

      Supervisor.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
         .exec(function(err, data) {
           if (err) {
             responseHandler.error(err, E.updating, callback, origin);
           }
           responseHandler.success(callback,data, origin);
          });
      }).catch(err => {
        responseHandler.error(err, E.connecting, callback,origin);
      });

};
