import React, { useState } from 'react';

function LanguageForm() {
  const [formData, setFormData] = useState({
    language: '',
    proficiency: ''
  });

  const proficiencyLevels = ['Native', 'Professional', 'Basic', 'Intermediate', 'Advanced'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/languages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Language added successfully!');
        setFormData({
          language: '',
          proficiency: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Language</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Language:</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Proficiency Level:</label>
          <select
            name="proficiency"
            value={formData.proficiency}
            onChange={handleChange}
            required
          >
            <option value="">Select Proficiency</option>
            {proficiencyLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
        <button type="submit">Add Language</button>
      </form>
    </div>
  );
}

export default LanguageForm;
