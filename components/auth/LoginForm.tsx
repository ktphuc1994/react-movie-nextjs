'use client';
import classes from './index.module.css';

// import types
import { TypeUserLogin } from '@/types/user';

// import local library
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// import local service
import LOCAL_SERV from '@/helpers/localServ';
import { postLogin } from '@/helpers/userServ';
import errorHandling from '@/helpers/errorServ';

// import local components
import Countdown from '../countdown';

// import ant design components
import Form from 'antd/es/form/Form';
import Input from 'antd/es/input/Input';
import Button from 'antd/es/button';
import FormItem from 'antd/es/form/FormItem';
import useNotification from 'antd/es/notification/useNotification';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

type FieldType = {
  email?: string;
  matKhau?: string;
};

const LoginForm = () => {
  const router = useRouter();
  const [api, contextHolder] = useNotification();

  const openSuccessNoti = () => {
    api.success({
      message: 'Đăng nhập thành công',
      description: (
        <Countdown
          initCount={5}
          message='Chuyển hướng về Trang chủ trong $count giây'
        />
      ),
      placement: 'top',
      duration: 5,
      onClose: () => {
        router.push('/');
        router.refresh();
      },
      key: 'login-success-noti',
    });
  };

  const handleLogin = async (loginInfo: TypeUserLogin) => {
    try {
      const token = await postLogin(loginInfo);
      await fetch('/api/set-cookie', {
        method: 'POST',
        body: JSON.stringify({ token }),
      });

      LOCAL_SERV.token.set(token);
      openSuccessNoti();
    } catch (error) {
      errorHandling(error);
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        name='normal_login'
        className={classes.authForm}
        onFinish={handleLogin}
      >
        <FormItem<FieldType>
          name='email'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            autoComplete='email'
            placeholder='Email'
            size='large'
          />
        </FormItem>
        <FormItem<FieldType>
          name='matKhau'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập Mật khẩu',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type='password'
            autoComplete='current-password'
            placeholder='Mật khẩu'
            size='large'
          />
        </FormItem>
        <FormItem>
          <Button
            danger
            htmlType='submit'
            className='submit-form-button'
            size='large'
          >
            Đăng nhập
          </Button>
          <Link href='/auth?type=signup'>
            <Button
              className='navigate-form-button'
              type='text'
              size='large'
              danger
            >
              Đăng ký
            </Button>
          </Link>
        </FormItem>
      </Form>
    </>
  );
};

export default LoginForm;
