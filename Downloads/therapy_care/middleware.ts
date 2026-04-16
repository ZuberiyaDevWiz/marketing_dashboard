// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

 
  if (url.pathname.startsWith("/admin")) {
    const auth = req.headers.get("authorization");
    if (!auth) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin area"',
        },
      });
    }

    const base64 = auth.split(" ")[1] || "";
    const [user, pass] = Buffer.from(base64, "base64").toString().split(":");

    const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (user !== ADMIN_USERNAME || pass !== ADMIN_PASSWORD) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin area"',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};


// middleware.ts
// import { NextResponse } from "next/server";

// export function middleware() {
//   return new NextResponse(
//     "Site temporarily unavailable. Please try again later.",
//     { status: 503 }
//   );
// }