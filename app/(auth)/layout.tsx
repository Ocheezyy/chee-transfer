import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
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
    title: "CheeTransfer",
    description: "Transfer your music now!",
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
                    <div className="flex items-center justify-center min-h-screen">
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}