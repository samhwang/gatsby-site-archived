import { Fragment } from 'react';
import type { ReactNode } from 'react';
import Layout from '../components/Template/Layout';
import About from '../components/Homepage/About';
import Experiences from '../components/Homepage/Experiences';
import Education from '../components/Homepage/Education';
import ProjectSection from '../components/Homepage/ProjectSection';
import SkillSection from '../components/Homepage/SkillSection';

export type SectionType = {
  id: string;
  content: ReactNode | Element;
};

function IndexPage() {
  const sections = [
    { id: 'about', content: <About /> },
    { id: 'experience', content: <Experiences /> },
    { id: 'education', content: <Education /> },
    { id: 'skills', content: <SkillSection /> },
    { id: 'projects', content: <ProjectSection /> },
  ];

  const children = sections.map(({ id, content }: SectionType) => (
    <Fragment key={id}>
      {content}
      <hr className="m-0" />
    </Fragment>
  ));

  return (
    <Layout title="Resume" description="Sam Huynh resume">
      {children}
    </Layout>
  );
}

export default IndexPage;
