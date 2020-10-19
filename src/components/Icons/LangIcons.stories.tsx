import './index';
import LangIcon from './LangIcon';
import '../../assets/sass/resume.scss';

export default {
  title: 'Language Icons',
  component: LangIcon,
};

function IconBase(iconName: string) {
  return (
    <ul className="list-inline dev-icons">
      <LangIcon name={iconName} />
    </ul>
  );
}

export const PHPIcon = () => IconBase('php');

export const JSIcon = () => IconBase('js');
