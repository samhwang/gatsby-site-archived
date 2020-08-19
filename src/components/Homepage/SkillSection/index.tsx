import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PureSkills from './PureSkills';

function SkillSection() {
  const SkillsQuery = graphql`
    query SkillsQuery {
      site {
        siteMetadata {
          personalInformation {
            skills {
              title
              description
            }
            techStack
          }
        }
      }
    }
  `;
  const {
    site: {
      siteMetadata: {
        personalInformation: { skills, techStack },
      },
    },
  } = useStaticQuery(SkillsQuery);

  return <PureSkills skills={skills} techStack={techStack} />;
}

export default SkillSection;
