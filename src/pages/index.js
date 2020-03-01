import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import JobDescription from '../components/Homepage/JobDescription';
import Education from '../components/Homepage/Education';
import config from '../../config';

function IndexPage() {
  return (
    <Layout>
      <Sidebar />
      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div className="w-100">
            <h1 className="mb-0">
              {config.firstName}
              <span className="text-primary">{config.lastName}</span>
            </h1>
            <div className="subheading mb-5">
              {config.address}
              -
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </div>
            <p className="lead mb-5">
              I have always been passionate about computers, and how technology can bring
              the world closer. That was the reason why I walked down the path of Software
              Development. Besides my studies, I have worked in a lot of Agile teams of up to
              10 people, delivering high quality responsive web applications on different
              platforms (PHP, NodeJS) for clients in different industries (retail, sports,
              and education.)
            </p>
            <div className="social-icons">
              {config.socialLinks.map((social) => {
                const { icon, url } = social;
                return (
                  <a key={url} href={url}>
                    <i className={`fab ${icon}`} />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="experience"
        >
          <div className="w-100">
            <h2 className="mb-5">Experience</h2>

            <JobDescription
              title="Junior Full Stack Developer"
              companyName="Hertz Australia"
              duration="Oct 2019 - Present"
              description=""
            />

            <JobDescription
              title="Web Application Developer"
              companyName="Bonntech Business Solutions"
              duration="May 2019 - Oct 2019"
              description="Built the base framework for future development with Bonntech, along with its own create and update script to speed up the initial setup for future projects."
            />

            <JobDescription
              title="Software Developer"
              companyName="Classcom"
              duration="Jan 2019 - Apr 2019"
              description="Collaborated on building new core features of the ClassCom project, in addition to bug fixing, writing automated test and build scripts and participated in code reviews before an update is released in a bi-weekly schedule."
            />

            <JobDescription
              title="PHP Developer Intern"
              companyName="Psych Press"
              duration="Jun 2017 - Sep 2017"
              description="Collaborated on building three inhouse projects for Psych Press closely with the psychology team on a weekly basis."
            />

            <JobDescription
              title="Web Developer"
              companyName="Mint n Co. Accessories"
              duration="Oct 2015 - Feb 2016"
              description="Designed and built the e-commerce site for Mint and Co. Accessories from the ground up and provided regular maintenance to ensure 99.9% site availability."
            />

            <JobDescription
              title="PHP Developer"
              companyName="Right Left Communication"
              duration="Sep 2014 - Feb 2015"
              description="Developed, supported, monitored and maintained 4 websites for different clients from various industries."
            />
          </div>
        </section>
        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div className="w-100">
            <h2 className="mb-5">Education</h2>

            <Education
              institute="Navitas Professionals"
              degree="Professional Year Program in Computer Science"
              major="incl. Cert IV in Business"
              duration="Oct 2016 - Oct 2017"
            />

            <Education
              institute="RMIT University"
              degree="Bachelor of Information Technology"
              major=""
              duration="Oct 2012 - Dec 2015"
            />

          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
          <div className="w-100">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-angular" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-less" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-wordpress" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-gulp" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-grunt" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm" />
              </li>
            </ul>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="awards"
        >
          <div className="w-100">
            <h2 className="mb-5">Awards &amp; Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-trophy text-warning" />
                Lorem Ipsum
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default IndexPage;
