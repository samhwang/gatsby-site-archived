/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import SkillSection from '.';
import { usePersonalInformationData } from '../../../hooks';

jest.mock('../../../hooks');
const mockHook = mocked(usePersonalInformationData);

describe('Skill Section Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const mockSkills: any = {
      skills: [
        {
          title: 'asdfasdf',
          description: ['asdfasdf1234'],
        },
      ],
      techStack: ['js'],
    };
    mockHook.mockReturnValueOnce(mockSkills);
    const SkillSectionComponent = <SkillSection />;
    const tree = render(SkillSectionComponent);
    expect(tree).toMatchSnapshot();
  });
});
