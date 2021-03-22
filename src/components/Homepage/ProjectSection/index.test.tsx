/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import ProjectSection from '.';

jest.mock('../../../hooks', () => ({
  usePersonalInformationData: jest.fn().mockReturnValue({
    projects: [
      {
        title: 'Test Title',
        description: 'Test Description',
        url: 'test url',
      },
    ],
  }),
}));

describe('Project section rendering', () => {
  it('Should match snapshot', () => {
    const ProjectsComponent = <ProjectSection />;
    const tree = render(ProjectsComponent);
    expect(tree).toMatchSnapshot();
  });
});
