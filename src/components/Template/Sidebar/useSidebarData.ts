import { useStaticQuery, graphql } from 'gatsby';

interface SidebarData {
  firstName: string;
  lastName: string;
}

function useSidebarData(): SidebarData {
  const sidebarQuery = graphql`
    query SidebarQuery {
      site {
        siteMetadata {
          personalInformation {
            firstName
            lastName
          }
        }
      }
    }
  `;

  const data = useStaticQuery(sidebarQuery);
  return data.site.siteMetadata.personalInformation;
}

export default useSidebarData;
