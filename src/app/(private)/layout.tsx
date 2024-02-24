"use client";

import { useIsMounted } from "@/hooks/use-is-mounted";
import HydrogenLayout from "@/layouts/layout";
import { WiDaySnowThunderstorm } from "react-icons/wi";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <span>
          <WiDaySnowThunderstorm className='animate-bounce text-6xl' />
        </span>
      </div>
    );
  }

  return <HydrogenLayout>{children}</HydrogenLayout>;
}
