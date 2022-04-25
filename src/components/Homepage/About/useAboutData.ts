import { useStaticQuery, graphql } from 'gatsby';

interface SocialLink {
  icon: string;
  name: string;
  url: string;
}

export interface AboutData {
  firstName: string;
  lastName: string;
  address: string;
  socialLinks: SocialLink[];
}

function useAboutData(): AboutData {
  const AboutQuery = graphql`
    query AboutQuery {
      site {
        siteMetadata {
          personalInformation {
            firstName
            lastName
            address
            socialLinks {
              icon
              name
              url
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(AboutQuery);
  return data.site.siteMetadata.personalInformation;
}

export default useAboutData;
