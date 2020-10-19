import { useStaticQuery, graphql } from 'gatsby';
import PureEducation from './PureEducation';

function Education() {
  const EducationQuery = graphql`
    query EducationQuery {
      site {
        siteMetadata {
          personalInformation {
            education {
              institute
              degree
              major
              duration
            }
          }
        }
      }
    }
  `;

  const {
    site: {
      siteMetadata: {
        personalInformation: { education },
      },
    },
  } = useStaticQuery(EducationQuery);

  return <PureEducation education={education} />;
}

export default Education;
