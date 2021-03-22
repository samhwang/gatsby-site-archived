import { useStaticQuery, graphql } from 'gatsby';

export default function usePersonalInformationData() {
  const PersonalInfoQuery = graphql`
    query PersonalInfoQuery {
      site {
        siteMetadata {
          personalInformation {
            firstName
            lastName
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

  const data = useStaticQuery(PersonalInfoQuery);
  const { personalInformation } = data.site.siteMetadata;

  return personalInformation;
}
