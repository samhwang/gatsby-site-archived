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
    const tree = render(<PureProject projects={projects} />);
    expect(tree).toMatchSnapshot();
  });
});
