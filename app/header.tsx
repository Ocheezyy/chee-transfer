"use client"

import { LogOut, Music, User } from 'lucide-react';
import { ReactElement } from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export default function Header(): ReactElement {
    // const { data: session, status: authStatus } = useSession();

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
                    </ul>
                </nav>
                {/*{authStatus === "authenticated" ? (*/}
                {/*    <DropdownMenu>*/}
                {/*        <DropdownMenuTrigger asChild>*/}
                {/*            <Button variant="ghost" className="relative h-8 w-8 rounded-full">*/}
                {/*                <User className="h-5 w-5 text-pink-500" />*/}
                {/*            </Button>*/}
                {/*        </DropdownMenuTrigger>*/}
                {/*        <DropdownMenuContent className="w-56 bg-gray-900 border-pink-500/50" align="end" forceMount>*/}
                {/*            <DropdownMenuItem className="font-normal text-gray-300 hover:text-pink-500 focus:text-pink-500">*/}
                {/*                <User className="mr-2 h-4 w-4" />*/}
                {/*                <span>Profile</span>*/}
                {/*            </DropdownMenuItem>*/}
                {/*            <DropdownMenuSeparator className="bg-gray-800" />*/}
                {/*            <DropdownMenuItem className="font-normal text-gray-300 hover:text-pink-500 focus:text-pink-500" onSelect={() => signOut()}>*/}
                {/*                <LogOut className="mr-2 h-4 w-4" />*/}
                {/*                <span>Log out</span>*/}
                {/*            </DropdownMenuItem>*/}
                {/*        </DropdownMenuContent>*/}
                {/*    </DropdownMenu>*/}
                {/*) : (*/}
                {/*    <Button*/}
                {/*        onClick={() => signIn()}*/}
                {/*        variant="ghost"*/}
                {/*        className="text-pink-500 hover:text-pink-400 hover:bg-pink-500/10"*/}
                {/*    >*/}
                {/*        Log in*/}
                {/*    </Button>*/}
                {/*)}*/}
            </div>
        </header>
    );
}