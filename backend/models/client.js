const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({

  name:{
    type: String
  }

});

module.exports = mongoose.models.Clients || mongoose.model('Clients', clientSchema);
