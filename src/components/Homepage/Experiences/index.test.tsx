import { render } from '@testing-library/react';
import Experiences from '.';
import { usePersonalInformationData } from '../../../siteMetadata';

jest.mock('../../../siteMetadata');
const mockHook = jest.mocked(usePersonalInformationData);

describe('Experience Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const mockExperience: any = {
      experience: [
        {
          title: 'Junior Full Stack Developer',
          companyName: 'Hertz Australia',
          description: [
            'Built the Github Actions and GitHub packages pipeline to publish the Flexicar website docker images, along with setting up APIs to access GitHub packages for cleaning up when necessary',
          ],
          duration: 'Oct 2019 - Present',
          techIcons: ['javascript-plain'],
          technologies: ['JavaScript (jQuery, NodeJS, ReactJS and ExpressJS)'],
        },
      ],
    };
    mockHook.mockReturnValueOnce(mockExperience);
    const ExperienceSection = <Experiences />;
    const tree = render(ExperienceSection);
    expect(tree).toMatchSnapshot();
  });
});
