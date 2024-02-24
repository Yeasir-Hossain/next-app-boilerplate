import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import { routes } from "./config/routes";

interface IAllowedPaths {
  [key: string]: string[];
}

const allowedPaths: IAllowedPaths = {
  admin: [routes.admin.dashboard, routes.manageLive.home],
  moderator: [
    routes.moderator.dashboard,
    routes.moderator.newOrders,
    routes.moderator.reAssignOrders,
    routes.moderator.pastOrders
  ],
  studioPartner: [routes.studioPartner.dashboard, routes.studioPartner.newOrders, routes.studioPartner.pastOrders],
  deliveryPartner: [
    routes.deliveryPartner.dashboard,
    routes.deliveryPartner.newOrders,
    routes.deliveryPartner.pastOrders,
    routes.deliveryPartner.deliveryBoys
  ],
  deliveryBoy: [routes.deliveryBoy.dashboard, routes.deliveryBoy.newOrders, routes.deliveryBoy.pastOrders]
};

const isAuthorized = (role: string, path: string): boolean => {
  const roleAllowedPaths = allowedPaths[role];
  return roleAllowedPaths ? roleAllowedPaths.includes(path) : false;
};

export default withAuth(
  function middleware(req) {
    const userRole = req.nextauth.token?.role as string;
    const pathname = req.nextUrl.pathname as string;

    console.log("Pathname: ", pathname);
    console.log("UserRole: ", userRole);
    console.log("isAuthorized: ", isAuthorized(userRole, pathname));

    if (!isAuthorized(userRole, pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    } else {
      return NextResponse.next();
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => true
      // token?.role === 'user' || token?.role === 'admin', // If there is a token, the user is authenticated
    }
    // pages: {
    //   signIn: routes.signIn,
    //   error: routes.signIn,
    // },
  }
);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|icons|favicon.ico|login|$).*)"]
};
