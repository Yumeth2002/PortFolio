import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-brand">MyPortfolio</div>
      <div className="nav-links">
        <Link to="/" onClick={() => navigate('/')}>Home</Link>
        <Link to="education" spy={true} smooth={true} offset={-70} duration={500}>Education</Link>
        <Link to="qualifications" spy={true} smooth={true} offset={-70} duration={500}>Professional Qualifications</Link>
        <Link to="experience" spy={true} smooth={true} offset={-70} duration={500}>Work Experience</Link>
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
        <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
        <Link to="extracurricular" spy={true} smooth={true} offset={-70} duration={500}>Extracurricular Activities</Link>
        <Link to="languages" spy={true} smooth={true} offset={-70} duration={500}>Languages</Link>
        <button className="admin-btn" onClick={() => navigate('/admin')}>Admin</button>
      </div>
    </nav>
  );
}

export default Navbar;
