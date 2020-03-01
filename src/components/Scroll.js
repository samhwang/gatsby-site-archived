import smoothscroll from 'smoothscroll-polyfill';
import React, { cloneElement, useEffect } from 'react';
import PropTypes from 'prop-types';

function Element(props) {
  return props.children;
}

function Scroll(props) {
  const { type, element, offset, timeout, children, counter } = props;
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  function handleClick(event) {
    event.preventDefault();
    let elem;
    let scroll = true;
    if (type && element) {
      switch (type) {
        case 'class':
          elem = document.getElementsByClassName(element)[0];
          scroll = elem ? true : false;
          break;
        case 'id':
          elem = document.getElementById(element);
          scroll = elem ? true : false;
          break;
        default:
      }
    }
    scroll
      ? scrollTo(elem, offset, timeout)
      : console.log(`Element not found: ${element}`); // eslint-disable-line
  }

  function scrollTo(element, offSet = 0, timeout = null) {
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

  return (
    <Element>
      {typeof children === 'object'
        ? (cloneElement(children, { onClick: handleClick }))
        : (<span onClick={handleClick} onKeyDown={handleClick} role="tab" tabIndex={counter}>{children}</span>)
      }
    </Element>
  );
}

Scroll.propTypes = {
  type: PropTypes.string,
  element: PropTypes.string,
  offset: PropTypes.number,
  timeout: PropTypes.number,
  children: PropTypes.node.isRequired,
  counter: PropTypes.number,
}

export default Scroll;
