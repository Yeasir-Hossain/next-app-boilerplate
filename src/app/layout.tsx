import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import AuthProvider from "@/app/api/auth/[...nextauth]/auth-provider";
import { lexendDeca, poppins } from "@/app/fonts";
import GlobalDrawer from "@/components/drawer-views/container";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site.config";
import ReduxProvider from "@/features/redux-provider";
import cn from "@/hooks/class-names";
import { getServerSession } from "next-auth/next";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";

const NextProgress = dynamic(() => import("@/components/next-progress"), {
  ssr: false
});
// styles
import "@/app/globals.css";
import Script from "next/script";
import GlobalModal from "@/components/modal-views/container";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <html
      lang='en'
      dir='ltr'
      // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <Script
        // id="jw-player"
        strategy='afterInteractive'
        src='https://cdn.jwplayer.com/libraries/XhGm52Nv.js'
      ></Script>
      <body
        // to prevent any warning that is caused by third party extensions like Grammarly
        suppressHydrationWarning
        className={cn(poppins.variable, lexendDeca.variable, "font-inter")}
      >
        <ReduxProvider>
          <AuthProvider session={session}>
            <ThemeProvider>
              <NextProgress />
              {children}
              <Toaster />
              <GlobalModal />
              <GlobalDrawer />
            </ThemeProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
