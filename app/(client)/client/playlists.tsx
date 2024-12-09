"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Disc3, Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import SpotifyPlaylistCard from "@/components/playlist-cards/spotify-playlist-card";
import ApplePlaylistCard from "@/components/playlist-cards/apple-playlist-card";
import { configure as MusicKitConfigure, isLoggedIn as appleIsLoggedIn, logIn as appleLogIn, getPlaylists as getApplePlaylists } from "@/app/client-functions/apple/music-kit-auth";


export default function Playlists({ initialPlaylists }: PlaylistsProps) {
    const [playlistData, setPlaylistData] = useState<any>(initialPlaylists);
    // const [appleAvailable, setAppleAvailable] = useState<boolean>(false);
    // const [musicKit, setMusicKit] = useState<MusicKit.MusicKitInstance>();

    // useEffect(() => {
    //     console.log("useeffect ran");
    //     document.addEventListener("musickitloaded", async function() {
    //         console.log("musickitloaded");
    //         await MusicKitConfigure(window.MusicKit);
    //         if (!appleIsLoggedIn()) {
    //             await appleLogIn();
    //         }
    //         const applePlaylists = await getApplePlaylists();
    //         console.log(applePlaylists);
    //         setPlaylistData({ apple: applePlaylists, ...playlistData });
    //     //     const music = await window.MusicKit.getInstance();
    //     //     console.log(music);
    //     //     setAppleAvailable(true);
    //     //     setMusicKit(music);
    //     //     if (!music.isAuthorized) {
    //     //         await music.authorize();
    //     //     }
    //     //
    //     //     console.log(music?.api.music("v1/me/library/playlists"));
    //     });
    // }, []);
    //
    //
    // useEffect(() => {
    //     console.log("playlistData", playlistData);
    // }, [playlistData]);






    // Bring back for refreshing of playlists
    // const [playlists, setPlaylists] = useState<Playlists>(initialPlaylists || { spotify: [], apple: [] });
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>("spotify");
    const [searchQuery, setSearchQuery] = useState("");
    const [platformPlaylists, setPlatformPlaylists] = useState<ApplePlaylist[] | SpotifyPlaylist[]>(initialPlaylists?.spotify || []);

    useCallback(() => {
        const outputPlaylists = platformPlaylists?.filter(playlist => {
            if (selectedPlatform === "spotify") {
                const currentPlaylist = playlist as SpotifyPlaylist;
                currentPlaylist?.name.toLowerCase().includes(searchQuery.toLowerCase());
            } //else if (selectedPlatform === "apple") {
            //     const currentPlaylist = playlist as ApplePlaylist;
            //     currentPlaylist?.name.toLowerCase().includes(searchQuery.toLowerCase());
            // }
        });
        setPlatformPlaylists(outputPlaylists || []);
    }, [platformPlaylists, searchQuery, selectedPlatform]);
    
    const hasPlaylists = platformPlaylists && platformPlaylists.length > 0;

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
                    {hasPlaylists && platformPlaylists?.map((playlist, idx) => (
                        selectedPlatform === "spotify" ?
                            <SpotifyPlaylistCard key={`${idx}-spot-playlist`} playlist={playlist as SpotifyPlaylist}/> :
                            selectedPlatform === "apple" ? <ApplePlaylistCard key={`${idx}-apple-playlist`}
                                                                              playlist={playlist as ApplePlaylist}/> :
                                null
                    ))}
                </div>
            </section>
            {!platformPlaylists || platformPlaylists.length === 0 && (
                <div className="flex flex-col items-center justify-center h-64">
                    <p className="text-gray-400">No playlists found</p>
                </div>
            )}
        </main>
    );
}

