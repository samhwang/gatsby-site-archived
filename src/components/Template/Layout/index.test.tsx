/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import Layout from '.';
import { useSiteMetadata, usePersonalInformationData } from '../../../hooks';

jest.mock('../../../hooks');

describe('Layout rendering', () => {
  it('Should match snapshot', () => {
    const mockMetadataHook = useSiteMetadata as jest.MockedFunction<
      typeof useSiteMetadata
    >;
    mockMetadataHook.mockReturnValueOnce({
      title: 'Sam Huynh',
      description: 'Online profile of Sam Huynh.',
    });
    const mockDataHook = usePersonalInformationData as jest.MockedFunction<
      typeof usePersonalInformationData
    >;
    mockDataHook.mockReturnValueOnce({
      personalInformation: {
        firstName: 'Sam',
        lastName: 'Huynh',
      },
    });
    const LayoutComponent = (
      <Layout title="Test Render" description="Test Render">
        <h1>This is a test!</h1>
      </Layout>
    );
    const tree = render(LayoutComponent);
    expect(tree).toMatchSnapshot();
  });
});
