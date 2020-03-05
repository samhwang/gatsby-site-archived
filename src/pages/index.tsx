import React from 'react';
import Layout from '../components/Template/Layout';
import AboutSection from '../components/Homepage/About/AboutSection';
import ExperiencesSection from '../components/Homepage/Experiences/ExperiencesSection';
import EducationSection from '../components/Homepage/Education/EducationSection';
import ProjectSection from '../components/Homepage/Projects/ProjectSection';
import SkillsSection from '../components/Homepage/Skills/SkillsSection';

function IndexPage() {
  return (
    <Layout>
      <AboutSection />
      <hr className="m-0" />
      <ExperiencesSection />
      <hr className="m-0" />
      <EducationSection />
      <hr className="m-0" />
      <SkillsSection />
      <hr className="m-0" />
      <ProjectSection />
      <hr className="m-0" />
    </Layout>
  );
}

export default IndexPage;
