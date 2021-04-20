import { useStaticQuery, graphql } from 'gatsby';

interface PersonalInformation {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  socialLinks: {
    name: string;
    url: string;
  }[];
  projects: {
    title: string;
    description: string;
    url?: string;
  }[];
  education: {
    institute: string;
    degree: string;
    major: string;
    duration: string;
  }[];
  experience: {
    title: string;
    companyName: string;
    description: string[];
    duration: string;
    technologies: string[];
  }[];
  skills: {
    title: string;
    description: string[];
  }[];
  techStack: string[];
}

const usePersonalInformationData = (): PersonalInformation => {
  const PersonalInfoQuery = graphql`
    query PersonalInfoQuery {
      site {
        siteMetadata {
          personalInformation {
            firstName
            lastName
            address
            email
            socialLinks {
              name
              url
            }
            projects {
              title
              description
              url
            }
            education {
              institute
              degree
              major
              duration
            }
            experience {
              title
              companyName
              description
              duration
              technologies
            }
            skills {
              title
              description
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(PersonalInfoQuery);
  const { personalInformation } = data.site.siteMetadata;

  return personalInformation;
};

export default usePersonalInformationData;
