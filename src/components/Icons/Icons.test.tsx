/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import './index';
import SocialIcon from './SocialIcon';

describe('Social Icon', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(
      <SocialIcon name="Github" url="https://github.com/samhwang" />
    );
    expect(tree).toMatchSnapshot();
  });
});
