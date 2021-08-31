import { useStaticQuery, graphql } from 'gatsby';

interface SiteMetadata {
  title: string;
  description: string;
}

const useSiteMetadata = (): SiteMetadata => {
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
};

export default useSiteMetadata;
