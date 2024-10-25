import NavBar from "@/components/ui/NavBar";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar fixed={true} />
      {children}
    </div>
  );
}
