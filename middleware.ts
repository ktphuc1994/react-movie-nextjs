import { NextResponse } from 'next/server';
import { verifyJoseToken } from './helpers/authServ';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get('auth-token')?.value ?? '';

  try {
    console.log({ authToken, env: process.env.NEXTJS_JWT_SECRET });
    await verifyJoseToken(authToken, process.env.NEXTJS_JWT_SECRET ?? '');
  } catch (error) {
    if (pathname === '/auth') {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/auth', request.url));
  }

  if (pathname === '/auth' && authToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/auth', '/movie/:movieId/booking'],
};
