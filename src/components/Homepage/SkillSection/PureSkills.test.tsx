/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import PureSkills from './PureSkills';

describe('Skill Section Component', () => {
  it('Should render without crashing', () => {
    const skills = [
      {
        title: 'asdfasdf',
        description: ['asdfasdf1234'],
      },
    ];
    const techStack = ['js'];

    const tree = renderer
      .create(<PureSkills skills={skills} techStack={techStack} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
