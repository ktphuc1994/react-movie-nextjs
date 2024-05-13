import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJoseToken } from './helpers/authServ';
import { COOKIE_AUTH_KEY } from './constants/commonConst';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get(COOKIE_AUTH_KEY)?.value ?? '';

  try {
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
