import React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';

function Footer() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
      <p>
        &copy; 2020{' '}
        <OutboundLink href="https://github.com/samhwang">
          Sam Huynh
        </OutboundLink>
        . Hosted on{' '}
        <OutboundLink href="https://pages.github.com/">
          GitHub Pages
        </OutboundLink>
        . Based on{' '}
        <OutboundLink href="https://www.gatsbyjs.org/">GatsbyJS.</OutboundLink>
      </p>
    </section>
  );
}

export default Footer;
