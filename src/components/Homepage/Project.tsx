import React from 'react';

function Project(props: ProjectProps) {
  const { title, description, url } = props;

  let titleText = <strong>{`${title}:`}</strong>;

  titleText = url ? (
    <a href={url}>
      <strong>{titleText}</strong>
    </a>
  ) : (
    titleText
  );

  return (
    <li>
      <i className="fa-li fa fa-tasks text-warning" />
      <p>{`${titleText} ${description}`}</p>
    </li>
  );
}

export default Project;
