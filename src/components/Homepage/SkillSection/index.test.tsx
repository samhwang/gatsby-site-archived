import { render } from '@testing-library/react';
import SkillSection from '.';
import useSkillData, { SkillData } from './useSkillData';

jest.mock('./useSkillData');
const mockHook = jest.mocked(useSkillData);

describe('Skill Section Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const mockSkills: SkillData = {
      skills: [
        {
          title: 'asdfasdf',
          description: ['asdfasdf1234'],
        },
      ],
      techStack: ['javascript-plain'],
    };
    mockHook.mockReturnValueOnce(mockSkills);
    const SkillSectionComponent = <SkillSection />;
    const tree = render(SkillSectionComponent);
    expect(tree).toMatchSnapshot();
  });
});
