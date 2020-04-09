import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

function Footer() {
  const GitHubLink = (
    <OutboundLink href="https://github.com/samhwang">Sam Huynh</OutboundLink>
  );

  const GitHubPages = (
    <OutboundLink href="https://pages.github.com/">GitHub Pages</OutboundLink>
  );

  const GatsbyJSLink = (
    <OutboundLink href="https://www.gatsbyjs.org/">GatsbyJS.</OutboundLink>
  );
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
      <p>
        {`© 2020 `}
        {GitHubLink}
        {`. Hosted on `}
        {GitHubPages}
        {`. Based on `}
        {GatsbyJSLink}
      </p>
    </section>
  );
}

export default Footer;
