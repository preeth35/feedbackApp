const mongoose = require("mongoose");
const Supervisor = require('./supervisor');
const Client = require('./client');

const FeedbackSchema = new mongoose.Schema({
  supervisor:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supervisor'
  },
  client:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },
  feedback: {
    type: Object
  }
});

module.exports = mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);
