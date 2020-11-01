declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

export type SiteTitleDesc = {
  title: string;
  description: string;
};
export interface PersonalInformation {
  firstName: string;
  lastName: string;
  address: string;
}
export interface SiteMetadata extends SiteTitleDesc {
  siteUrl: string;
  personalInformation: PersonalInformation;
}

export interface GraphQLResult {
  site: {
    siteMetadata: SiteMetadata;
  };
}

export interface SidebarProps {
  firstName: string;
  lastName: string;
}

type SocialLinkProps = {
  icon: string;
  name: string;
  url: string;
};

export interface AboutSectionProps extends SidebarProps {
  address: string;
  email: string;
  socialLinks: SocialLinkProps[];
}

export interface JobDescriptionProps {
  title: string;
  companyName: string;
  description: string[];
  duration: string;
  techIcons: string[];
  technologies: string[];
}

export type ExperienceSection = JobDescriptionProps[];

export interface EducationProps {
  institute: string;
  degree: string;
  major: string;
  duration: string;
}

export type EducationMetadata = EducationProps[];

export interface ProjectProps {
  title: string;
  description: string;
  url?: string;
}

export type ProjectsMetadata = ProjectProps[];

export interface SkillProps {
  title: string;
  description: string[];
}

export type SkillsMetadata = SkillProps[];

export type TechStackMetadata = string[];
