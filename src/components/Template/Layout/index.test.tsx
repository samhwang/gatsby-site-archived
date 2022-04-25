import { render } from '@testing-library/react';
import Layout from '.';
import useSiteMetadata from './useSiteMetadata';
import useSidebarData from '../Sidebar/useSidebarData';

jest.mock('./useSiteMetadata');
const mockMetadataHook = jest.mocked(useSiteMetadata);

jest.mock('../Sidebar/useSidebarData');
const mockSidebarHook = jest.mocked(useSidebarData);

describe('Layout rendering', () => {
  it('Should match snapshot', () => {
    const mockMetadata = {
      title: 'Sam Huynh',
      description: 'Online profile of Sam Huynh.',
    };
    mockMetadataHook.mockReturnValue(mockMetadata);

    const mockSidebarData = {
      firstName: 'Sam',
      lastName: 'Huynh',
    };
    mockSidebarHook.mockReturnValueOnce(mockSidebarData);

    const LayoutComponent = (
      <Layout title="Test Render" description="Test Render">
        <h1>This is a test!</h1>
      </Layout>
    );
    const tree = render(LayoutComponent);
    expect(tree).toMatchSnapshot();
  });
});
