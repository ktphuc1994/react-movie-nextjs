'use client';
import classes from './index.module.css';

// import local library
import { useRouter } from 'next/navigation';

// import types
import { TypeUserRegister } from '@/types/user';

// import local service
import { postRegister } from '@/helpers/userServ';
import errorHandling from '@/helpers/errorServ';

// import local component
import Countdown from '../countdown';

// import ant design components
import Form from 'antd/es/form/Form';
import Input from 'antd/es/input/Input';
import Button from 'antd/es/button';
import Link from 'next/link';
import FormItem from 'antd/es/form/FormItem';
import useNotification from 'antd/es/notification/useNotification';
import {
  LockOutlined,
  UserOutlined,
  MobileOutlined,
  IdcardOutlined,
} from '@ant-design/icons';

type FieldType = {
  email?: string;
  matKhau?: string;
  reMatKhau?: string;
  soDT?: string;
  hoTen?: string;
};

const SignupForm = () => {
  const router = useRouter();
  const [api, contextHolder] = useNotification();

  const openSuccessNoti = () => {
    api.success({
      message: 'Đăng ký thành công',
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
      },
      key: 'register-success-noti',
    });
  };

  const handleSignup = async (values: TypeUserRegister) => {
    try {
      await postRegister(values);
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
        onFinish={handleSignup}
      >
        <FormItem<FieldType>
          name='email'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập email',
            },
            {
              type: 'email',
              message: 'Vui lòng nhập email đúng định dạng Johndoe@email.com',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Johndoe@email.com'
            type='email'
            autoComplete='email'
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
            {
              min: 6,
              message: 'Vui lòng nhập mật khẩu dài hơn 5 ký tự',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            autoComplete='current-password'
            placeholder='Mật khẩu'
            size='large'
          />
        </FormItem>
        <FormItem<FieldType>
          name='reMatKhau'
          dependencies={['matKhau']}
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập Xác nhận mật khẩu',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('matKhau') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    'Xác nhận mật khẩu và mât khẩu băt buộc phải giống nhau'
                  )
                );
              },
            }),
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            autoComplete='off'
            placeholder='Vui lòng nhập xác nhận mật khẩu...'
            size='large'
          />
        </FormItem>
        <FormItem<FieldType>
          name='soDT'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập Số điện thoại',
            },
            {
              pattern: /^(?:\d*)$/,
              message: 'Số điện thoại chỉ bao gồm số',
            },
          ]}
        >
          <Input
            prefix={<MobileOutlined />}
            placeholder='Số điện thoại'
            size='large'
          />
        </FormItem>
        <FormItem<FieldType>
          name='hoTen'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập Họ và tên',
            },
            {
              pattern: /^[A-Za-z\s]*$/i,
              message: 'Họ và tên chỉ được phép nhập các chữ cái',
            },
          ]}
        >
          <Input
            prefix={<IdcardOutlined />}
            placeholder='Họ và tên'
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
            Đăng ký
          </Button>
          <Link href='/auth?type=login'>
            <Button
              className='navigate-form-button'
              type='text'
              size='large'
              danger
            >
              Đăng nhập
            </Button>
          </Link>
        </FormItem>
      </Form>
    </>
  );
};

export default SignupForm;
