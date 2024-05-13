import 'next';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_JWT_SECRET?: string;
      NEXTJS_JWT_SECRET?: string;
    }
  }
}
