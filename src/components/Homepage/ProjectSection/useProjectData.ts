import { useStaticQuery, graphql } from 'gatsby';
import { ProjectProps } from './Project';

function useProjectData(): ProjectProps[] {
  const projectQuery = graphql`
    query ProjectQuery {
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

  const data = useStaticQuery(projectQuery);
  return data.site.siteMetadata.personalInformation.projects;
}

export default useProjectData;
