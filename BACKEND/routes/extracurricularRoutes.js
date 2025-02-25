const express = require('express');
const Extracurricular = require('../models/Extracurricular');

const router = express.Router();

// Add Extracurricular Activity
router.post('/', async (req, res) => {
  try {
    const newActivity = new Extracurricular(req.body);
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Activities
router.get('/', async (req, res) => {
  try {
    const activities = await Extracurricular.find().sort({ year: -1 });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Activity
router.get('/:id', async (req, res) => {
  try {
    const activity = await Extracurricular.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Activity
router.put('/:id', async (req, res) => {
  try {
    const activity = await Extracurricular.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(activity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Activity
router.delete('/:id', async (req, res) => {
  try {
    const activity = await Extracurricular.findByIdAndDelete(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json({ message: 'Activity deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
