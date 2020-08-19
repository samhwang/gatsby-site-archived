import React from 'react';
import PureEducation from './PureEducation';
import '../../../assets/sass/resume.scss';

export default {
  title: 'Education Component',
  component: PureEducation,
};

export function EducationComponent() {
  const education = [
    {
      institute: 'Navitas Professionals',
      degree: 'Professional Year Program in Computer Science',
      major: 'incl. Cert IV in Business',
      duration: 'Oct 2016 - Oct 2017',
    },
  ];

  return <PureEducation education={education} />;
}
