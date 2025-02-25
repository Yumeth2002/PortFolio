import React, { useState } from 'react';

function EducationForm() {
  const [formData, setFormData] = useState({
    degree: '',
    university: '',
    specialization: '',
    startYear: '',
    endYear: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/education', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Education added successfully!');
        setFormData({
          degree: '',
          university: '',
          specialization: '',
          startYear: '',
          endYear: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Education</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Degree:</label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>University:</label>
          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Specialization:</label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Start Year:</label>
          <input
            type="number"
            name="startYear"
            value={formData.startYear}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Year:</label>
          <input
            type="number"
            name="endYear"
            value={formData.endYear}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Education</button>
      </form>
    </div>
  );
}

export default EducationForm;
