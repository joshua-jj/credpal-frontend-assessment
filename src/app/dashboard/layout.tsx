"use client";
import isAuth from "@/components/isAuth";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="mt-[4rem]">
        <TopBar />
        <Separator />
        <div className="ml-[15rem] px-[2rem]">{children}</div>
      </div>
    </div>
  );
};

export default isAuth(DashboardLayout);
