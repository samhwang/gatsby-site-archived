import React from 'react';
import Skill from './Skill';
import LangIcon from '../../Icons/LangIcon';
import { skills, techStack } from '../information';

function SkillSection() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Skills and Proficiency</h2>

        {skills.map((skillGroup, key) => (
          <Skill {...skillGroup} key={key} />
        ))}
        <ul className="list-inline dev-icons">
          {techStack.map((language, key) => (
            <LangIcon name={language} key={key} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SkillSection;
