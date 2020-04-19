import React from 'react';
import Layout from '../components/Template/Layout';
import About from '../components/Homepage/About';
import Experiences from '../components/Homepage/Experiences';
import Education from '../components/Homepage/Education';
import Projects from '../components/Homepage/Projects';
import Skills from '../components/Homepage/Skills';

function IndexPage() {
  const sections = [
    { id: 'about', content: <About /> },
    { id: 'experience', content: <Experiences /> },
    { id: 'education', content: <Education /> },
    { id: 'skills', content: <Skills /> },
    { id: 'projects', content: <Projects /> },
  ];

  return <Layout sections={sections} />;
}

export default IndexPage;
