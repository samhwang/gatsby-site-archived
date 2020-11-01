import Skill from './Skill';
import LangIcon from '../../Icons/LangIcon';
import type { SkillsMetadata, TechStackMetadata } from '../../../globals';

interface PureSkillsProps {
  skills: SkillsMetadata;
  techStack: TechStackMetadata;
}

function PureSkills({ skills, techStack }: PureSkillsProps) {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Skills and Proficiency</h2>

        {skills.map(({ title, description }) => (
          <Skill title={title} description={description} key={title} />
        ))}
        <ul className="list-inline dev-icons">
          {techStack.map((language) => (
            <LangIcon name={language} key={language} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PureSkills;
