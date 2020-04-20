import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

type SocialIconProps = {
  social: {
    icon: string;
    name: string;
    url: string;
  };
};

function AboutIcons({ social: { icon, name, url } }: SocialIconProps) {
  const iconProps = icon.split(' ') as [IconPrefix, IconName];

  return (
    <OutboundLink href={url} alt={`${name} link`}>
      <FontAwesomeIcon icon={iconProps} />
    </OutboundLink>
  );
}

export default AboutIcons;
