import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { TypeUserFromToken } from '@/types/user';
import { signJoseToken } from '@/helpers/authServ';

export async function POST(req: NextRequest) {
  const body = req.body ? await req.json() : { token: null };
  const { token } = body;

  if (!token) {
    return NextResponse.json(
      { status: 401, message: 'No token' },
      { status: 401 }
    );
  }

  let userInfo: null | TypeUserFromToken = null;
  try {
    userInfo = jwt.verify(
      token,
      process.env.BACKEND_JWT_SECRET ?? ''
    ) as TypeUserFromToken;
  } catch (error) {
    return NextResponse.json(
      { status: 401, message: 'Invalid token' },
      { status: 401 }
    );
  }

  const nextjsToken = await signJoseToken(
    userInfo,
    process.env.NEXTJS_JWT_SECRET ?? '',
    userInfo.iat,
    userInfo.exp
  );

  const response = NextResponse.json(
    { content: { message: 'Set cookies success' } },
    { status: 200 }
  );
  response.cookies.set('auth-token', nextjsToken);

  return response;
}
