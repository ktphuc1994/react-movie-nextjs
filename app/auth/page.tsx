import classes from './index.module.css';

// import types
import { DefaultPage } from '@/types/common';

// import local components
import FlyingRocket from '@/components/animated/FlyingRocket';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';

const AuthLayout = ({ searchParams }: DefaultPage) => {
  const isLogin = searchParams.type !== 'signup';

  return (
    <section className={classes.authLayout}>
      <div className='auth-content-wrapper'>
        <div className='auth-content'>
          <h1>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h1>
          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
      <div className='animated-icon'>
        <FlyingRocket />
      </div>
    </section>
  );
};

export default AuthLayout;
