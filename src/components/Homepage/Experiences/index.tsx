import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PureExperience from './PureExperience';

function Experiences() {
  const ExperiencesQuery = graphql`
    query Experiences {
      site {
        siteMetadata {
          personalInformation {
            experience {
              title
              companyName
              description
              duration
              techIcons
              technologies
            }
          }
        }
      }
    }
  `;
  const {
    site: {
      siteMetadata: {
        personalInformation: { experience },
      },
    },
  } = useStaticQuery(ExperiencesQuery);

  return <PureExperience experiences={experience} />;
}

export default Experiences;
