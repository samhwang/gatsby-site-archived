import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
  const data = useStaticQuery(AboutQuery);

  return <PureAbout data={data} />;
}

export default About;
