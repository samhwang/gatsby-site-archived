import { render } from '@testing-library/react';
import About from '.';
import { usePersonalInformationData } from '../../../hooks';

jest.mock('../../../hooks');
const mockHook = jest.mocked(usePersonalInformationData);

describe('Render About Data', () => {
  it('Should match snapshot', () => {
    const mockAbout: any = {
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
    };
    mockHook.mockReturnValueOnce(mockAbout);
    const AboutSection = <About />;
    const tree = render(AboutSection);
    expect(tree).toMatchSnapshot();
  });
});
