import useAboutData from './useAboutData';
import SocialIcon, { SocialLinkProps } from '../../Icons/SocialIcon';

function About() {
  const { firstName, lastName, address, socialLinks } = useAboutData();
  const socialLinksData: SocialLinkProps[] = socialLinks;

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          {firstName}
          <span className="text-primary">{lastName}</span>
        </h1>
        <div className="subheading mb-5">{address}</div>
        <p className="lead mb-5">
          I have always been passionate about computers, and how technology can
          bring the world closer. That was the reason why I walked down the path
          of Software Development. Besides my studies, I have worked in a lot of
          Agile teams of up to 10 people, delivering high quality responsive web
          applications on different platforms (PHP, NodeJS) for clients in
          different industries (retail, sports, and education.)
        </p>
        <div className="social-icons">
          {socialLinksData.map(({ icon, name, url }) => (
            <SocialIcon key={name} icon={icon} name={name} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
