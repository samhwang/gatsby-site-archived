import React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';

function Project(props: ProjectProps) {
  const { title, description, url } = props;
  const titleText = url ? (
    <OutboundLink href={url}>
      <strong>{`${title}:`}</strong>
    </OutboundLink>
  ) : (
    <strong>{`${title}:`}</strong>
  );

  return (
    <li>
      <i className="fa-li fa fa-tasks text-warning" />
      <p>
        {titleText} {description}
      </p>
    </li>
  );
}

export default Project;
