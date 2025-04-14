"use client";
import { getToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";

export default function isAuth<P extends object>(Component: ComponentType<P>) {
  return function IsAuth(props: P) {
    const router = useRouter();
    const userToken = getToken();

    useEffect(() => {
      if (!userToken) {
        router.push("/signin");
      }
    }, [router, userToken]);

    if (!userToken) {
      return null;
    }

    return <Component {...props} />;
  };
}
