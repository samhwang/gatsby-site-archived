import { useStaticQuery, graphql } from 'gatsby';
import PureProject from './PureProject';

function ProjectSection() {
  const ProjectsQuery = graphql`
    query ProjectsQuery {
      site {
        siteMetadata {
          personalInformation {
            projects {
              title
              description
              url
            }
          }
        }
      }
    }
  `;
  const {
    site: {
      siteMetadata: {
        personalInformation: { projects },
      },
    },
  } = useStaticQuery(ProjectsQuery);

  return <PureProject projects={projects} />;
}

export default ProjectSection;
