import React from 'react';
import './Skill.css';

const skills = [
  { name: 'HTML', rating: 5 },
  { name: 'CSS', rating: 4 },
  { name: 'JavaScript', rating: 4 },
  { name: 'MySQL', rating: 4 },
  { name: 'Java', rating: 3 },
  { name: 'Python', rating: 4 },
];

const Skill = () => {
  return (
    <div className="skills-container" id="skill">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <div className="star-rating">
              {[...Array(5)].map((star, i) => (
                <span
                  key={i}
                  className={i < skill.rating ? 'filled' : 'empty'}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
