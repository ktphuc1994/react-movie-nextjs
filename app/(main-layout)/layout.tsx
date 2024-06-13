import { ReactNode } from 'react';
import MainFooter from '@/components/main/Footer';
import MainHeader from '@/components/main/Header';
import MainNavbar from '@/components/main/Navbar';

import classes from './page.module.css';

type MainLayoutType = {
  children: ReactNode;
  trailerModal: ReactNode;
};

const MainLayout = ({ children, trailerModal }: MainLayoutType) => {
  return (
    <>
      {trailerModal}
      <div className={classes.mainLayout}>
        <div className={classes.fixedTopHeader}>
          <MainHeader />
          <MainNavbar />
        </div>
        <section className={classes.mainContent}>{children}</section>
        <div className={classes.mainFooter}>
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
