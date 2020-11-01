import { useStaticQuery, graphql } from 'gatsby';
import PureLayout from './PureLayout';
import type { LayoutProps } from './Layout';

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
  const { site: siteMetadata } = useStaticQuery(SiteMetadataQuery);

  return <PureLayout siteMetadata={siteMetadata} sections={sections} />;
}

export default Layout;
