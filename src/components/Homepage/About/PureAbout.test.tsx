/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import PureAbout from './PureAbout';

describe('Pure About Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const personalInformation = {
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
    };

    const tree = render(
      <PureAbout personalInformation={personalInformation} />
    );
    expect(tree).toMatchSnapshot();
  });
});
