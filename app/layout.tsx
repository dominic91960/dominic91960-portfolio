import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dominic Brian - Portfolio",
  description:
    "Full-stack developer specializing in React, Next.js, and Node.js. View my projects and get in touch.",
  keywords: [
    "portfolio",
    "developer",
    "React",
    "Next.js",
    "web development",
    "Dominic Brian",
  ],
  authors: [{ name: "Dominic Brian" }],
  creator: "Dominic Brian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-primary bg-background text-[12px] leading-[1.1] antialiased sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]",
          geistSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
