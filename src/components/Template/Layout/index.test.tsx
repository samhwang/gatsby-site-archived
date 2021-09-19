import { render } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import Layout from '.';
import { useSiteMetadata, usePersonalInformationData } from '../../../hooks';

jest.mock('../../../hooks');
const mockMetadataHook = mocked(useSiteMetadata);
const mockDataHook = mocked(usePersonalInformationData);

describe('Layout rendering', () => {
  it('Should match snapshot', () => {
    const mockMetadata = {
      title: 'Sam Huynh',
      description: 'Online profile of Sam Huynh.',
    };
    mockMetadataHook.mockReturnValueOnce(mockMetadata);

    const mockData: any = {
      firstName: 'Sam',
      lastName: 'Huynh',
    };
    mockDataHook.mockReturnValueOnce(mockData);

    const LayoutComponent = (
      <Layout title="Test Render" description="Test Render">
        <h1>This is a test!</h1>
      </Layout>
    );
    const tree = render(LayoutComponent);
    expect(tree).toMatchSnapshot();
  });
});
