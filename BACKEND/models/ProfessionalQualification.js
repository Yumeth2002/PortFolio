const mongoose = require('mongoose');

const ProfessionalQualificationSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: true,
    trim: true
  },
  course: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true,
    min: 1900,
    max: new Date().getFullYear()
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ProfessionalQualification', ProfessionalQualificationSchema);
