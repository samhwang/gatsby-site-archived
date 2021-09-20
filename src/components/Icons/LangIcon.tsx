import type { FC } from 'react';
import useIconClass from '../../hooks/useIconClass';

interface LangIconProps {
  name: string;
}

const LangIcon: FC<LangIconProps> = ({ name }) => {
  const [currentIconClass, toggleColorIcon] = useIconClass(name);

  return (
    <li className="list-inline-item">
      <i
        className={currentIconClass}
        onMouseEnter={toggleColorIcon}
        onMouseLeave={toggleColorIcon}
      />
    </li>
  );
};

export default LangIcon;
