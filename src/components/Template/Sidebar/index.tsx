import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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

  function renderSidebar(data: SidebarMetadata) {
    return <PureSidebar data={data} />;
  }

  return <StaticQuery query={SidebarQuery} render={renderSidebar} />;
}

export default Sidebar;
