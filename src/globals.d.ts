declare module '*.jpg' {
  const content: string;
  export default content;
}

interface EducationProps {
  institute: string;
  degree: string;
  major: string;
  duration: string;
}

interface JobDescriptionProps {
  title: string;
  companyName: string;
  description: string[];
  duration: string;
  techIcons: string[];
  technologies: string[];
  key?: number;
}

interface LangIconProps {
  name: string;
}

interface ProjectProps {
  title: string;
  description: string;
  url?: string;
}

interface SkillProps {
  title: string;
  description: string[];
}
