import useIconClass from './useIconClass';

interface LangIconProps {
  name: string;
}

function LangIcon({ name }: LangIconProps) {
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
}

export default LangIcon;
