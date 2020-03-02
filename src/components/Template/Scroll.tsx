import smoothscroll from 'smoothscroll-polyfill';
import React, { cloneElement, useEffect } from 'react';

function Element(props: { children: JSX.Element }) {
  const { children } = props;
  return children;
}

function scrollTo(element?: Element, offSet = 0, timeout?: number) {
  const elemPos = element
    ? element.getBoundingClientRect().top + window.pageYOffset
    : 0;

  if (!timeout) {
    window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
  }

  setTimeout(() => {
    window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
  }, timeout);
}

function Scroll(props: {
  type: string;
  element: string;
  offset?: number;
  timeout?: number;
  children: JSX.Element;
  counter: number;
}) {
  const { type, element, offset, timeout, children, counter } = props;
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  function handleClick(event: React.KeyboardEvent | React.MouseEvent) {
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
      : console.log(`Element not found: ${element}`); // eslint-disable-line
  }

  return (
    <Element>
      {typeof children === 'object' ? (
        cloneElement(children, { onClick: handleClick })
      ) : (
        <span
          onClick={event => handleClick(event)}
          onKeyDown={event => handleClick(event)}
          role="tab"
          tabIndex={counter}
        >
          {children}
        </span>
      )}
    </Element>
  );
}

export default Scroll;
