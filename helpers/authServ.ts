import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

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
): Promise<JWTPayload> {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  // run some checks on the returned payload, perhaps you expect some specific values

  // if its all good, return it, or perhaps just return a boolean
  return payload;
}
