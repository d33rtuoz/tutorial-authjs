import { db } from '@/db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import type { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const authConfig = {
  adapter: DrizzleAdapter(db),
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      //   const isLoggedIn = !!auth?.user;
      //   const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      //   if (isOnDashboard) {
      //     if (isLoggedIn) return true;
      //     return false;
      //   } else if (isLoggedIn) {
      //     return Response.redirect(new URL('/dashboard', nextUrl));
      //   }
      return true;
    },
  },
  providers: [GitHub],
} satisfies NextAuthConfig;
