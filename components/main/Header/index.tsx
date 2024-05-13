import classes from './index.module.css';

import Image from 'next/image';
import UserMenu from './userMenu';

const MainHeader = () => {
  return (
    <header className={`${classes.header} main-container-wrapper`}>
      <Image
        src='/images/movieLogo.png'
        alt='movie-logo'
        className='movie-logo'
        width={192}
        height={121}
        priority
      />
      <UserMenu />
    </header>
  );
};

export default MainHeader;
