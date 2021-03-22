import { usePersonalInformationData } from '../../../hooks';
import type { ExperienceSection } from '../../../globals';
import JobDescription from './JobDescription';

function Experiences() {
  const {
    experience,
  }: { experience: ExperienceSection } = usePersonalInformationData();

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
