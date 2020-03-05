import React from 'react';
import Layout from '../components/Template/Layout';
import Sidebar from '../components/Template/Sidebar';
import Footer from '../components/Template/Footer';
import AboutSection from '../components/Homepage/About/AboutSection';
import ExperiencesSection from '../components/Homepage/Experiences/ExperiencesSection';
import EducationSection from '../components/Homepage/Education/EducationSection';
import ProjectSection from '../components/Homepage/Projects/ProjectSection';
import SkillsSection from '../components/Homepage/Skills/SkillsSection';

function IndexPage() {
  return (
    <Layout>
      <Sidebar />
      <div className="container-fluid p-0">
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
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
        >
          <Footer />
        </section>
      </div>
    </Layout>
  );
}

export default IndexPage;
