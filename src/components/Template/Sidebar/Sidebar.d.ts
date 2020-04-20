type SidebarMetadata = {
  site: {
    siteMetadata: {
      firstName: string;
      lastName: string;
    };
  };
};

type SidebarProps = {
  data: SidebarMetadata;
};
