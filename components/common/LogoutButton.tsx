'use client';
import Cookies from 'universal-cookie';

// import local services
import LOCAL_SERV from '@/helpers/localServ';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    const cookies = new Cookies(null, { path: '/' });
    cookies.remove('auth-token');
    LOCAL_SERV.token.unset();
    router.push('/');
    router.refresh();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
