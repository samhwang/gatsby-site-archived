import { Fragment } from 'react';
import type { FC, ReactNode } from 'react';
import { Layout } from '../components/Template';
import {
  About,
  Education,
  Experiences,
  ProjectSection,
  SkillSection,
} from '../components/Homepage';

export interface SectionType {
  id: string;
  content: ReactNode | Element;
}

const IndexPage: FC = () => {
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
};

export default IndexPage;
