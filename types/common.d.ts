export type DefaultPage<T = any> = {
  params: T;
  searchParams: { [key: string]: string | string[] | undefined };
};

export type ServerError = {
  error: string;
  message: string | string[];
  statusCode: number;
};
