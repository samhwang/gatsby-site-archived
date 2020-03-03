import React from 'react';
import Layout from '../components/Template/Layout';
import Sidebar from '../components/Template/Sidebar';
import JobDescription from '../components/Homepage/JobDescription';
import Education from '../components/Homepage/Education';
import { experiences, education } from '../components/Homepage/information';
import config from '../../config';

function IndexPage() {
  const { firstName, lastName, address, email, socialLinks } = config;

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
              {firstName}
              <span className="text-primary">{lastName}</span>
            </h1>
            <div className="subheading mb-5">
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              {address} - <a href={`mailto:${email}`}>{email}</a>
            </div>
            <p className="lead mb-5">
              I have always been passionate about computers, and how technology
              can bring the world closer. That was the reason why I walked down
              the path of Software Development. Besides my studies, I have
              worked in a lot of Agile teams of up to 10 people, delivering high
              quality responsive web applications on different platforms (PHP,
              NodeJS) for clients in different industries (retail, sports, and
              education.)
            </p>
            <div className="social-icons">
              {socialLinks.map(social => {
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
            {experiences.map((job, key) => (
              <JobDescription {...job} key={key} />
            ))}
          </div>
        </section>
        <hr className="m-0" />

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
