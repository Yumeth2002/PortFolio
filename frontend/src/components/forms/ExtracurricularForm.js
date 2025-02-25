import React, { useState } from 'react';

function ExtracurricularForm() {
  const [formData, setFormData] = useState({
    activity: '',
    year: '',
    details: ''
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
      const response = await fetch('http://localhost:5000/api/extracurricular', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Extracurricular activity added successfully!');
        setFormData({
          activity: '',
          year: '',
          details: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Extracurricular Activity</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Activity:</label>
          <input
            type="text"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Details:</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
}

export default ExtracurricularForm;
