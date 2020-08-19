type SectionType = {
  id: string;
  content: React.ReactNode | Element;
};

type LayoutProps = {
  sections: SectionType[];
};

type LayoutRenderProps = LayoutProps & {
  siteMetadata: SiteMetadata;
};
