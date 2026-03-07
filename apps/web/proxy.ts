// import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  return null;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  // matcher: ['/crm/:path*', '/auth/:path*']
};
