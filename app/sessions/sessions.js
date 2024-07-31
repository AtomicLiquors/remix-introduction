import { createCookieSessionStorage } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'session',
    secure: process.env.NODE_ENV === 'production', // Only secure in production
    maxAge: 60 * 60, 
    httpOnly: true, // Prevent client-side access
    path: '/',
    sameSite: 'lax',
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;