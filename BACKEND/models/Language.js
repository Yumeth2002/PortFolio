const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
    trim: true
  },
  proficiency: {
    type: String,
    required: true,
    enum: ['Native', 'Professional', 'Basic', 'Intermediate', 'Advanced'],
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Language', LanguageSchema);
