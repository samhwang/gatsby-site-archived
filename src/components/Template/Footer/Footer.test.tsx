/* eslint-disable import/no-extraneous-dependencies */
import renderer from 'react-test-renderer';
import Footer from '.';

describe('Footer', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
