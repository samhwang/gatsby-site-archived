import { render } from '@testing-library/react';
import SkillSection from '.';
import { usePersonalInformationData } from '../../../siteMetadata';

jest.mock('../../../siteMetadata');
const mockHook = jest.mocked(usePersonalInformationData);

describe('Skill Section Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const mockSkills: any = {
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
