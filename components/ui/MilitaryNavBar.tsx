"use client";
import Tabs from "@/constants/militarytabs";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MilitaryNavBar = ({ fixed }: { fixed: boolean }) => {
    const navItems = [{ name: "DASHBOARD", href: "/dashboard" }].concat(
        Tabs.map((item) => ({
          name: item.toUpperCase(),
          href: "/dashboard/" + item.toLowerCase(),
        }))
      );
  const currentPath = usePathname();
  function isActive(itemLink: string){
    const isRootPath = itemLink === "/dashboard";
    const isExactMatch = itemLink === currentPath;
    const isSubPath = !isRootPath && currentPath.startsWith(itemLink);
    const isActive = isExactMatch || isSubPath;
    return isActive 
  }
  function setLinkStyles(itemLink: string) {
    const baseStyle = "p-5 pt-0 text-l font-semibold ";
    const accentColor = "text-emerald-300";
    const isLinkActive = isActive(itemLink)
    return `${baseStyle} ${isLinkActive ? accentColor : "hover:text-emerald-200"}`;
  }

  return (
    <header
      className={`flex items-center justify-center font-[family-name:var(--font-blackopsone)] backdrop-blur-sm ${
        fixed ? "fixed top-0 left-0 w-full z-10" : ""
      }`}
    >
      <div className="px-5 text-stone-400 flex">
        {navItems.map((item, index) => (
          <div className="flex text-center group">
              <Link
                key={index}
                href={item.href}
                className={`${isActive(item.href) ? "text-emerald-700" : "text-stone-500"} p-3 pt-0 text-l font-semibold group-hover:text-emerald-200`}
              >
                <div className={`${isActive(item.href) ? "bg-emerald-700" : "bg-stone-800"} w-[120px] h-[3px] border border-stone-700/20 group-hover:bg-emerald-200`}></div>
                <h1 className="mt-2">{item.name}</h1>
              </Link>
          </div>
        ))}
      </div>
    </header>
  );
};
export default MilitaryNavBar;
