import GetSpotifyPlaylists from "../spotify/get-playlists";
// import GetApplePlaylists from "../apple/get-playlists";
import { User } from "@clerk/nextjs/server";
import getOauthToken from "@/app/client-functions/get-oauth-token";

export default async function getPlaylists(userObj: User | null): Promise<Playlists | null> {
    if (userObj === null) return null;
    // console.log(userObj.externalAccounts);

    const spotifyAccessToken = await getOauthToken("oauth_spotify");
    // const appleAccessToken = await getOauthToken("oauth_apple");
    const spotifyPlaylists = await GetSpotifyPlaylists(spotifyAccessToken);
    // const applePlaylists = await GetApplePlaylists(appleAccessToken);

    return {
        spotify: spotifyPlaylists || [],
        apple: [],
    };
}