import React from 'react';
import '../components/Icons/index';
import SocialIcon from '../components/Icons/SocialIcon';
import '../assets/sass/resume.scss';

export default {
  title: 'Social Icons',
  component: SocialIcon,
};

function IconBase({
  icon,
  name,
  url,
}: {
  icon: string;
  name: string;
  url: string;
}) {
  return (
    <div className="social-icons">
      <SocialIcon social={{ icon, name, url }} />
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
