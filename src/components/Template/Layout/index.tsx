import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PureLayout from './PureLayout';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const SiteMetadataQuery = graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `;

  function renderLayout(data: SiteMetadata) {
    return <PureLayout data={data}>{children}</PureLayout>;
  }

  return <StaticQuery query={SiteMetadataQuery} render={renderLayout} />;
}

export default Layout;
