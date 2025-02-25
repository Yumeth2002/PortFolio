import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EducationForm from './forms/EducationForm';
import ExperienceForm from './forms/ExperienceForm';
import ProjectForm from './forms/ProjectForm';
import SkillForm from './forms/SkillForm';
import LanguageForm from './forms/LanguageForm';
import ExtracurricularForm from './forms/ExtracurricularForm';
import ProfessionalQualificationForm from './forms/ProfessionalQualificationForm';

function Admin() {
  const [activeForm, setActiveForm] = useState('education');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      <div className="form-selector">
        <button onClick={() => setActiveForm('education')}>Education</button>
        <button onClick={() => setActiveForm('experience')}>Experience</button>
        <button onClick={() => setActiveForm('projects')}>Projects</button>
        <button onClick={() => setActiveForm('skills')}>Skills</button>
        <button onClick={() => setActiveForm('languages')}>Languages</button>
        <button onClick={() => setActiveForm('extracurricular')}>Extracurricular</button>
        <button onClick={() => setActiveForm('qualifications')}>Qualifications</button>
      </div>
      {activeForm === 'education' && <EducationForm />}
      {activeForm === 'experience' && <ExperienceForm />}
      {activeForm === 'projects' && <ProjectForm />}
      {activeForm === 'skills' && <SkillForm />}
      {activeForm === 'languages' && <LanguageForm />}
      {activeForm === 'extracurricular' && <ExtracurricularForm />}
      {activeForm === 'qualifications' && <ProfessionalQualificationForm />}
    </div>
  );
}

export default Admin;
