import { useStaticQuery, graphql } from 'gatsby';
import { JobDescriptionProps } from './JobDescription';

function useExperienceData(): JobDescriptionProps[] {
  const experienceQuery = graphql`
    query ExperienceQuery {
      site {
        siteMetadata {
          personalInformation {
            experience {
              title
              companyName
              description
              duration
              techIcons
              technologies
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(experienceQuery);
  return data.site.siteMetadata;
}

export default useExperienceData;
