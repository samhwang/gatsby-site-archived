/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import PureAbout from './PureAbout';

describe('Pure About Component', () => {
  it('should render without crashing', () => {
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

    const tree = renderer.create(<PureAbout data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
