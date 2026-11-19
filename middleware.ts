import { NextResponse, type NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

function isProtectedPortalPath(pathname: string): boolean {
  return (
    pathname === "/internet/dashboard" ||
    pathname.startsWith("/internet/dashboard/") ||
    pathname === "/internet/admin" ||
    pathname.startsWith("/internet/admin/")
  );
}

/**
 * Optimistic gate only. A present cookie is not proof of a valid session.
 * Protected pages and server actions call getPortalContext() before rendering data.
 */
export function middleware(request: NextRequest) {
  if (!isProtectedPortalPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/internet/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/internet/dashboard",
    "/internet/dashboard/:path*",
    "/internet/admin",
    "/internet/admin/:path*",
  ],
};
