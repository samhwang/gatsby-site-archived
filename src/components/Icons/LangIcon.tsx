import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

type LangIconProps = {
  name: string;
};

function LangIcon({ name }: LangIconProps) {
  const iconProps = ['fab', name] as [IconPrefix, IconName];

  return (
    <li className="list-inline-item">
      <FontAwesomeIcon icon={iconProps} />
    </li>
  );
}

export default LangIcon;
