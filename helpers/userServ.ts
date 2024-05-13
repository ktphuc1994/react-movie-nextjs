// import local service
import LOCAL_SERV from './localServ';
import clientFetch, { serverFetch } from './apiRequest';

// import local interfaces
import { TypeUser, TypeUserLogin, TypeUserRegister } from '@/types/user';

// import local constants
import localConst from '@/constants/localConst';

export const postLogin = async (loginInfo: TypeUserLogin): Promise<string> => {
  const res = await serverFetch(localConst.BASE_URL + '/api/login', {
    method: 'POST',
    body: JSON.stringify(loginInfo),
  });

  return res.content.Authorization;
};

export const postRegister = async (registerInfo: TypeUserRegister) => {
  const res = await serverFetch(localConst.BASE_URL + '/api/register', {
    method: 'POST',
    body: JSON.stringify(registerInfo),
  });

  return res.content;
};

export const getUserInfo = async (): Promise<TypeUser | null> => {
  'use client';
  const token = LOCAL_SERV.token.get();
  if (!token) return null;

  const res = await clientFetch(
    localConst.BASE_USER_URL() + '/ThongTinTaiKhoan'
  );

  return res.content;
};
