'use client';

import classes from './index.module.css';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

const MainNavbar = () => {
  const pathname = usePathname();

  const checkActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={classes.mainNav}>
      <div className='main-container-wrapper'>
        <ul>
          <li>
            <NavLink href='/' active={checkActiveLink('/')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href='/theatres' active={checkActiveLink('/theatres')}>
              Theatres
            </NavLink>
          </li>
          <li>
            <NavLink href='#' active={checkActiveLink('#')}>
              Offer
            </NavLink>
          </li>
          <li>
            <NavLink href='#' active={checkActiveLink('#')}>
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavbar;
