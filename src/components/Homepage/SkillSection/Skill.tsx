import type { SkillProps } from '../../../globals';

function Skill({ title, description }: SkillProps) {
  return (
    <>
      <div className="subheading mb-3">{title}</div>
      <ul>
        {description.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </>
  );
}

export default Skill;
