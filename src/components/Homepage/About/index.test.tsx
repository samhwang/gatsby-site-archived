import { render } from '@testing-library/react';
import About from '.';
import useAboutData, { AboutData } from './useAboutData';

jest.mock('./useAboutData');
const mockHook = jest.mocked(useAboutData);

describe('Render About Data', () => {
  it('Should match snapshot', () => {
    const mockAbout: AboutData = {
      firstName: 'test',
      lastName: 'test',
      address: '123 Test Drive',
      socialLinks: [
        {
          icon: 'test-icon',
          name: 'test social icon',
          url: 'test social URL',
        },
      ],
    };
    mockHook.mockReturnValueOnce(mockAbout);
    const AboutSection = <About />;
    const tree = render(AboutSection);
    expect(tree).toMatchSnapshot();
  });
});
