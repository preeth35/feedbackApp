const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({

  questionNo: {
    type: String
  },

  question:{
    type: String
  },

  action:{
    type: String
  },
  
  answer:{
    type: Object
  }

});

module.exports = mongoose.models.Questions || mongoose.model('Questions', questionSchema);
