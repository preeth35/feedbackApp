const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({

  firstName:{
    type: String
  },

  surName:{
    type: String
  },

  clientId:{
    type: String
  }

});

module.exports = mongoose.models.Clients || mongoose.model('Clients', clientSchema);
