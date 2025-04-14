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
import NavLink from "@/components/NavLink";
import Sidebar from "@/components/Sidebar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const sidebarMain = [
    {
      id: 1,
      icon: overviewIcon,
      title: "Overview",
      href: "/dashboard/wallet",
    },
    {
      id: 2,
      icon: customersIcon,
      title: "Customers",
      href: "/dashboard/wallet",
    },
    {
      id: 3,
      icon: spotOrdersIcon,
      title: "Spot Orders",
      href: "/dashboard/wallet",
    },
    {
      id: 4,
      icon: marginOrdersIcon,
      title: "Margin Orders",
      href: "/dashboard/wallet",
    },
    {
      id: 5,
      icon: transactionsIcon,
      title: "Transactions",
      href: "/dashboard/wallet",
    },
    {
      id: 6,
      icon: walletIcon,
      title: "Wallet",
      href: "/dashboard/wallet",
    },
  ];

  const sidebarOthers = [
    {
      id: 7,
      icon: notificationIcon,
      title: "Notification",
      href: "/dashboard/wallet",
    },
    {
      id: 8,
      icon: settingsIcon,
      title: "Settings",
      href: "/dashboard/wallet",
    },
    {
      id: 9,
      icon: logoutIcon,
      title: "Logout",
      href: "/dashboard/wallet",
    },
    {
      id: 10,
      icon: helpIcon,
      title: "Help",
      href: "/dashboard/wallet",
    },
  ];

  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="ml-[15rem] px-[2rem]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
