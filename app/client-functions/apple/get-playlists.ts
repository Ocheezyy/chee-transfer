import { getAppleMusicHeader } from "@/app/client-functions/apple/music-kit-auth";

export default async function getPlaylists(
    accessToken: string | null
): Promise<ApplePlaylist[] | null> {
    if (accessToken === null) return null;
    const getPlaylistsRes = await fetch("https://api.music.apple.com/v1/me/library/playlists", {
        method: "GET",
        headers: getAppleMusicHeader()
    });

    console.log(getPlaylistsRes);
    const getPlaylistsData = await getPlaylistsRes.json();

    return getPlaylistsData.items;
}