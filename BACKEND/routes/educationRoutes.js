const express = require('express');
const Education = require('../models/Education');
const router = express.Router();

// Add Education
router.post('/', async (req, res) => {
  try {
    const { degree, university, specialization, startYear, endYear } = req.body;
    const newEducation = new Education({
      degree,
      university,
      specialization,
      startYear,
      endYear
    });
    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Education
router.get('/', async (req, res) => {
  try {
    const education = await Education.find().sort({ startYear: -1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Education by ID
router.get('/:id', async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Education by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEducation) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.json(updatedEducation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Education by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedEducation = await Education.findByIdAndDelete(req.params.id);
    if (!deletedEducation) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.json({ message: 'Education entry deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
