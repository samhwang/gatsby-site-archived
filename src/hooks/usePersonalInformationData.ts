import { useStaticQuery, graphql } from 'gatsby';

export default function usePersonalInformationData() {
  const PersonalInfoQuery = graphql`
    query PersonalInfoQuery {
      site {
        siteMetadata {
          personalInformation {
            firstName
            lastName
            address
            email
            socialLinks {
              icon
              name
              url
            }
            projects {
              title
              description
              url
            }
            education {
              institute
              degree
              major
              duration
            }
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

  const data = useStaticQuery(PersonalInfoQuery);
  const { personalInformation } = data.site.siteMetadata;

  return personalInformation;
}
