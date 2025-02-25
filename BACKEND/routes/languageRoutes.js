const express = require('express');
const Language = require('../models/Language');

const router = express.Router();

// Add Language
router.post('/', async (req, res) => {
  try {
    const newLanguage = new Language(req.body);
    await newLanguage.save();
    res.status(201).json(newLanguage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Languages
router.get('/', async (req, res) => {
  try {
    const languages = await Language.find().sort({ language: 1 });
    res.json(languages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Language
router.get('/:id', async (req, res) => {
  try {
    const language = await Language.findById(req.params.id);
    if (!language) {
      return res.status(404).json({ message: 'Language not found' });
    }
    res.json(language);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Language
router.put('/:id', async (req, res) => {
  try {
    const language = await Language.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!language) {
      return res.status(404).json({ message: 'Language not found' });
    }
    res.json(language);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Language
router.delete('/:id', async (req, res) => {
  try {
    const language = await Language.findByIdAndDelete(req.params.id);
    if (!language) {
      return res.status(404).json({ message: 'Language not found' });
    }
    res.json({ message: 'Language deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
