import Link from 'next/link';

// import styles
import classes from './userMenu.module.css';

// import local services
import { verifyUser } from '@/helpers/authServ';

// import local components
import LogoutButton from '@/components/common/LogoutButton';

// import ant design components
import Search from 'antd/es/input/Search';
import { UserOutlined } from '@ant-design/icons';

const UserMenu = async () => {
  const userInfo = await verifyUser();

  return (
    <div className={classes.userMenu}>
      {userInfo ? (
        <ul>
          <li>
            <Link href='/profile'>
              <UserOutlined className='link-icon' />
              <span>My account</span>
            </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link href='/auth'>
              <UserOutlined className='link-icon' />
              <span>Login</span>
            </Link>
          </li>
          <li>
            <Link href='/auth?type=signup'>Sign up</Link>
          </li>
        </ul>
      )}

      <Search />
    </div>
  );
};

export default UserMenu;
