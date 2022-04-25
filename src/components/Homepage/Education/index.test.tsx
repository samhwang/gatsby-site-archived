import { render } from '@testing-library/react';
import Education from '.';
import useEducationData from './useEducationData';
import { SchoolProps } from './School';

jest.mock('./useEducationData');
const mockHook = jest.mocked(useEducationData);

describe('Education section render', () => {
  it('Should match snapshot', () => {
    const mockEducation: SchoolProps[] = [
      {
        institute: 'Test',
        degree: 'Test',
        major: 'Test',
        duration: '2020 - 2021',
      },
    ];
    mockHook.mockReturnValueOnce(mockEducation);
    const EducationSection = <Education />;
    const tree = render(EducationSection);
    expect(tree).toMatchSnapshot();
  });
});
