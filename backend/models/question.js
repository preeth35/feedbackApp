const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({

  question:{
    type: String
  },

  options:[{
    type: String
  }]

});

module.exports = mongoose.models.Questions || mongoose.model('Questions', questionSchema);
