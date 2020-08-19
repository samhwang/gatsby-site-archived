import React from 'react';
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
  const data = useStaticQuery(SidebarQuery);

  return <PureSidebar data={data} />;
}

export default Sidebar;
