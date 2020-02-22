const AWS = require('aws-sdk');
const uuidv1 = require('uuid/v1');

module.exports.main = async event => {
  //Configuring region
  AWS.config.update({region: 'eu-west-1'});

  var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  var bodyData = JSON.parse(event.body);
  console.log(bodyData.supervisor);
  var feedbackMap = new Map();
  var feedback = bodyData.feedback;
  console.log(feedbackMap);
  for (var key of Object.keys(feedback))
  {
    feedbackMap[key] = {S: feedback[key]};
  }
  console.log(JSON.stringify(feedbackMap));
  var params = {
    TableName: 'feedback',
    Item: {
      item_id: {S: uuidv1()},
      feedback : {"M": feedbackMap },
      supervisor : bodyData.supervisor
    }
  };

  // Call DynamoDB to add the item to the table
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Success'
      },
      null,
      2
    )
  };
};
