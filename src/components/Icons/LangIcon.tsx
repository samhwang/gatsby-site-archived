import type { FC } from 'react';
import { useMemo, useCallback, useState } from 'react';

interface LangIconProps {
  name: string;
}

const useIconClass = (name: string) => {
  const DEFAULT_ICON_CLASS = useMemo<string>(() => `devicon-${name}`, []);
  const [currentIconClass, setIconClass] = useState<string>(DEFAULT_ICON_CLASS);
  const toggleColorIcon = useCallback((isHover: boolean = false) => {
    switch (isHover) {
      case true:
        return setIconClass(`${DEFAULT_ICON_CLASS} colored`);

      case false:
      default:
        return setIconClass(DEFAULT_ICON_CLASS);
    }
  }, []);

  return [currentIconClass, toggleColorIcon] as const;
};

const LangIcon: FC<LangIconProps> = ({ name }) => {
  const [currentIconClass, toggleColorIcon] = useIconClass(name);
  const onMouseEnter = () => toggleColorIcon(true);
  const onMouseLeave = () => toggleColorIcon(false);

  return (
    <li className="list-inline-item">
      <i
        className={currentIconClass}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </li>
  );
};

export default LangIcon;
