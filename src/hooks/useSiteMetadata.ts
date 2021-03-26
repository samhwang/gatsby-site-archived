import { useStaticQuery, graphql } from 'gatsby';

export default function useSiteMetadata() {
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
  return data.site.siteMetadata;
}
