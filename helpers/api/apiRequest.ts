import { FetchWithContent } from '@/types/common';
import { serverErrorHandling } from './errorServ';
import LOCAL_SERV from '../localServ';

const clientFetch = async (url: string, requestInit?: RequestInit) => {
  'use client';
  const newOptions = { ...requestInit };
  const Authorization = 'Bearer ' + LOCAL_SERV.token.get();
  const contentType = 'application/json';
  const headers = {
    Authorization,
    'Content-Type': contentType,
    ...requestInit?.headers,
  };
  newOptions.headers = headers;

  try {
    const response = await fetch(url, newOptions);

    if (!response.ok) {
      return Promise.reject(response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const serverFetch = async <T = any, R = FetchWithContent<T>>(
  url: string,
  requestInit?: RequestInit
): Promise<R> => {
  const newOptions = { ...requestInit };
  const contentType = 'application/json';
  const headers = {
    'Content-Type': contentType,
    ...requestInit?.headers,
  };
  newOptions.headers = headers;

  try {
    const response = await fetch(url, newOptions);

    if (!response.ok) {
      return Promise.reject(response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

type ServerFetchResult<T> =
  | {
      isError: false;
      data: T;
    }
  | {
      isError: true;
      message: string;
    };
const handleServerFetchResult = async <T = any>(
  fetch: Promise<T>
): Promise<ServerFetchResult<T>> => {
  try {
    const res = await fetch;
    return {
      isError: false,
      data: res,
    };
  } catch (error) {
    const message = await serverErrorHandling(error);
    return { isError: true, message };
  }
};

export default clientFetch;
export { serverFetch, handleServerFetchResult };
