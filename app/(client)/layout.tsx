import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "../globals.css";
import { ClerkProvider, RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { dark } from "@clerk/themes";
import Script from "next/script";
import AppleProvider from "@/components/apple-provider";

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
    other: {
        "apple-music-developer-token": process.env.APPLE_DEV_TOKEN!,
        "apple-music-app-name": "Playlist Porter",
        "apple-music-app-build": "1978.4.1"
    }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
            }}
        >
            <html lang="en" className="dark">
            {/*<Head>*/}
            {/*    <meta name="apple-music-developer-token" content={process.env.APPLE_DEV_TOKEN} />*/}
            {/*    <meta name="apple-music-app-name" content="Playlist Porter"/>*/}
            {/*    <meta name="apple-music-app-build" content="1978.4.1"/>*/}
            {/*</Head>*/}
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100`}
            >
                <SignedOut>
                    <RedirectToSignIn />
                </SignedOut>
                <AppleProvider>
                    <SidebarProvider>
                        <AppSidebar />
                        <SidebarTrigger />
                        {children}
                    </SidebarProvider>
                </AppleProvider>
                <Script src="https://js-cdn.music.apple.com/musickit/v3/musickit.js" async></Script>
            </body>
            </html>
        </ClerkProvider>
    );
}