/* eslint-disable import/no-extraneous-dependencies */
import renderer from 'react-test-renderer';
import PureEducation from './PureEducation';

describe('Education Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const education = [
      {
        institute: 'Navitas Professionals',
        degree: 'Professional Year Program in Computer Science',
        major: 'incl. Cert IV in Business',
        duration: 'Oct 2016 - Oct 2017',
      },
    ];
    const tree = renderer
      .create(<PureEducation education={education} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
