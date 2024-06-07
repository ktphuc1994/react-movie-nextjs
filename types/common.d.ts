type DefaultPage<T = any> = {
  params: T;
  searchParams: { [key: string]: string | string[] | undefined };
};

type ServerError = {
  error: string;
  message: string | string[];
  statusCode: number;
};

type FetchWithContent<T> = {
  message: string;
  dateTime: string;
  content: T;
};

export { DefaultPage, ServerError, FetchWithContent };
