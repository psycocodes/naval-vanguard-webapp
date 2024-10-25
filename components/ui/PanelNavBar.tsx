"use client";
import Links from "@/constants/links";
import { usePathname } from "next/navigation";
import React from "react";

const PanelNavBar = () => {
  const navItems = [{ name: "Home", href: "/landing" }].concat(
    Links.map((item) => ({
      name: item[0].toUpperCase() + item.slice(1),
      href: "/" + item.toLowerCase(),
    }))
  );

  const currentPath = usePathname();
  function setLinkStyles(itemLink: string) {
    const baseStyle = "mt-10 p-5 text-l font-semibold";
    const accentColor = "text-amber-300";
    // This is done to ensure Home doesnt get highlighted in other tabs
    // Determine if the link is active based on the current path
    const isRootPath = itemLink === "/";
    const isExactMatch = itemLink === currentPath;
    const isSubPath = !isRootPath && currentPath.startsWith(itemLink);

    // Link is active if it's either an exact match or a sub-path of the current path
    const isActive = isExactMatch || isSubPath;
    return `${baseStyle} ${isActive ? accentColor : "hover:text-amber-300"}`;
  }
  return (
    <>
      <div className="">
        Name
      </div>
    </>
  );
};
export default PanelNavBar;
