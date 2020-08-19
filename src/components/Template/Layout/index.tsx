import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
  const data = useStaticQuery(SiteMetadataQuery);

  return <PureLayout data={data} sections={sections} />;
}

export default Layout;
