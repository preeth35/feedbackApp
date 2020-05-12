const connectToDatabase = require(process.env.root_dir+'/shared/db');
const responseHandler = require(process.env.root_dir+'/shared/responsehandler');
const Question = require(process.env.root_dir+'/models/question');
const E = require(process.env.root_dir+'/shared/errorMessages');


module.exports.main = (event, context, callback) => {
  connectToDatabase(process.env.DB, context)
    .then(async () => {

      Question.findByIdAndRemove(event.pathParameters.id)
       .exec(function(err, data) {
          if (err) {
            responseHandler.error(E.removing, callback);
            }
          responseHandler.success(data,callback);
       });

    }).catch(err => {
      responseHandler.error(E.connecting, callback);
    });
};
