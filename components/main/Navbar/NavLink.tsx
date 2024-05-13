import classes from './index.module.css';
import Link, { LinkProps } from 'next/link';

type NavLinkComponent = LinkProps & {
  active?: boolean;
  className?: string;
  children: React.ReactNode;
};

const NavLink = ({
  active = false,
  className,
  children,
  ...linkProps
}: NavLinkComponent) => {
  return (
    <Link
      {...linkProps}
      className={`${className} ${active ? 'active' : ''} ${classes.navLink}`}
    >
      <span>{children}</span>
    </Link>
  );
};

export default NavLink;
