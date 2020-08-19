import React from 'react';
import Skill from './Skill';
import '../../../assets/sass/resume.scss';

export default {
  title: 'Skill Component',
  component: Skill,
};

export function SkillComponent() {
  const skill = {
    title: 'asdfasdf',
    description: ['asdfasdf1234'],
  };

  return <Skill title={skill.title} description={skill.description} />;
}
