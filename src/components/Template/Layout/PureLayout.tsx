import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import '../../../assets/sass/resume.scss';
import '../../Icons';

function PureLayout({ children, data }: LayoutProps) {
  const { title, description } = data.site.siteMetadata;
  return (
    <>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: description,
          },
          {
            name: 'viewport',
            content:
              'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div className="main-body">
        <Sidebar />
        <div className="container-fluid p-0">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default PureLayout;
