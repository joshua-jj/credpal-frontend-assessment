"use client";
import customersIcon from "@/assets/icons/customers.svg";
import helpIcon from "@/assets/icons/help.svg";
import logoutIcon from "@/assets/icons/logout.svg";
import marginOrdersIcon from "@/assets/icons/margin-orders.svg";
import notificationIcon from "@/assets/icons/notification.svg";
import overviewIcon from "@/assets/icons/overview.svg";
import settingsIcon from "@/assets/icons/settings.svg";
import spotOrdersIcon from "@/assets/icons/spot-orders.svg";
import transactionsIcon from "@/assets/icons/transactions.svg";
import walletIcon from "@/assets/icons/wallet.svg";
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
