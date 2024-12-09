let instance: any;

export async function configure(musicKit: any) {
    instance = musicKit;
    instance.configure({
        developerToken: "eyJhbGciOiJFUzI1NiIsImtpZCI6IlhTQTc4UzJUSzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJLNlpFWEw4RFZTIiwiZXhwIjoxNzMzNzQxNjIzLCJpYXQiOjE3MzM2OTg0MjN9.Dw2lUt2Et89CFUg58_tsphRCPw6IIOOF7PTmYq9rSmlAV6dhXace_mnf4ECuu2mhqdEBNVFil_8Laa9_fCKhqQ",
        app: {
            name: "Playlist Porter",
            build: "1978.4.1",
        },
    });
}

export function getMusicInstance() {
    return instance.getInstance();
}

export function isLoggedIn() {
    try {
        return getMusicInstance().isAuthorized;
    }
    catch (error) {
        console.log("apple-music-auth isLoggedIn", error);
        return false;
    }
}

export function logIn() {
    return getMusicInstance().authorize();
}

export function logOut() {
    return getMusicInstance().unauthorize();
}

export function getAppleMusicHeader() {
    return {
        Authorization: `Bearer ${getMusicInstance().developerToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        "Music-User-Token": getMusicInstance().musicUserToken
    };
}

export async function getPlaylists() {
    const getPlaylistsRes = await fetch("https://api.music.apple.com/v1/me/library/playlists", {
        method: "GET",
        headers: getAppleMusicHeader()
    });

    console.log(getPlaylistsRes);
    const getPlaylistsData = await getPlaylistsRes.json();

    return getPlaylistsData.items;
}