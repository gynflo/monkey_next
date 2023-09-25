"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface ActiveLinkProps {
  children: React.ReactNode;
  href: string;
}

const ActiveLink = ({ children, href }: ActiveLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className={clsx(isActive && "font-medium text-primary")}>
      {children}
    </Link>
  );
};

export default ActiveLink;
