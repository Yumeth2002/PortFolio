const mongoose = require('mongoose');

const WorkExperienceSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: String,
    required: true,
    trim: true
  },
  endDate: {
    type: String,
    trim: true,
    default: 'Present'
  },
  responsibilities: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('WorkExperience', WorkExperienceSchema);
