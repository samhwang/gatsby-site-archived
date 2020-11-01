import Project from './Project';
import type { ProjectsMetadata } from '../../../globals';

function PureProject({ projects }: { projects: ProjectsMetadata }) {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="projects"
    >
      <div className="w-100">
        <h2 className="mb-5">Projects</h2>
        <ul className="fa-ul mb-0">
          {projects.map(({ title, description, url }) => (
            <Project
              key={title}
              title={title}
              description={description}
              url={url}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PureProject;
