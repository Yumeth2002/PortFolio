import React, { useState } from 'react';

function ExperienceForm() {
  const [formData, setFormData] = useState({
    position: '',
    company: '',
    startDate: '',
    endDate: '',
    responsibilities: ['']
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResponsibilityChange = (index, value) => {
    const newResponsibilities = [...formData.responsibilities];
    newResponsibilities[index] = value;
    setFormData({
      ...formData,
      responsibilities: newResponsibilities
    });
  };

  const addResponsibility = () => {
    setFormData({
      ...formData,
      responsibilities: [...formData.responsibilities, '']
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/work-experience', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Experience added successfully!');
        setFormData({
          position: '',
          company: '',
          startDate: '',
          endDate: '',
          responsibilities: ['']
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="text"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            placeholder="Present (if current)"
          />
        </div>
        <div className="form-group">
          <label>Responsibilities:</label>
          {formData.responsibilities.map((responsibility, index) => (
            <input
              key={index}
              type="text"
              value={responsibility}
              onChange={(e) => handleResponsibilityChange(index, e.target.value)}
              className="mb-2"
            />
          ))}
          <button type="button" onClick={addResponsibility} className="add-btn">
            Add Responsibility
          </button>
        </div>
        <button type="submit">Add Experience</button>
      </form>
    </div>
  );
}

export default ExperienceForm;
