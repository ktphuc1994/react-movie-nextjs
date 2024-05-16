import classes from './index.module.css';

import Image from 'next/image';
import UserMenu from './userMenu';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <header className={`${classes.header} main-container-wrapper`}>
      <Link href='/'>
        <Image
          src='/images/movieLogo.png'
          alt='movie-logo'
          className='movie-logo'
          width={192}
          height={121}
          priority
        />
      </Link>
      <UserMenu />
    </header>
  );
};

export default MainHeader;
