import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
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
