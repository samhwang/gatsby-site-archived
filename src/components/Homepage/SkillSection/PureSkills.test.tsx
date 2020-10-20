/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import PureSkills from './PureSkills';

describe('Skill Section Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const skills = [
      {
        title: 'asdfasdf',
        description: ['asdfasdf1234'],
      },
    ];
    const techStack = ['js'];

    const tree = render(<PureSkills skills={skills} techStack={techStack} />);
    expect(tree).toMatchSnapshot();
  });
});
