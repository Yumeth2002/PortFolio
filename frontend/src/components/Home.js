import React, { useState, useEffect } from 'react';

function Home() {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [extracurricular, setExtracurricular] = useState([]);
  const [qualifications, setQualifications] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchEducation = await fetch('http://localhost:5000/api/education');
    const educationData = await fetchEducation.json();
    setEducation(educationData);

    const fetchExperience = await fetch('http://localhost:5000/api/work-experience');
    const experienceData = await fetchExperience.json();
    setExperience(experienceData);

    const fetchProjects = await fetch('http://localhost:5000/api/projects');
    const projectsData = await fetchProjects.json();
    setProjects(projectsData);

    const fetchSkills = await fetch('http://localhost:5000/api/skills');
    const skillsData = await fetchSkills.json();
    setSkills(skillsData);

    const fetchLanguages = await fetch('http://localhost:5000/api/languages');
    const languagesData = await fetchLanguages.json();
    setLanguages(languagesData);

    const fetchExtracurricular = await fetch('http://localhost:5000/api/extracurricular');
    const extracurricularData = await fetchExtracurricular.json();
    setExtracurricular(extracurricularData);

    const fetchQualifications = await fetch('http://localhost:5000/api/professional-qualifications');
    const qualificationsData = await fetchQualifications.json();
    setQualifications(qualificationsData);
  };

  return (
    <div className="home-container">
      <section id="home" className="hero-section">
        <div className="profile-image">
          <img src="/images/img0.jpeg" alt="Profile" />
        </div>
        <h1><h1>Yumeth Ransana </h1></h1>
        <h4>Welcome to My Portfolio</h4>
        <p>I am Yumeth Ransana, a motivated and enthusiastic IT undergraduate with a strong passion for technology and problem-solving. 
          Currently in my third year at SLIIT University, I have gained valuable experience working on various projects, 
          including web development and software applications. I am a quick learner, enjoy collaborating with others, 
          and am always eager to explore new technologies to enhance my skills. 
          My goal is to apply my knowledge in real-world applications and continue growing as a developer in the ever-evolving tech industry.</p>
        <p> Passionate IT Undergraduate | Aspiring Software Engineer | Problem Solver</p>
        <div className="contact-info">
    <p>
      <strong>Phone:</strong> <a href="tel:+94760317583">0760317583</a> |&nbsp;
      <strong>Email:</strong> <a href="mailto:yumethransana@gmail.com">yumethransana@gmail.com</a> |&nbsp;
      <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yumeth-ransana-797275317" target="_blank" rel="noopener noreferrer">Yumeth Ransana</a>
    </p>
  </div>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        <div className="grid-container">
          {education.map((edu) => (
            <div key={edu._id} className="card">
              <h3>{edu.degree}</h3>
              <p>{edu.university}</p>
              <p>{edu.specialization}</p>
              <p>{edu.startYear} - {edu.endYear}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="qualifications" className="section">
        <h2>Professional Qualifications</h2>
        <div className="grid-container">
          {qualifications.map((qual) => (
            <div key={qual._id} className="card">
              <h3>{qual.course}</h3>
              <p>{qual.institution}</p>
              <p>Duration: {qual.duration}</p>
              <p>Year: {qual.year}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
  <h2>Work Experience</h2>
  <div className="grid-container">
    {experience.map((exp) => (
      <div key={exp._id} className="card">
        <h3>{exp.position}</h3>
        <p>{exp.company}</p>
        <p>{exp.startDate} - {exp.endDate}</p>
        <div className="responsibilities">
          {exp.responsibilities.map((resp, index) => (
            <p key={index}>{resp}</p>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid-container">
          {projects.map((project) => (
            <div key={project._id} className="card">
              <h3>{project.title}</h3>
              <p>{project.role}</p>
              <p>{project.description}</p>
              <div className="tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="grid-container">
          {skills.map((skillCategory) => (
            <div key={skillCategory._id} className="card">
              <h3>{skillCategory.category}</h3>
              <div className="tags">
                {skillCategory.skills.map((skill, index) => (
                  <span key={index} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="extracurricular" className="section">
        <h2>Extracurricular Activities</h2>
        <div className="grid-container">
          {extracurricular.map((activity) => (
            <div key={activity._id} className="card">
              <h3>{activity.activity}</h3>
              <p>{activity.details}</p>
              <p>Year: {activity.year}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="languages" className="section">
        <h2>Languages</h2>
        <div className="grid-container">
          {languages.map((lang) => (
            <div key={lang._id} className="card">
              <h3>{lang.language}</h3>
              <p>Proficiency: {lang.proficiency}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
