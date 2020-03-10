import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

function AboutIcons(props: { social: SocialIconProps }) {
  const {
    social: { icon, name, url }
  } = props;
  const iconProps = icon.split(' ') as [IconPrefix, IconName];

  return (
    <OutboundLink href={url} alt={`${name} link`}>
      <FontAwesomeIcon icon={iconProps} />
    </OutboundLink>
  );
}

export default AboutIcons;