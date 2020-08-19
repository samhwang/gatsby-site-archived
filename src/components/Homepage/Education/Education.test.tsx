/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import Education from '.';

describe('Education Component', () => {
  it('Should render without crashing', () => {
    const tree = renderer.create(<Education />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
