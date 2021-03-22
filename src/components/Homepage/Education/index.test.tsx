/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import Education from '.';

jest.mock('../../../hooks', () => ({
  usePersonalInformationData: jest.fn().mockReturnValue({
    education: [
      {
        institute: 'Test',
        degree: 'Test',
        major: 'Test',
        duration: '2020 - 2021',
      },
    ],
  }),
}));

describe('Education section render', () => {
  it('Should match snapshot', () => {
    const EducationSection = <Education />;
    const tree = render(EducationSection);
    expect(tree).toMatchSnapshot();
  });
});
