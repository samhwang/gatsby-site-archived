import React from 'react';
import Layout from '../components/Template/Layout';
import About from '../components/Homepage/About';
import Experiences from '../components/Homepage/Experiences';
import Education from '../components/Homepage/Education';
import Projects from '../components/Homepage/Projects';
import Skills from '../components/Homepage/Skills';

function IndexPage() {
  return (
    <Layout>
      <About />
      <hr className="m-0" />
      <Experiences />
      <hr className="m-0" />
      <Education />
      <hr className="m-0" />
      <Skills />
      <hr className="m-0" />
      <Projects />
      <hr className="m-0" />
    </Layout>
  );
}

export default IndexPage;
