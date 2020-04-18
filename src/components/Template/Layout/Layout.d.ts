interface SiteMetadata extends GraphQLSiteMetadata {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

interface LayoutProps {
  children: React.ReactNode;
  data: SiteMetadata;
}
