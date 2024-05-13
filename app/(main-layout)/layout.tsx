import { ReactNode } from 'react';
import MainFooter from '@/components/main/Footer';
import MainHeader from '@/components/main/Header';
import MainNavbar from '@/components/main/Navbar';

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <main>
      <MainHeader />
      <MainNavbar />
      <section className='content'>{children}</section>
      <MainFooter />
    </main>
  );
};

export default MainLayout;
