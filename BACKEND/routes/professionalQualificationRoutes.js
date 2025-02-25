const express = require('express');
const ProfessionalQualification = require('../models/ProfessionalQualification');

const router = express.Router();

// Add Professional Qualification
router.post('/', async (req, res) => {
  try {
    const newQualification = new ProfessionalQualification(req.body);
    await newQualification.save();
    res.status(201).json(newQualification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Professional Qualifications
router.get('/', async (req, res) => {
  try {
    const qualifications = await ProfessionalQualification.find().sort({ year: -1 });
    res.json(qualifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Professional Qualification
router.get('/:id', async (req, res) => {
  try {
    const qualification = await ProfessionalQualification.findById(req.params.id);
    if (!qualification) {
      return res.status(404).json({ message: 'Qualification not found' });
    }
    res.json(qualification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Professional Qualification
router.put('/:id', async (req, res) => {
  try {
    const qualification = await ProfessionalQualification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!qualification) {
      return res.status(404).json({ message: 'Qualification not found' });
    }
    res.json(qualification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Professional Qualification
router.delete('/:id', async (req, res) => {
  try {
    const qualification = await ProfessionalQualification.findByIdAndDelete(req.params.id);
    if (!qualification) {
      return res.status(404).json({ message: 'Qualification not found' });
    }
    res.json({ message: 'Qualification deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
