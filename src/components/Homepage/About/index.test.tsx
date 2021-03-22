/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import About from '.';

jest.mock('../../../hooks', () => ({
  usePersonalInformationData: jest.fn().mockReturnValue({
    firstName: 'test',
    lastName: 'test',
    address: '123 Test Drive',
    email: 'test@test.com',
    socialLinks: [
      {
        icon: 'test-icon',
        name: 'test social icon',
        url: 'test social URL',
      },
    ],
  }),
}));

describe('Render About Data', () => {
  it('Should match snapshot', () => {
    const AboutSection = <About />;
    const tree = render(AboutSection);
    expect(tree).toMatchSnapshot();
  });
});
