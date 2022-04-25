import { useStaticQuery, graphql } from 'gatsby';
import { SchoolProps } from './School';

function useEducationData(): SchoolProps[] {
  const educationQuery = graphql`
    query EducationQuery {
      site {
        siteMetadata {
          personalInformation {
            education {
              institute
              degree
              major
              duration
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(educationQuery);
  return data.site.siteMetadata.personalInformation;
}

export default useEducationData;
