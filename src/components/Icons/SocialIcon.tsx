import type { FC } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

export interface SocialLinkProps {
  icon: string;
  name: string;
  url: string;
}

const SocialIcon: FC<SocialLinkProps> = ({ icon, name, url }) => (
  <OutboundLink href={url} alt={`${name} link`}>
    <i className={`devicon-${icon}`} />
  </OutboundLink>
);

export default SocialIcon;
