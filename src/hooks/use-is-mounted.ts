"use client";

import { userLoggedIn, userLoggedOut } from "@/features/auth/authSlice";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export function useIsMounted() {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (session) {
      console.log("session: ", session);
      dispatch(
        userLoggedIn({
          accessToken: session?.user?.accessToken,
          user: session?.user,
          role: session?.user?.role
        })
      );
    } else {
      dispatch(userLoggedOut());
    }

    setTimeout(() => {
      setMounted(true);
    }, 1000);
  }, [dispatch, session]);

  return mounted;
}
