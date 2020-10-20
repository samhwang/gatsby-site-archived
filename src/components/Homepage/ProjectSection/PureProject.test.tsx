/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import PureProject from './PureProject';

describe('Project Section Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const projects = [
      {
        title: 'title',
        description: 'description',
        url: 'https://samhwang.github.io',
      },
    ];
    const tree = renderer.create(<PureProject projects={projects} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
