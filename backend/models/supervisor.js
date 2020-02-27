const mongoose = require("mongoose");

const supervisorSchema = new mongoose.Schema({

  name:{
    type: String
  }

});

module.exports = mongoose.models.Supervisors || mongoose.model('Supervisors', supervisorSchema);
