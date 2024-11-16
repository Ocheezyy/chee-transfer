import type { Metadata } from "next";
import localFont from "next/font/local";
// import AuthProvider from "@/components/providers/authprovider";
import Header from "@/app/header";
import { ReactNode } from "react";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CheeTransfer",
  description: "Transfer your music now!",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
      <ClerkProvider>
          <html lang="en" className="dark">
          <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100`}
          >
                <Header />
                {children}
          </body>
          </html>
      </ClerkProvider>
  );
}