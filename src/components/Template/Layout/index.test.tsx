/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import Layout from '.';

jest.mock('../../../hooks/useSiteMetadata', () =>
  jest.fn().mockReturnValue({
    title: 'Sam Huynh',
    description: 'Online profile of Sam Huynh.',
    personalInformation: {
      firstName: 'Sam',
      lastName: 'Huynh',
    },
  })
);

jest.mock('../../../hooks', () => ({
  useSiteMetadata: jest.fn().mockReturnValue({
    title: 'Sam Huynh',
    description: 'Online profile of Sam Huynh.',
  }),
  usePersonalInformationData: jest.fn().mockReturnValue({
    personalInformation: {
      firstName: 'Sam',
      lastName: 'Huynh',
    },
  }),
}));

describe('Layout rendering', () => {
  it('Should match snapshot', () => {
    const LayoutComponent = (
      <Layout title="Test Render" description="Test Render">
        <h1>This is a test!</h1>
      </Layout>
    );
    const tree = render(LayoutComponent);
    expect(tree).toMatchSnapshot();
  });
});
