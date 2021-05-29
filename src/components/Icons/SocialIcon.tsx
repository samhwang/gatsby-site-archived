import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

export interface SocialLinkProps {
  icon: string;
  name: string;
  url: string;
}

const SocialIcon: FC<SocialLinkProps> = ({ icon, name, url }) => {
  const iconProps = icon.split(' ') as [IconPrefix, IconName];

  return (
    <OutboundLink href={url} alt={`${name} link`}>
      <FontAwesomeIcon icon={iconProps} />
    </OutboundLink>
  );
};

export default SocialIcon;
