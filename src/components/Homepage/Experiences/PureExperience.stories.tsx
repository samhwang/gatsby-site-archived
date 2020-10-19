import PureExperience from './PureExperience';
import '../../../assets/sass/resume.scss';

export default {
  title: 'Experience Component',
  component: PureExperience,
};

export function ExperienceComponent() {
  const experience = [
    {
      title: 'Junior Full Stack Developer',
      companyName: 'Hertz Australia',
      description: [
        'Built the Github Actions and GitHub packages pipeline to publish the Flexicar website docker images, along with setting up APIs to access GitHub packages for cleaning up when necessary',
        "Built new core features into Hertz's internal rental analytics and tracking systems, using ExpressJS, EJS and NodeJS",
        "Built the new frontend for Hertz's shuttle bus tracking system, now currently used by the Ace brand, using ReactJS and deployed in an S3 bucket endpoint, communicating via serverless websockets",
      ],
      duration: 'Oct 2019 - Present',
      techIcons: [
        'js',
        'react',
        'node',
        'npm',
        'yarn',
        'php',
        'wordpress',
        'html5',
        'css3',
        'sass',
        'aws',
        'docker',
        'github',
        'jira',
        'confluence',
      ],
      technologies: [
        'PHP 7.4 and Wordpress',
        'HTML5, CSS3 and CSS pre-processors like SASS and LESS',
        'GraphQL and REST API',
        'JavaScript (jQuery, NodeJS, ReactJS and ExpressJS)',
        'Docker containers & docker-compose',
        'Database: MySQL & MongoDB',
        'Serverless architecture and websockets',
        'AWS Lambda and Elastic Beanstalk',
        'CI/CD: GitHub Actions pipeline and GitHub Packages',
        'Project management using JIRA and Confluence',
      ],
    },
  ];

  return <PureExperience experiences={experience} />;
}
