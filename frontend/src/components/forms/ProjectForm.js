import React, { useState } from 'react';

function ProjectForm() {
  const [formData, setFormData] = useState({
    title: '',
    role: '',
    technologies: [''],
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTechnologyChange = (index, value) => {
    const newTechnologies = [...formData.technologies];
    newTechnologies[index] = value;
    setFormData({
      ...formData,
      technologies: newTechnologies
    });
  };

  const addTechnology = () => {
    setFormData({
      ...formData,
      technologies: [...formData.technologies, '']
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Project added successfully!');
        setFormData({
          title: '',
          role: '',
          technologies: [''],
          description: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Technologies:</label>
          {formData.technologies.map((tech, index) => (
            <input
              key={index}
              type="text"
              value={tech}
              onChange={(e) => handleTechnologyChange(index, e.target.value)}
              className="mb-2"
            />
          ))}
          <button type="button" onClick={addTechnology} className="add-btn">
            Add Technology
          </button>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
