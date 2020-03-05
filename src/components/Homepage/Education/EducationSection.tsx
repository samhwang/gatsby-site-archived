import React from 'react';
import Education from './Education';
import { education } from '../information';

function EducationSection() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100">
        <h2 className="mb-5">Education</h2>
        {education.map((school, key) => (
          <Education {...school} key={key} />
        ))}
      </div>
    </section>
  )
}

export default EducationSection;