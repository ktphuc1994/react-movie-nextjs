import { ReactNode } from 'react';
import MainFooter from '@/components/main/Footer';
import MainHeader from '@/components/main/Header';
import MainNavbar from '@/components/main/Navbar';

import classes from './page.module.css';

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <main>
      <div className={classes.fixedTopHeader}>
        <MainHeader />
        <MainNavbar />
      </div>
      <section className={classes.mainContent}>{children}</section>
      <MainFooter />
    </main>
  );
};

export default MainLayout;
