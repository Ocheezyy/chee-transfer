"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Disc3, Music, Search } from "lucide-react";
import { SVGProps, useState } from "react";
import { Input } from "@/components/ui/input";


type PlaylistsProps = {
    playlists: Playlist[] | null;
};


export default function Playlists({ playlists }: PlaylistsProps) {
    const [selectedPlatform, setSelectedPlatform] = useState("spotify");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPlaylists = playlists?.filter(playlist =>
        playlist.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <main className="flex-1 p-8">
            <section className="py-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left space-y-4 md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Select a playlist to transfer
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Choose your music platform and find the playlist you want to transfer.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Disc3 className="w-48 h-48 text-primary animate-spin-slow"/>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                            <SelectTrigger className="w-full sm:w-[200px]">
                                <SelectValue placeholder="Select platform"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="spotify">Spotify</SelectItem>
                                <SelectItem value="apple">Apple Music</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="relative w-full sm:w-auto flex-1 max-w-md">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"/>
                            <Input
                                type="text"
                                placeholder="Search playlists"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {filteredPlaylists?.map((playlist) => (
                        <Card key={playlist.id}
                              className="overflow-hidden bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
                            <div className="relative aspect-square">
                                {playlist.images && playlist.images[0] ? (
                                    <Image
                                        src={playlist.images[0].url}
                                        alt={playlist.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full bg-gray-700">
                                        <Music className="w-1/3 h-1/3 text-gray-400"/>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex-grow overflow-hidden">
                                    <h2 className="font-semibold text-lg truncate">{playlist.name}</h2>
                                    <p className="text-sm text-gray-400 truncate">{playlist.tracks.total} tracks</p>
                                </div>
                                <SpotifyIcon className="w-6 h-6 text-[#1DB954] flex-shrink-0 ml-2"/>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
            {!filteredPlaylists || filteredPlaylists.length === 0 && (
                <div className="flex flex-col items-center justify-center h-64">
                    <p className="text-gray-400">No playlists found</p>
                </div>
            )}
        </main>
);
}

function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
    );
}