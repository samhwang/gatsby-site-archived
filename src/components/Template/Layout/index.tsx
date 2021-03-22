import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import '../../../assets/sass/resume.scss';
import '../../Icons';
import useSiteMetadata from '../../../hooks/useSiteMetadata';

export type LayoutProps = {
  children: ReactNode | Element;
};

function Layout({ children }: LayoutProps) {
  const { title, description, personalInformation } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <html lang="en" />
      </Helmet>
      <div className="main-body">
        <Sidebar personalInformation={personalInformation} />
        <div className="container-fluid p-0">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
