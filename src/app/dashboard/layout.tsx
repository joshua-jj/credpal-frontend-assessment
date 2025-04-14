import NavLink from "@/components/NavLink";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";
import overviewIcon from "@/assets/icons/overview.svg";
import customersIcon from "@/assets/icons/customers.svg";
import spotOrdersIcon from "@/assets/icons/spot-orders.svg";
import marginOrdersIcon from "@/assets/icons/margin-orders.svg";
import transactionsIcon from "@/assets/icons/transactions.svg";
import walletIcon from "@/assets/icons/wallet.svg";
import notificationIcon from "@/assets/icons/notification.svg";
import settingsIcon from "@/assets/icons/settings.svg";
import logoutIcon from "@/assets/icons/logout.svg";
import helpIcon from "@/assets/icons/help.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

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
    <div className="flex min-h-screen">
      <aside className="bg-primary w-[15rem]">
        <div className="flex items-center gap-3 px-[2rem] pt-4">
          <div className="bg-beam-yellow flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">B.</div>
          <p className="text-xs font-bold text-white">BEAM</p>
        </div>
        <Separator className="mt-6" />
        <div className="mt-10 px-[2rem]">
          <p className="text-[0.68rem] text-white">MAIN</p>
          <nav className="mt-4">
            {sidebarMain.map(item => (
              <NavLink href={item.href} key={item.title}>
                <Image src={item.icon} alt={item.title} width={18} height={18} />
                <p>{item.title}</p>
              </NavLink>
            ))}
          </nav>
          <Separator className="my-6 bg-[#C8CBD9]" />
          <nav className="mt-4">
            {sidebarOthers.map(item => (
              <NavLink href={item.href} key={item.title}>
                <Image src={item.icon} alt={item.title} width={18} height={18} />
                <p>{item.title}</p>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="mt-4 px-4">
          <div className="flex items-center gap-4 rounded-[6px] bg-white p-3.5">
            <p className="text-[0.625rem] text-[#0D0D0C]">Switch to dark mode</p>
            <Switch />
          </div>
        </div>
      </aside>
      <div className="px-[2rem]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
