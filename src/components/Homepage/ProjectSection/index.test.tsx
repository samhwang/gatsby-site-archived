import { render } from '@testing-library/react';
import ProjectSection from '.';
import useProjectData from './useProjectData';
import { ProjectProps } from './Project';

jest.mock('./useProjectData');
const mockHook = jest.mocked(useProjectData);

describe('Project section rendering', () => {
  it('Should match snapshot', () => {
    const mockProjects: ProjectProps[] = [
      {
        title: 'Test Title',
        description: 'Test Description',
        url: 'test url',
      },
    ];
    mockHook.mockReturnValueOnce(mockProjects);
    const ProjectsComponent = <ProjectSection />;
    const tree = render(ProjectsComponent);
    expect(tree).toMatchSnapshot();
  });
});
