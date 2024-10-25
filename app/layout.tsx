
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const interAlt = Inter({ subsets: ['latin'] });

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
});

const centauriDefault = localFont({
  src: "./fonts/Centauri.ttf",
  variable: "--font-centauri",
  weight: "100 900",
});

const interItalic = localFont({
  src: "./fonts/Inter-Italic-VariableFont.ttf",
  variable: "--font-inter-italic",
});

const inter = localFont({
  src: "./fonts/Inter-VariableFont.ttf",
  variable: "--font-inter",
})
export const metadata: Metadata = {
  title: "Naval Vanguard",
  description: "Military Software for the Naval Forces",
};


const BlackOpsOne = localFont({
  src: "./fonts/BlackOpsOne-Regular.ttf",
  variable: "--font-blackopsone",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${interAlt.className} ${centauriDefault.variable} ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${interItalic.variable} ${BlackOpsOne.variable} antialiased dark`}
      > 
        {children}
      </body>
    </html>
  );
}