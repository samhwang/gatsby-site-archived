import React from 'react';
import Layout from '../components/Template/Layout';
import About from '../components/Homepage/About';
import Experiences from '../components/Homepage/Experiences';
import Education from '../components/Homepage/Education';
import ProjectSection from '../components/Homepage/ProjectSection';
import SkillSection from '../components/Homepage/SkillSection';

function IndexPage() {
  const sections = [
    { id: 'about', content: <About /> },
    { id: 'experience', content: <Experiences /> },
    { id: 'education', content: <Education /> },
    { id: 'skills', content: <SkillSection /> },
    { id: 'projects', content: <ProjectSection /> },
  ];

  return <Layout sections={sections} />;
}

export default IndexPage;
