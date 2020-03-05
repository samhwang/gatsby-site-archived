import React from 'react';

function Project(props: ProjectProps) {
  const { title, description, url } = props;
  const titleText = url ? (
    <a href={url}>
      <strong>{`${title}:`}</strong>
    </a>
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
