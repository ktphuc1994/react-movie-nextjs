import LOCAL_SERV from './localServ';

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

export const serverFetch = async (url: string, requestInit?: RequestInit) => {
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

export default clientFetch;
