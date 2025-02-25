const mongoose = require('mongoose');

const ExtracurricularSchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true
  },
  details: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Extracurricular', ExtracurricularSchema);
