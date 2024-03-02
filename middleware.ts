import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { protectedRoutes } from "./src/router/routes";
import jwtDecode from "jwt-decode";
import { User } from "@types";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const jwt = request.cookies.get("auth")?.value;

  if (jwt && protectedRoutes.includes(request.nextUrl.pathname)) {
    const currentUser = jwtDecode<User>(jwt);

    if (!currentUser.exp || Date.now() > currentUser.exp * 1000) {
      request.cookies.delete("auth");
      const response = NextResponse.redirect(new URL("/", request.url));
      response.cookies.delete("auth");

      return response;
    }
  }
}
