/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import SkillSection from '.';

jest.mock('../../../hooks', () => ({
  usePersonalInformationData: jest.fn().mockReturnValue({
    skills: [
      {
        title: 'asdfasdf',
        description: ['asdfasdf1234'],
      },
    ],
    techStack: ['js'],
  }),
}));

describe('Skill Section Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const SkillSectionComponent = <SkillSection />;
    const tree = render(SkillSectionComponent);
    expect(tree).toMatchSnapshot();
  });
});
