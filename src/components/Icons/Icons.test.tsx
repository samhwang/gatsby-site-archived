/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import './index';
import LangIcon from './LangIcon';
import SocialIcon from './SocialIcon';

describe('Lang Icon', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(<LangIcon name="php" />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Social Icon', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(
      <SocialIcon
        icon="fab github"
        name="Github"
        url="https://github.com/samhwang"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
