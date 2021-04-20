import type { FC } from 'react';
import { usePersonalInformationData } from '../../../hooks';
import Skill from './Skill';

const SkillSection: FC = () => {
  const { skills } = usePersonalInformationData();

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
      </div>
    </section>
  );
};

export default SkillSection;
