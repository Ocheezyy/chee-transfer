"use client";

import { ReactNode, useEffect, useState, createContext } from "react";

const AppleContext = createContext<AppleContextProps | object>({});

export default function AppleProvider({ children }: { children: ReactNode }) {
    const [musicKitLoaded, setMusicKitLoaded] = useState<boolean>(false);

    useEffect(() => {
        document.addEventListener("musickitloaded", async function() {
            setMusicKitLoaded(true);
            console.log("isLoggedin", isLoggedIn());
            if (!isLoggedIn()) {
                await appleLogin();
            }
            const applePlaylists = await getPlaylists();
            console.log(applePlaylists);
        });
    }, []);

    const appleLogin = async () => {
        if (musicKitLoaded) {
            await getMusicInstance()?.authorize();
        }
    };
    const isLoggedIn = () => {
        if (musicKitLoaded) {
            return getMusicInstance()?.isAuthorized;
        }
    };
    const getMusicInstance = () => {
        if (musicKitLoaded) {
            return window.MusicKit.getInstance();
        }
    };
    const getAppleMusicHeader = () => {
        return {
            Authorization: `Bearer ${getMusicInstance()?.developerToken}`,
            Accept: "application/json",
            "Content-Type": "application/json",
            "Music-User-Token": getMusicInstance()?.musicUserToken || ""
        };
    };
    const getPlaylists = async () => {
        const getPlaylistsRes = await fetch("https://api.music.apple.com/v1/me/library/playlists", {
            method: "GET",
            headers: getAppleMusicHeader()
        });

        console.log(getPlaylistsRes);
        const getPlaylistsData = await getPlaylistsRes.json();

        return getPlaylistsData.items;
    };

    return (
        <AppleContext.Provider value={{
            musicKitLoaded,
            appleLogin,
            isLoggedIn,
            getMusicInstance,
            getAppleMusicHeader,
            getPlaylists
        }}>
            {children}
        </AppleContext.Provider>
    );
}