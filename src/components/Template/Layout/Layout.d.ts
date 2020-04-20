type SiteMetadata = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
};

type SectionType = {
  id: string;
  content: React.ReactNode | Element;
};

type LayoutProps = {
  sections: Array<SectionType>;
};

type LayoutRenderProps = LayoutProps & {
  data: SiteMetadata;
};
