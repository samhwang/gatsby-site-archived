import React from 'react';

function Skill(props: { title: string; description: string[] }) {
  const { title, description } = props;
  return (
    <>
      <div className="subheading mb-3">{title}</div>
      <p>
        <ul>
          {description.map((line, key) => (
            <li key={key}>{line}</li>
          ))}
        </ul>
      </p>
    </>
  );
}

export default Skill;
