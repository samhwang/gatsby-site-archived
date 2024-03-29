import { render } from '@testing-library/react';
import SEO, { SEOProps } from '.';

describe('SEO Rendering', () => {
  it('Should match snapshot', () => {
    const data: SEOProps = {
      title: 'Test Render',
      description: 'Test Render',
      defaultFallback: {
        title: 'Default Title',
        description: 'Default Description',
      },
    };
    const SEOComponent = (
      <SEO
        title={data.title}
        description={data.description}
        defaultFallback={data.defaultFallback}
      />
    );
    const tree = render(SEOComponent);
    expect(tree).toMatchSnapshot();
  });
});
