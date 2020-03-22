import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../../assets/sass/resume.scss';
import '../Icons';

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
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
      )}
    />
  );
}

export default Layout;
