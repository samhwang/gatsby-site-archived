import React from 'react';
import PureSkills from './PureSkills';
import '../../../assets/sass/resume.scss';

export default {
  title: 'Skills Section Component',
  component: PureSkills,
};

export function SkillSectionComponent() {
  const skills = [
    {
      title: 'asdfasdf',
      description: ['asdfasdf1234'],
    },
  ];
  const techStack = ['js'];

  return <PureSkills skills={skills} techStack={techStack} />;
}
