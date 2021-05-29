import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

interface LangIconProps {
  name: string;
}

const LangIcon: FC<LangIconProps> = ({ name }) => {
  const iconProps = ['fab', name] as [IconPrefix, IconName];

  return (
    <li className="list-inline-item">
      <FontAwesomeIcon icon={iconProps} />
    </li>
  );
};

export default LangIcon;
