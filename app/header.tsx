"use client"

import { Music } from 'lucide-react';
import { ReactElement } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export default function Header(): ReactElement {

    return (
        <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm fixed w-full z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Music className="h-6 w-6 text-pink-500"/>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">CheeTransfer</span>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">Home</a></li>
                        <li><a href="/how-it-works" className="text-gray-300 hover:text-pink-500 transition-colors">How it Works</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">Contact</a></li>
                        <li className="pl-3">
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}