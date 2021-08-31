/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import Education from '.';
import { usePersonalInformationData } from '../../../hooks';

jest.mock('../../../hooks');
const mockHook = mocked(usePersonalInformationData);

describe('Education section render', () => {
  it('Should match snapshot', () => {
    const mockEducation: any = {
      education: [
        {
          institute: 'Test',
          degree: 'Test',
          major: 'Test',
          duration: '2020 - 2021',
        },
      ],
    };
    mockHook.mockReturnValueOnce(mockEducation);
    const EducationSection = <Education />;
    const tree = render(EducationSection);
    expect(tree).toMatchSnapshot();
  });
});
