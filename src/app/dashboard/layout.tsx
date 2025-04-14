"use client";
import isAuth from "@/components/isAuth";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="ml-[15rem] px-[2rem]">{children}</div>
    </div>
  );
};

export default isAuth(DashboardLayout);
