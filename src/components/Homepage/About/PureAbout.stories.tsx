import React from 'react';
import PureAbout from './PureAbout';
import '../../../assets/sass/resume.scss';

export default {
  title: 'About Layout Component',
  component: PureAbout,
};

export function AboutLayout() {
  const data: AboutMetadata = {
    site: {
      siteMetadata: {
        personalInformation: {
          firstName: 'Sam',
          lastName: 'Huynh',
          address: 'Vermont South',
          email: 'samhwang2112.dev@gmail.com',
          socialLinks: [
            {
              icon: 'fab github',
              name: 'Github',
              url: 'https://samhwang.github.io',
            },
          ],
        },
      },
    },
  };

  return <PureAbout data={data} />;
}