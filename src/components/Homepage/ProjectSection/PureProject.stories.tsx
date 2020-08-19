import React from 'react';
import PureProject from './PureProject';
import '../../../assets/sass/resume.scss';

export default {
  title: 'Projects Component',
  component: PureProject,
};

export function ProjectSectionComponent() {
  const projects = [
    {
      title: 'title',
      description: 'description',
      url: 'https://samhwang.github.io',
    },
  ];

  return <PureProject projects={projects} />;
}
