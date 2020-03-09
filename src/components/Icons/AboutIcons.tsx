import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { OutboundLink } from 'gatsby-plugin-gtag';

function AboutIcons(props: { social: { icon: string; url: string } }) {
  const {
    social: { icon, url },
  } = props;
  const iconProps = icon.split(' ') as [IconPrefix, IconName];

  return (
    <OutboundLink href={url}>
      <FontAwesomeIcon icon={iconProps} />
    </OutboundLink>
  );

}

export default AboutIcons;
