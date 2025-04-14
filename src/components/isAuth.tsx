"use client";
import { getToken } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const router = useRouter();
    const userToken = getToken();

    if (!userToken) {
      router.push("/signin");
      return;
    }

    return <Component {...props} />;
  };
}
