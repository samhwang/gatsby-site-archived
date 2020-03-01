import React from 'react';

function JobDescription(props: {
  title: string;
  companyName: string;
  description: string;
  duration: string;
}) {
  const {
    title, companyName, description, duration,
  } = props;
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">{companyName}</div>
        <p>{description}</p>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{duration}</span>
      </div>
    </div>
  );
}

export default JobDescription;
