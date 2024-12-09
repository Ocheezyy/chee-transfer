import MusicKitInstance = MusicKit.MusicKitInstance;

type AccountProvider = "oauth_spotify" | "oauth_apple";

interface Playlists {
    spotify: SpotifyPlaylist[];
    apple: ApplePlaylist[];
}

type Platform = "spotify" | "apple" | string;

type SpotifyPlaylist = {
    collaborative: boolean;
    description: string;
    external_urls: { spotify: string; }
    href: string;
    id: string;
    images: Array<{
        height: number;
        url: string;
        width: number;
    }>
    name: string;
    owner: {
        display_name: string;
        external_urls: { spotify: string };
        href: string;
        id: string;
        type: string;
        uri: string;
    }
    primary_color: string | null;
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number;
    }
    type: "playlist";
    uri: string;
};

type ApplePlaylist = {
    id: string;
};

interface PlaylistsProps {
    initialPlaylists: Playlists | null;
}

interface SpotifyPlaylistCardProps {
    playlist: SpotifyPlaylist;
}

interface ApplePlaylistCardProps {
    playlist: ApplePlaylist;
}

interface AppleMusicHeader {
    Authorization: string;
    Accept: string;
    "Content-Type": string;
    "Music-User-Token": string;
}


interface AppleContextProps {
    musicKitLoaded: boolean;
    appleLogin: () => Promise<void>;
    isLoggedIn: () => boolean;
    getMusicInstance: () => MusicKitInstance | undefined;
    getAppleMusicHeader: () => AppleMusicHeader;
    getPlaylists: () => Promise<any>;
}