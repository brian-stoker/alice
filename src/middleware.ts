import { auth } from "@/lib/auth"

export default auth((req) => {
  // If the user is not authenticated and trying to access admin routes
  if (!req.auth && req.nextUrl.pathname.startsWith("/admin")) {
    const signInUrl = new URL("/auth/signin", req.nextUrl.origin)
    signInUrl.searchParams.set("callbackUrl", req.nextUrl.pathname)
    return Response.redirect(signInUrl)
  }
})

export const config = {
  matcher: ["/admin/:path*"],
}
