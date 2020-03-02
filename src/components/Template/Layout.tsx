import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../../assets/sass/resume.scss';

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <StaticQuery
      query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
      render={(data) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Resume' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div className="main-body">{children}</div>
        </>
      )}
    />
  );
}

export default Layout;
