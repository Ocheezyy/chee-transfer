import { User } from "@clerk/nextjs/server";


export default async function getPlaylists(userObj: User | null, accessToken: string | null): Promise<Playlist[] | null> {
    if (userObj === null || accessToken === null) return null;
    const getPlaylistsRes = await fetch("https://api.spotify.com/v1/me/playlists", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    });
    const getPlaylistsData = await getPlaylistsRes.json();

    return getPlaylistsData.items;
}