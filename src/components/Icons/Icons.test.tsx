/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import './index';
import LangIcon from './LangIcon';
import SocialIcon from './SocialIcon';

describe('Lang Icon', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = renderer.create(<LangIcon name="php" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Social Icon', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = renderer
      .create(
        <SocialIcon
          icon="fab github"
          name="Github"
          url="https://github.com/samhwang"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
