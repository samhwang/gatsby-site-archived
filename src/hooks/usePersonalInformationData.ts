import { useStaticQuery, graphql } from 'gatsby';

interface PersonalInformation {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  socialLinks: {
    icon: string;
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
    techIcons: string[];
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
              icon
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
              techIcons
              technologies
            }
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

  const data = useStaticQuery(PersonalInfoQuery);
  const { personalInformation } = data.site.siteMetadata;

  return personalInformation;
};

export default usePersonalInformationData;
