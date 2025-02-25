const express = require('express');
const WorkExperience = require('../models/WorkExperience');

const router = express.Router();

// Add Work Experience
router.post('/', async (req, res) => {
  try {
    const newExperience = new WorkExperience(req.body);
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Work Experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await WorkExperience.find().sort({ startDate: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Work Experience
router.get('/:id', async (req, res) => {
  try {
    const experience = await WorkExperience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Work experience not found' });
    }
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Work Experience
router.put('/:id', async (req, res) => {
  try {
    const experience = await WorkExperience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!experience) {
      return res.status(404).json({ message: 'Work experience not found' });
    }
    res.json(experience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Work Experience
router.delete('/:id', async (req, res) => {
  try {
    const experience = await WorkExperience.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Work experience not found' });
    }
    res.json({ message: 'Work experience deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
