import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import '../../../assets/sass/resume.scss';
import '../../Icons';

function PureLayout({ sections, siteMetadata }: LayoutRenderProps) {
  const { title, description } = siteMetadata;

  const children = sections.map(({ id, content }: SectionType) => (
    <Fragment key={id}>
      {content}
      <hr className="m-0" />
    </Fragment>
  ));

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
        <Sidebar />
        <div className="container-fluid p-0">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default PureLayout;
