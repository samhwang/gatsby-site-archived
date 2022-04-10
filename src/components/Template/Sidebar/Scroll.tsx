import smoothscroll from 'smoothscroll-polyfill';
import { cloneElement, useEffect } from 'react';
import type { KeyboardEvent, MouseEvent, ReactElement } from 'react';

const scrollTo = (element?: Element, offSet = 0, timeout?: number) => {
  const elemPos = element
    ? element.getBoundingClientRect().top + window.scrollY
    : 0;
  const top = elemPos + offSet;

  if (!timeout) {
    window.scroll({ top, left: 0, behavior: 'smooth' });
    return;
  }

  setTimeout(() => {
    window.scroll({ top, left: 0, behavior: 'smooth' });
  }, timeout);
};

interface ScrollProps {
  type: string;
  element: string;
  offset?: number;
  timeout?: number;
  children: ReactElement;
  counter: number;
}

type OnClickEvent = KeyboardEvent | MouseEvent;

function Scroll({
  type,
  element,
  offset,
  timeout,
  children,
  counter,
}: ScrollProps) {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleClick = (event: OnClickEvent) => {
    event.preventDefault();
    let elem = null;
    let scroll = true;
    if (type && element) {
      switch (type) {
        case 'class':
          // eslint-disable-next-line prefer-destructuring
          elem = document.getElementsByClassName(element)[0];
          scroll = !!elem;
          break;
        case 'id':
          elem = document.getElementById(element);
          scroll = !!elem;
          break;
        default:
      }
    }

    return scroll && !!elem
      ? scrollTo(elem, offset, timeout)
      : console.error(`Element not found: ${element}`);
  };

  return typeof children === 'object' ? (
    cloneElement(children, { onClick: handleClick })
  ) : (
    <span
      onClick={handleClick}
      onKeyDown={handleClick}
      role="tab"
      tabIndex={counter}
    >
      {children}
    </span>
  );
}

Scroll.defaultProps = {
  offset: 0,
  timeout: 0,
};

export default Scroll;
