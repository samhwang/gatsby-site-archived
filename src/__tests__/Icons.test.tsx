/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import '../components/Icons/index';
import LangIcon from '../components/Icons/LangIcon';
import SocialIcon from '../components/Icons/SocialIcon';

describe('Lang Icon', () => {
  it('should render without crashing', () => {
    const tree = renderer.create(<LangIcon name="php" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Social Icon', () => {
  it('should render without crashing', () => {
    const tree = renderer
      .create(
        <SocialIcon
          social={{
            icon: 'fab github',
            name: 'Github',
            url: 'https://github.com/samhwang',
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
