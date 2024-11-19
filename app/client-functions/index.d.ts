type AccountProvider = "oauth_spotify" | "oauth_apple";

type Playlist = {
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