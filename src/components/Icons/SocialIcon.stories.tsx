import './index';
import SocialIcon from './SocialIcon';
import '../../assets/sass/resume.scss';

export default {
  title: 'Social Icons',
  component: SocialIcon,
};

type IconMeta = {
  icon: string;
  name: string;
  url: string;
};

function IconBase({ icon, name, url }: IconMeta) {
  return (
    <div className="social-icons">
      <SocialIcon icon={icon} name={name} url={url} />
    </div>
  );
}

export const Linkedin = () =>
  IconBase({
    icon: 'fab linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/samhwang2112/',
  });

export const Github = () =>
  IconBase({
    icon: 'fab github',
    name: 'GitHub',
    url: 'https://github.com/samhwang',
  });
