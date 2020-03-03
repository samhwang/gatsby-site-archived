import React from 'react';
import LangIcon from './LangIcon';

function JobDescription(props: {
  title: string;
  companyName: string;
  description: [string];
  duration: string;
  techIcons: [string];
  technologies: [string];
}) {
  const { title, companyName, description, duration, techIcons, technologies } = props;
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">{companyName}</div>
        <p>
          <ul>
            {description.map((line, key) => (
              <li key={key}>{line}</li>
            ))}
          </ul>
        </p>
        <p>
          Technologies involved:
          <ul>
            {technologies.map((tech, key) => (
              <li key={key}>{tech}</li>
            ))}
          </ul>
        </p>

        <ul className="list-inline dev-icons">
          {techIcons.map((icon, key) => (
            <LangIcon name={icon} key={key} />
          ))}
        </ul>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{duration}</span>
      </div>
    </div>
  );
}

export default JobDescription;
