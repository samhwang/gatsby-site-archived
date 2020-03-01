import React from 'react';

function Education(props:
  {
    institute: string;
    degree: string;
    major: string;
    duration: string;
}) {
  const {
    institute, degree, major, duration
  } = props;
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{institute}</h3>
        <div className="subheading mb-3">{degree}</div>
        <div>{major}</div>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{duration}</span>
      </div>
    </div>
  );
}

export default Education;
