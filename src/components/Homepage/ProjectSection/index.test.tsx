import { render } from '@testing-library/react';
import ProjectSection from '.';
import { usePersonalInformationData } from '../../../siteMetadata';

jest.mock('../../../hooks');
const mockHook = jest.mocked(usePersonalInformationData);

describe('Project section rendering', () => {
  it('Should match snapshot', () => {
    const mockProjects: any = {
      projects: [
        {
          title: 'Test Title',
          description: 'Test Description',
          url: 'test url',
        },
      ],
    };
    mockHook.mockReturnValueOnce(mockProjects);
    const ProjectsComponent = <ProjectSection />;
    const tree = render(ProjectsComponent);
    expect(tree).toMatchSnapshot();
  });
});
