function error(errorInfo, callback) {
	callback(null,{
		statusCode: 500,
	  headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true
		},
		body: JSON.stringify(errorInfo, callback)
		});
	return;
}

function success(data, callback) {
	callback(null,{
		statusCode: 200,
	  headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true
		},
		body: JSON.stringify(data)
		});
	return;
}

module.exports.error = error;
module.exports.success = success;
