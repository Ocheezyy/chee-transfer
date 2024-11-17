import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "../globals.css";
import { ClerkProvider, RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { dark } from "@clerk/themes";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "CheeTransfer App",
    description: "Home",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
            }}
        >
            <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100`}
            >
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                {children}
            </SidebarProvider>
            </body>
            </html>
        </ClerkProvider>
    );
}