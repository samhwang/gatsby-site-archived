interface SiteMetadata extends GraphQLSiteMetadata {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

interface SectionType {
  id: string;
  content: React.ReactNode | Element;
}

interface LayoutProps {
  sections: Array<SectionType>;
}

interface LayoutRenderProps extends LayoutProps {
  data: SiteMetadata;
}
