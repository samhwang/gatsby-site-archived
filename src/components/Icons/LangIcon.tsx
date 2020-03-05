import React from 'react';

function LangIcon(props: LangIconProps) {
  const { name } = props;

  return (
    <li className="list-inline-item">
      <i className={`fab fa-${name}`} />
    </li>
  );
}

export default LangIcon;
