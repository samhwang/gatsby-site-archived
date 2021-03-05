import { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';
import avatarJPG from '../../../assets/img/avatar.jpg';
import avatarWebP from '../../../assets/img/avatar.webp';
import type { SidebarProps } from '../../../globals';

function PureSidebar({
  personalInformation,
}: {
  personalInformation: SidebarProps;
}) {
  const { firstName, lastName } = personalInformation;

  const tabs = [
    { content: 'About', href: 'about' },
    { content: 'Experience', href: 'experience' },
    { content: 'Education', href: 'education' },
    { content: 'Skills', href: 'skills' },
    { content: 'Projects', href: 'projects' },
  ];
  const [isCollapsed, setCollapsed] = useState(true);
  function toggleNavbar() {
    setCollapsed((currentCollapsed) => !currentCollapsed);
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand" href="#page-top">
        <span className="d-block d-lg-none">{`${firstName} ${lastName}`}</span>
        <span className="d-none d-lg-block">
          <picture>
            <source type="image/webp" srcSet={avatarWebP} />
            <source type="image/jpeg" srcSet={avatarJPG} />
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatarJPG}
              alt={`${firstName} ${lastName} Avatar`}
            />
          </picture>
        </span>
      </a>
      <button
        className={`navbar-toggler ${isCollapsed ? 'collapsed' : ''}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
        id="navbarSupportedContent"
      >
        <Scrollspy
          items={tabs.map((s) => s.href)}
          currentClassName="active"
          offset={-300}
          className="navbar-nav"
        >
          {tabs.map((tab, i) => {
            const { href, content } = tab;
            return (
              <li className="nav-item" key={href}>
                <Scroll type="id" element={href} counter={i}>
                  <a className="nav-link" href={`#${href}`}>
                    {content}
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>
      </div>
    </nav>
  );
}

export default PureSidebar;
