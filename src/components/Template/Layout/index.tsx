import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PureLayout from './PureLayout';

function Layout({ sections }: LayoutProps) {
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
    return <PureLayout data={data} sections={sections} />;
  }

  return <StaticQuery query={SiteMetadataQuery} render={renderLayout} />;
}

export default Layout;
