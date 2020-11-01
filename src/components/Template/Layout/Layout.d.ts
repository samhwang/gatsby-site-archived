import type { ReactNode } from 'react';
import type { SiteMetadata } from '../../../globals';

export type SectionType = {
  id: string;
  content: ReactNode | Element;
};

export type LayoutProps = {
  sections: SectionType[];
};

export type LayoutRenderProps = LayoutProps & {
  siteMetadata: SiteMetadata;
};
