import { ServerError } from '@/types/common';
import message from 'antd/es/message';

const errorHandling = async (error: unknown) => {
  'use client';
  if (error instanceof Response) {
    const data = (await error.json()) as ServerError;
    const messageDisplay = Array.isArray(data.message)
      ? data.message[0]
      : data.message;
    message.error(messageDisplay);
    return;
  }

  if (error instanceof Error && error.message) {
    message.error(error.message);
    return;
  }

  message.error('Something went wrong');
};

export const serverErrorHandling = async (error: unknown) => {
  if (error instanceof Response) {
    const data = (await error.json()) as ServerError;
    const messageDisplay = Array.isArray(data.message)
      ? data.message[0]
      : data.message;
    return messageDisplay;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return 'Something went wrong';
};

export const checkIsAuthorizationError = (error: unknown) => {
  if (!(error instanceof Response)) return false;

  const status = error.status;
  return status === 401;
};

export default errorHandling;
