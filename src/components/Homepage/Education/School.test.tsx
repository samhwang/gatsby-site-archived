/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import School from './School';

describe('School Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const input = {
      institute: 'RMIT University',
      degree: 'Bachelor of IT',
      major: '',
      duration: 'Oct 2016 - Oct 2017',
    };
    const tree = renderer
      .create(
        <School
          institute={input.institute}
          degree={input.degree}
          major={input.major}
          duration={input.duration}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
