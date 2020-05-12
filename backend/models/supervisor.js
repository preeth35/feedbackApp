const mongoose = require("mongoose");

const supervisorSchema = new mongoose.Schema({

  firstName:{
    type: String
  },

  surName:{
    type: String
  },

  supId:{
    type: String
  }

});

module.exports = mongoose.models.Supervisors || mongoose.model('Supervisors', supervisorSchema);
