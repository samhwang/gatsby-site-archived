import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PureAbout from './PureAbout';

function About() {
  const AboutQuery = graphql`
    query AboutQuery {
      site {
        siteMetadata {
          personalInformation {
            firstName
            lastName
            address
            email
            socialLinks {
              icon
              name
              url
            }
          }
        }
      }
    }
  `;

  function renderAbout(data: AboutMetadata) {
    return <PureAbout data={data} />;
  }

  return <StaticQuery query={AboutQuery} render={renderAbout} />;
}

export default About;
