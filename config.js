const ICONS = {
  PHP: 'php-plain',
  CODEIGNITER: 'codeigniter-plain',
  LARAVEL: 'laravel-plain',
  COMPOSER: 'composer-plain',
  DRUPAL: 'drupal-plain',
  WORDPRESS: 'wordpress-plain',
  WOOCOMMERCE: 'woocommerce-plain',
  JS: 'javascript-plain',
  TS: 'typescript-plain',
  JQUERY: 'jquery-plain',
  D3JS: 'd3js-plain',
  REACT: 'react-original',
  REDUX: 'redux-original',
  GATSBY: 'gatsby-plain',
  ANGULAR: 'angularjs-plain',
  MATERIALUI: 'materialui-plain',
  STORYBOOK: 'storybook-plain',
  NODE: 'nodejs-plain',
  EXPRESS: 'express-original',
  METEOR: 'meteor-plain',
  GRAPHQL: 'graphql-plain',
  SOCKETIO: 'socketio-original',
  JEST: 'jest-plain',
  MOCHA: 'mocha-plain',
  CUCUMBER: 'cucumber-plain',
  BABEL: 'babel-plain',
  WEBPACK: 'webpack-plain',
  NPM: 'npm-original-wordmark',
  YARN: 'yarn-plain',
  GO: 'go-original-wordmark',
  HTML5: 'html5-plain',
  CSS3: 'css3-plain',
  SASS: 'sass-orignal',
  LESS: 'less-plain-wordmark',
  BOOTSTRAP: 'bootstrap-plain',
  MONGODB: 'mongodb-plain',
  MYSQL: 'mysql-plain',
  POSTGRES: 'postgresql-plain',
  AWS: 'amazonwebservices-original',
  AZURE: 'azure-plain',
  DIGITALOCEAN: 'digitalocean-plain',
  DOCKER: 'docker-plain',
  GIT: 'git-plain',
  GITHUB: 'github-original',
  GITLAB: 'gitlab-plain',
  LINKEDIN: 'linkedin-plain',
  JIRA: 'jira-plain',
  BITBUCKET: 'bitbucket-plain',
  CONFLUENCE: 'confluence-original',
  TRELLO: 'trello-plain',
};

