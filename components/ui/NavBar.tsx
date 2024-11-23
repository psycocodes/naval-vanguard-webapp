"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const links = [
    { name: "Home", href: "/", searchHref: "/" },
    { name: "Docs", href: "/docs", searchHref: "/docs" },
    { name: "Dashboard", href: "/dashboard", searchHref: "/dashboard" },
    { name: "Team", href: "/team", searchHref: "/team" },
  ];
  const currentPath = usePathname();
  const isActive = (itemLink: string) => {
    // Exact match for root, starts with for other paths
    return itemLink === '/' 
      ? currentPath === itemLink 
      : currentPath.startsWith(itemLink) || currentPath === itemLink;
  };

  return (
    <div className="fixed left-0 top-0 w-full h-[3rem] bg-neutral-800/5 backdrop-blur-3xl z-[99] flex items-center justify-between p-5 pl-3 border-b border-neutral-800/20">
        <a href="/">
          <img src="/images/icon.png" className="w-10 h-10" alt="Logo" />
        </a>
        <nav className="flex items-center gap-7">
          {links.map((item) => (
            <Link 
            key={item.href} 
            href={item.href}
            className={`
              text-l font-light
              ${isActive(item.searchHref) 
                ? 'text-amber-500' 
                : 'text-stone-400 hover:text-amber-400'}
            `}
          >
            {item.name}
          </Link>
          ))}
        </nav>
    </div>
  );
};

export default NavBar;
