const config = require('./config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    personalInformation: config.personalInformation,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: config.manifest,
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['UA-159808770-1'],
      },
      gtagConfig: {
        anonymizeIp: true,
      },
    },
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        team: [
          {
            Developer: 'Sam Huynh',
            GitHub: 'samhwang',
          },
        ],
        thanks: ['Gatsby', 'Node', 'React', 'GitHub Pages & Actions'],
        site: {
          'Last update': '2020/03/05',
          Standards: 'JavaScript, TypeScript, React, AirBnB',
          Components: 'humans-generator',
          Softwares: 'Visual Studio Code',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Muli:400i,800i,400,800`,
          `Saira Extra Condensed:500,700`,
          `Roboto:300,400,500,700`,
        ],
      },
      display: 'swap',
    },
  ],
};
