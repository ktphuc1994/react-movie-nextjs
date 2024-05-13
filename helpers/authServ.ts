'use server';
import { COOKIE_AUTH_KEY } from '@/constants/commonConst';
import { TypeUserFromToken } from '@/types/user';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export async function signJoseToken(
  payload: string | Object | Buffer,
  secret: string,
  iat?: number,
  exp?: number
): Promise<string> {
  const start = iat ?? Math.floor(Date.now() / 1000);
  const end = exp ?? start + 60 * 60; // one hour

  return new SignJWT({ payload })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(end)
    .setIssuedAt(start)
    .setNotBefore(start)
    .sign(new TextEncoder().encode(secret));
}

export async function verifyJoseToken(
  token: string,
  secret: string
): Promise<TypeUserFromToken> {
  const { payload } = await jwtVerify<TypeUserFromToken>(
    token,
    new TextEncoder().encode(secret)
  );
  // run some checks on the returned payload, perhaps you expect some specific values

  // if its all good, return it, or perhaps just return a boolean
  return payload;
}

export async function verifyUser() {
  const token = cookies().get(COOKIE_AUTH_KEY);
  if (!token) return null;

  try {
    const userInfo = await verifyJoseToken(
      token.value,
      process.env.NEXTJS_JWT_SECRET ?? ''
    );
    return userInfo;
  } catch (error) {
    return null;
  }
}
