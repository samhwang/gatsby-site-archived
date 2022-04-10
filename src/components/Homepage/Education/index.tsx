import { usePersonalInformationData } from '../../../siteMetadata';
import School from './School';
import type { EducationProps } from './School';

export type EducationMetadata = EducationProps[];

function Education() {
  const { education } = usePersonalInformationData();

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100">
        <h2 className="mb-5">Education</h2>
        {education.map(({ institute, degree, major, duration }) => (
          <School
            institute={institute}
            degree={degree}
            major={major}
            duration={duration}
            key={institute}
          />
        ))}
      </div>
    </section>
  );
}

export default Education;
