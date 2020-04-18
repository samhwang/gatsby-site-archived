const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    personalInformation: {
      firstName: config.firstName,
      lastName: config.lastName,
      address: config.address,
      email: config.email,
      socialLinks: config.socialLinks,
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon,
      },
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Muli`,
            variants: [`400i`, `800i`, `400`, `800`],
          },
          {
            family: `Saira Extra Condensed`,
            variants: [`500`, `700`],
          },
        ],
      },
    },
  ],
};
