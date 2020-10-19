import School from './School';
import '../../../assets/sass/resume.scss';

export default {
  title: 'School Component',
  component: School,
};

export function SchoolComponent() {
  const input = {
    institute: 'RMIT University',
    degree: 'Bachelor of IT',
    major: '',
    duration: 'Oct 2016 - Oct 2017',
  };
  return (
    <School
      institute={input.institute}
      degree={input.degree}
      major={input.major}
      duration={input.duration}
    />
  );
}
