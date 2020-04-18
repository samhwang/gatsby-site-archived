interface SidebarMetadata extends GraphQLSiteMetadata {
  site: {
    siteMetadata: {
      firstName: string;
      lastName: string;
    };
  };
}

interface SidebarProps {
  data: SidebarMetadata;
}
