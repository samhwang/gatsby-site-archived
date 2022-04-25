import { render } from '@testing-library/react';
import Experiences from '.';
import useExperienceData from './useExperienceData';
import { JobDescriptionProps } from './JobDescription';

jest.mock('./useExperienceData');
const mockHook = jest.mocked(useExperienceData);

describe('Experience Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const mockExperience: JobDescriptionProps[] = [
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
    ];
    mockHook.mockReturnValueOnce(mockExperience);
    const ExperienceSection = <Experiences />;
    const tree = render(ExperienceSection);
    expect(tree).toMatchSnapshot();
  });
});