module.exports = {
  siteTitle: 'Sam Huynh',
  siteUrl: 'https://samhwang.github.io',
  siteDescription: 'Online profile of Sam Huynh.',
  manifest: {
    name: 'Sam Huynh Website',
    short_name: 'Sam Huynh',
    start_url: '/',
    background_color: '#FFFFFF',
    theme_color: '#FFFFFF',
    display: 'standalone',
    icon: 'src/assets/img/website-icon.png',
  },
  personalInformation: {
    firstName: 'Sam',
    lastName: 'Huynh',
    socialLinks: [
      {
        icon: ICONS.GITHUB,
        name: 'Github',
        url: 'https://github.com/samhwang',
      },
      {
        icon: ICONS.LINKEDIN,
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/samhwang2112/',
      },
    ],
    email: 'samhwang2112.dev@gmail.com',
    address: 'Melbourne, Victoria, Australia',
    experience: [
      {
        title: 'Full Stack Software Developer',
        companyName: 'HungryHungry',
        duration: 'Jun 2021 - Present',
        description: [],
        techIcons: [
          ICONS.JS,
          ICONS.REACT,
          ICONS.ANGULAR,
          ICONS.NODE,
          ICONS.NPM,
          ICONS.YARN,
          ICONS.PHP,
          ICONS.DRUPAL,
          ICONS.HTML5,
          ICONS.CSS3,
          ICONS.SASS,
          ICONS.AWS,
          ICONS.DOCKER,
          ICONS.BITBUCKET,
          ICONS.JIRA,
          ICONS.CONFLUENCE,
        ],
        technologies: [
          'Frontend: React, Angular, Bootstrap, Jest',
          'HTML5, CSS3 and CSS (SASS)',
          'Backend: PHP7 (Drupal), NodeJS',
          'REST API',
          'Database: MariaDB',
          'Serverless Functions using Serverless Framework and AWS CDK',
          'AWS (EC2, Lambda, Cloudwatch)',
          'CI/CD: BuildKite Pipelines',
          'Project management using JIRA and Confluence',
          'Error and Metrics reporting with Datadog',
        ],
      },
      {
        title: 'Full Stack Software Developer',
        companyName: 'Hertz Australia',
        duration: 'Oct 2019 - Jun 2021',
        description: [
          'Built the Github Actions and GitHub packages pipeline to publish the Flexicar website docker images, along with setting up APIs to access GitHub packages for cleaning up when necessary',
          "Built new feature into Hertz's booking API, including but not limited to integrations with insurance partners and franchisee, error monitoring, reporting rental analytics and tracking systems, using GraphQL (Apollo), MongoDB, NodeJS (Express), EJS, ReactJS, Sentry and web sockets on AWS Serverless platform, with a dashboard on Elastic Beanstalk.",
          "Rebuilt Hertz's customer portal for past journey information tand the shuttle bus tracking and booking portal, using React/Redux and Material UI",
        ],
        techIcons: [
          ICONS.JS,
          ICONS.JQUERY,
          ICONS.REACT,
          ICONS.REDUX,
          ICONS.MATERIALUI,
          ICONS.STORYBOOK,
          ICONS.NODE,
          ICONS.EXPRESS,
          ICONS.SOCKETIO,
          ICONS.GRAPHQL,
          ICONS.JEST,
          ICONS.MOCHA,
          ICONS.NPM,
          ICONS.YARN,
          ICONS.PHP,
          ICONS.WORDPRESS,
          ICONS.HTML5,
          ICONS.CSS3,
          ICONS.SASS,
          ICONS.LESS,
          ICONS.MYSQL,
          ICONS.MONGODB,
          ICONS.AWS,
          ICONS.DOCKER,
          ICONS.GITHUB,
          ICONS.JIRA,
          ICONS.CONFLUENCE,
        ],
        technologies: [
          'Front-end: React, EJS, jQuery, Bootstrap, Material UI, Jest, Storybook, sockets.io',
          'Back-end: PHP7 (Wordpress), NodeJS (Express)',
          'HTML5, CSS3 and CSS pre-processors like SASS and LESS',
          'GraphQL (Apollo) and REST API',
          'Docker containers & docker-compose',
          'Database: MySQL & MongoDB',
          'Serverless architecture and websockets',
          'AWS (Lambda, Elastic Beanstalk, SQS, SES, SNS, CloudWatch, S3)',
          'CI/CD: GitHub Actions pipeline and GitHub Container Registry',
          'Project management using JIRA and Confluence',
          'Error reporting and monitoring: Sentry, Dashbird',
        ],
      },
      {
        title: 'Web Application Developer',
        companyName: 'Bonntech Business Solutions',
        duration: 'May 2019 - Oct 2019',
        description: [
          'Built the base framework, along with its own create and update script to speed up the initial setup for future projects.',
          "Assisted in setting up Bonntech's central Git repository and private Composer Packagist for internal projects and libraries.",
        ],
        techIcons: [
          ICONS.PHP,
          ICONS.COMPOSER,
          ICONS.JS,
          ICONS.BOOTSTRAP,
          ICONS.CSS3,
          ICONS.LESS,
          ICONS.SASS,
          ICONS.MYSQL,
          ICONS.DOCKER,
          ICONS.GITLAB,
        ],
        technologies: [
          'PHP 7.3, using CodeIgniter framework and Composer package manager with self-hosted Packagist',
          'MySQL database management and data modelling',
          'HTML5, CSS, JavaScript (jQuery, Bootstrap, Datatables, and AJAX)',
          'Apache server configurations',
          'Built containerized development environments with Docker',
        ],
      },
      {
        title: 'Software Developer',
        companyName: 'Classcom',
        duration: 'Jan 2019 - Apr 2019',
        description: [
          'Collaborated on building new core features of the ClassCom project',
          'Created automated test and build scripts and participated in code reviews in a bi-weekly release schedule.',
        ],
        techIcons: [
          ICONS.JS,
          ICONS.NODE,
          ICONS.METEOR,
          ICONS.MOCHA,
          ICONS.CUCUMBER,
          ICONS.HTML5,
          ICONS.CSS3,
          ICONS.LESS,
          ICONS.MONGODB,
          ICONS.NPM,
          ICONS.AZURE,
        ],
        technologies: [
          'JavaScript, using the Meteor full stack framework (with Node/Express for backend processing, Blaze for templating, CSS pre-processing with LESS)',
          'Automated test scripting with CucumberJS and Mocha.',
          'MongoDB database and data modelling.',
          'REST APIs',
          'Project management using Azure DevOps',
        ],
      },
      {
        title: 'PHP Developer Intern',
        companyName: 'Psych Press',
        duration: 'Jun 2017 - Sep 2017',
        description: [
          'Collaborated on building three inhouse projects for Psych Press closely with the psychology team on a weekly basis.',
        ],
        techIcons: [
          ICONS.PHP,
          ICONS.LARAVEL,
          ICONS.JS,
          ICONS.JQUERY,
          ICONS.D3JS,
          ICONS.BOOTSTRAP,
          ICONS.HTML5,
          ICONS.CSS3,
          ICONS.AWS,
          ICONS.BITBUCKET,
        ],
        technologies: [
          'PHP 7, using CodeIgniter, Laravel and Moodle framework.',
          'JavaScript (AJAX, jQuery, Bootstrap, D3js and ChartJS) and CSS (MaterializeCSS)',
          'Microsoft SQL Server Database',
          'Migration from Microsoft servers to Amazon Web Services EC2 Linux instances',
        ],
      },
      {
        title: 'Web Developer',
        companyName: 'Mint n Co. Accessories',
        duration: 'Oct 2015 - Feb 2016',
        description: [
          'Designed and built the e-commerce site for Mint and Co. Accessories from the ground up.',
          'Provided regular maintenance to ensure 99.9% site availability.',
        ],
        techIcons: [
          ICONS.PHP,
          ICONS.WORDPRESS,
          ICONS.WOOCOMMERCE,
          ICONS.BOOTSTRAP,
          ICONS.HTML5,
          ICONS.CSS3,
          ICONS.JS,
          ICONS.MYSQL,
        ],
        technologies: [
          'CPanel hosting control panel for Apache server',
          'PHP using the Wordpress framework and WooCommerce e-commerce plugin',
          'MySQL database',
          'JavaScript (jQuery, Bootstrap)',
          'Paypal Gateway API',
        ],
      },
      {
        title: 'PHP Developer',
        companyName: 'Right Left Communication',
        duration: 'Sep 2014 - Feb 2015',
        description: [
          'Developed, supported, monitored and maintained 4 websites for different clients from various industries.',
        ],
        techIcons: [
          ICONS.PHP,
          ICONS.BOOTSTRAP,
          ICONS.HTML5,
          ICONS.CSS3,
          ICONS.JS,
          ICONS.JQUERY,
          ICONS.MYSQL,
        ],
        technologies: [
          'CPanel hosting control panel for Apache server',
          'PHP using the Joomla framework',
          'JavaScript (jQuery, Bootstrap)',
          'MySQL database',
        ],
      },
    ],
    education: [
      {
        institute: 'Navitas Professionals',
        degree: 'Professional Year Program in Computer Science',
        major: 'incl. Cert IV in Business',
        duration: 'Oct 2016 - Oct 2017',
      },
      {
        institute: 'RMIT University',
        degree: 'Bachelor of Information Technology',
        major: '',
        duration: 'Oct 2012 - Dec 2015',
      },
    ],
    projects: [
      {
        title: 'My GitHub code repository',
        description:
          'The host of my many curious projects, from setting up a custom firmware to my keyboard and my own shell configs, to testing and learning new programming languages and techniques.',
        url: 'https://github.com/samhwang',
      },
      {
        title: 'My GitHub.io page',
        description:
          'This site was hosted on GitHub Pages, built with the Gatsby framework for ReactJS.',
        url: 'https://samhwang.github.io',
      },
      {
        title: 'Pi-Hole',
        description:
          'A self-hosted DNS server that will act as an ad black-hole and can be easily installed on any Raspberry Pi (hence the name, Pi-Hole), or any computer running Linux. To maintain stable and seamless connection between dropouts, I have also set up 2 of them, and sync the ad blocking lists together using a sync script.',
        url: 'https://pi-hole.net/',
      },
    ],
    skills: [
      {
        title: 'Professional Proficiency',
        description: [
          'Backend: PHP 7, NodeJS/TypeScript (Meteor, Express)',
          'Frontend: jQuery, React (Redux, Gatsby, Storybook), HTML5, CSS, LESS and SASS',
          'Databases and data modelling with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB)',
          'Server configuration with Apache and NGINX',
          'Container orchestration with Docker',
          'Serverless Applications using the Serverless Framework',
          'Package management and build tools: Composer, NPM, Yarn, Babel, Webpack',
          'Version control with Git, and online collaboration with GitHub, BitBucket and AWS CodeCommit',
          'Continuous Integration and Continuous Delivery with CircleCI, BuildKite, GitHub Actions & GitHub Container Registry',
          'Amazon Web Services products: EC2, Lambda, Elastic Beanstalk, SQS, SES, SNS, CloudWatch, S3, CloudFront, RDS',
          'Building Infrastructure as Code using AWS Cloud Development Kit (CDK)',
          'Services tracing & error monitoring tools: Sentry, Datadog',
          'Project Management tools: JIRA, Confluence, Trello, Asana',
          'Microsoft Office Suite and similar Google tools',
          'Adobe Creative Suite: Photoshop, Lightroom, Bridge',
        ],
      },
      {
        title: 'Learning',
        description: ['Golang', 'DynamoDB', 'Terraform'],
      },
    ],
    techStack: [
      ICONS.PHP,
      ICONS.COMPOSER,
      ICONS.JS,
      ICONS.TS,
      ICONS.NODE,
      ICONS.REACT,
      ICONS.REDUX,
      ICONS.GATSBY,
      ICONS.STORYBOOK,
      ICONS.JEST,
      ICONS.MOCHA,
      ICONS.JQUERY,
      ICONS.BABEL,
      ICONS.WEBPACK,
      ICONS.NPM,
      ICONS.YARN,
      ICONS.HTML5,
      ICONS.CSS3,
      ICONS.LESS,
      ICONS.SASS,
      ICONS.MONGODB,
      ICONS.MYSQL,
      ICONS.POSTGRES,
      ICONS.DOCKER,
      ICONS.AWS,
      ICONS.DIGITALOCEAN,
      ICONS.GIT,
      ICONS.GITHUB,
      ICONS.GITLAB,
      ICONS.BITBUCKET,
      ICONS.TRELLO,
      ICONS.JIRA,
      ICONS.CONFLUENCE,
    ],
  },
};
