"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

const NavLink = (props: ComponentProps<typeof Link>) => {
  const pathname = usePathname();
  const paths = pathname.split("/");

  return (
    <Link
      {...props}
      href={props.href}
      className={cn(
        "hover:text-beam-yellow flex items-center gap-4 py-2.5 text-white text-[0.75rem]",
        props.className,
        paths[1] === String(props.href).slice(1) && "text-beam-yellow",
      )}
    />
  );
};

export default NavLink;
