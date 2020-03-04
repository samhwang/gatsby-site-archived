import React from 'react';

function LangIcon(props: { name: string }) {
  const { name } = props;

  return (
    <li className="list-inline-item">
      <i className={`fab fa-${name}`} />
    </li>
  );
}

export default LangIcon;
