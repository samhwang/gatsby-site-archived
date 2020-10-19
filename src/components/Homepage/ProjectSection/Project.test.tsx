/* eslint-disable import/no-extraneous-dependencies */
import renderer from 'react-test-renderer';
import Project from './Project';

describe('Project Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const project = {
      title: 'title',
      description: 'description',
      url: 'https://samhwang.github.io',
    };
    const tree = renderer
      .create(
        <Project
          title={project.title}
          description={project.description}
          url={project.url}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render project without URL', () => {
    const project = {
      title: 'title',
      description: 'description',
    };
    const tree = renderer
      .create(
        <Project title={project.title} description={project.description} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
