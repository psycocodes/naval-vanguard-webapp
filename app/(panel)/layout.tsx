import NavBar from "@/components/ui/NavBar";
import React from "react";

export default function PanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="grid w-screen h-screen bg-slate-950 grid-rows-[auto_1fr] no-scrollbar">
        <header className="h-full">
            <NavBar fixed={false}></NavBar>
          </header>
          <main className="grid overflow-hidden">
            <div className="bg-slate-950 overflow-y-auto no-scrollbar">
                {children}
            </div>
          </main>
        </section>
      </body>
    </html>
  );
}
