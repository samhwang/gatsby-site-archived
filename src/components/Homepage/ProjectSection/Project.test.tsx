/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
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
});
