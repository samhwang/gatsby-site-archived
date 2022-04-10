import { usePersonalInformationData } from '../../../siteMetadata';
import type { JobDescriptionProps } from './JobDescription';
import JobDescription from './JobDescription';

export type ExperienceSection = JobDescriptionProps[];

function Experiences() {
  const { experience } = usePersonalInformationData();

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
        {experience.map(
          ({
            title,
            companyName,
            description,
            duration,
            techIcons,
            technologies,
          }) => (
            <JobDescription
              key={companyName}
              title={title}
              companyName={companyName}
              description={description}
              duration={duration}
              techIcons={techIcons}
              technologies={technologies}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Experiences;
