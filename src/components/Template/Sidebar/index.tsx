import { useStaticQuery, graphql } from 'gatsby';
import PureSidebar from './PureSidebar';

function Sidebar() {
  const SidebarQuery = graphql`
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
  const {
    site: {
      siteMetadata: { personalInformation },
    },
  } = useStaticQuery(SidebarQuery);

  return <PureSidebar personalInformation={personalInformation} />;
}

export default Sidebar;
