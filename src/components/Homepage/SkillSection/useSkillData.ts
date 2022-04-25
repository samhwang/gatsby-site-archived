import { useStaticQuery, graphql } from 'gatsby';
import { SkillProps } from './Skill';

export interface SkillData {
  skills: SkillProps[];
  techStack: string[];
}

function useSkillData(): SkillData {
  const skillQuery = graphql`
    query SkillQuery {
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

  const data = useStaticQuery(skillQuery);
  return data.site.siteMetadata.personalInformation;
}

export default useSkillData;
