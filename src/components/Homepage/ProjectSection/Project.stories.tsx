import React from 'react';
import Project from './Project';
import '../../../assets/sass/resume.scss';

export default {
  title: 'Project Component',
  component: Project,
};

export function ProjectComponent() {
  const project = {
    title: 'title',
    description: 'description',
    url: 'https://samhwang.github.io',
  };

  return (
    <Project
      title={project.title}
      description={project.description}
      url={project.url}
    />
  );
}
