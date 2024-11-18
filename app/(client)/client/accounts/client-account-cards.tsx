import { AccountCard } from "./account-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import { getUserObject } from "@/app/client-functions/get-user-object";
import { checkExternalAccount } from "@/app/client-functions/check-external-account";


const ClientAccountCards = async () => {
    const userObj = await getUserObject();
    const spotifyAccount = await checkExternalAccount(userObj, "oauth_spotify");
    const appleAccount = await checkExternalAccount(userObj, "oauth_apple");
    const spotifyAccountExists = spotifyAccount && spotifyAccount.externalId !== "";
    const appleAccountExists = appleAccount && appleAccount.externalId !== "";

    const spotifyButtonText = !spotifyAccountExists ? "Connect Spotify" : "Remove";
    const spotifyDescription = !spotifyAccountExists ? "Connect your Spotify account to transfer playlists and liked songs." : spotifyAccount.emailAddress;

    const appleButtonText = !appleAccountExists ? "Connect Apple" : "Remove";
    const appleDescription = !appleAccountExists ? "Link your Apple Music account to sync your library and playlists." : appleAccount.emailAddress;
    
    return (
        <main className="flex-1 p-8">
            <SignedIn>
                <Card
                    className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-gray-800 border-gray-700">
                    <CardHeader className="bg-gradient-to-r from-pink-600 to-purple-700 text-white p-6">
                        <CardTitle className="text-2xl font-bold">Connect Your Music Accounts</CardTitle>
                        <CardDescription className="text-pink-100">
                            Start transferring your music by connecting your Spotify and Apple Music accounts.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <AccountCard
                                title="Spotify"
                                icon={<Image src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
                                             height={50} width={50} className="h-8 w-8 text-green-400"
                                             alt="spotify logo"/>}
                                description={spotifyDescription}
                                buttonText={spotifyButtonText}
                                linked={spotifyAccount !== null}
                            />
                            <AccountCard
                                title="Apple Music"
                                icon={<Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                    height={50} width={50} className="h-8 w-8 text-gray-300" alt="apple logo"/>}
                                description={appleDescription}
                                buttonText={appleButtonText}
                                linked={appleAccount !== null}
                            />
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-sm text-gray-400 mb-4">
                                Don&#39;t have an account with these services?
                                Check out our supported platforms to see what other options are available.
                            </p>
                            <Button variant="outline" className="mt-2 text-gray-200 border-gray-600 hover:bg-gray-700">
                                View Supported Platforms
                                <ArrowRight className="ml-2 h-4 w-4"/>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </SignedIn>
        </main>
    );
};

export default ClientAccountCards;