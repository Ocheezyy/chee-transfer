import { Card } from "@/components/ui/card";
import { getUserObject } from "@/app/client-functions/get-user-object";
import { checkExternalAccount } from "@/app/client-functions/check-external-account";
import NoConnections from "@/app/(client)/client/no-connections";


export default async function AppHome() {
    const userObj = await getUserObject();
    const spotifyAccount = await checkExternalAccount(userObj, "oauth_spotify");
    const appleAccount = await checkExternalAccount(userObj, "oauth_apple");

    if (spotifyAccount === null && appleAccount === null) {
        return <NoConnections />;
    }

    return (
        <main className="flex-1 p-8">
            <Card
                className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-gray-800 border-gray-700">
            </Card>
        </main>
    );
}
