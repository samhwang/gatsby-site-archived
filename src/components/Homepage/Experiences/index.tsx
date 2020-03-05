import React from 'react';
import JobDescription from './JobDescription';
import { experiences } from '../information';

function Experiences() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
        {experiences.map((job, key) => (
          <JobDescription {...job} key={key} />
        ))}
      </div>
    </section>
  );
}

export default Experiences;
