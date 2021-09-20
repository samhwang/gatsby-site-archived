import { useMemo, useCallback } from 'react';
import { useToggle } from 'rooks';

const useIconClass = (name: string) => {
  const DEFAULT_ICON_CLASS = useMemo<string>(() => `devicon-${name}`, []);
  const toggleColorIcon = useCallback(
    (currentClass) =>
      currentClass === DEFAULT_ICON_CLASS
        ? `${DEFAULT_ICON_CLASS} colored`
        : DEFAULT_ICON_CLASS,
    []
  );

  const [currentIconClass, toggleIconClass] = useToggle(
    DEFAULT_ICON_CLASS,
    toggleColorIcon
  );

  return [currentIconClass, toggleIconClass] as const;
};

export default useIconClass;
