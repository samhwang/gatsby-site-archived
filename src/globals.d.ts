declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

type GraphQLResult = {
  site: {
    siteMetadata: SiteMetadata;
  };
};

type SiteTitleDesc = {
  title: string;
  description: string;
};

type SiteMetadata = SiteTitleDesc & {
  siteUrl: string;
  personalInformation: PersonalInformation;
};

type SidebarProps = {
  firstName: string;
  lastName: string;
};

type AboutSectionProps = SidebarProps & {
  address: string;
  email: string;
  socialLinks: SocialLinkProps[];
};

type SocialLinkProps = {
  icon: string;
  name: string;
  url: string;
};

type PersonalInformation = {
  firstName: string;
  lastName: string;
  address: string;
};

type ExperienceSection = JobDescriptionProps[];

type JobDescriptionProps = {
  title: string;
  companyName: string;
  description: string[];
  duration: string;
  techIcons: string[];
  technologies: string[];
};

type EducationMetadata = EducationProps[];

type EducationProps = {
  institute: string;
  degree: string;
  major: string;
  duration: string;
};

type ProjectsMetadata = ProjectProps[];

type ProjectProps = {
  title: string;
  description: string;
  url?: string;
};

type SkillsMetadata = SkillProps[];

type SkillProps = {
  title: string;
  description: string[];
};

type TechStackMetadata = string[];
