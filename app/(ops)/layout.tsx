import MilitaryNavBar from "@/components/ui/MilitaryNavBar";
import React from "react";
export default function OpsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <main className="flex flex-col grow h-screen">
          <MilitaryNavBar fixed={false} />
          <div className="grow flex mb-8 mt-0">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
