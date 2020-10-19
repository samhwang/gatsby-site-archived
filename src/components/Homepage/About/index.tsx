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
  const {
    site: {
      siteMetadata: { personalInformation },
    },
  } = useStaticQuery(AboutQuery);

  return <PureAbout personalInformation={personalInformation} />;
}

export default About;
