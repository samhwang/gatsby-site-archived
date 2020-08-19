/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import Skill from './Skill';

describe('Skill Component', () => {
  it('Should render without crashing', () => {
    const skill = {
      title: 'asdfasdf',
      description: ['asdfasdf1234'],
    };
    const tree = renderer
      .create(<Skill title={skill.title} description={skill.description} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
