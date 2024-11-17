import { User } from "@clerk/nextjs/server";
import { getUserObject } from "@/app/client-functions/get-user-object";

type AccountProvider = "spotify" | "apple";



export const checkExternalAccount = async (userObj: User, provider: AccountProvider) => {
    const user = await getUserObject();
    if (user === null) return null;
    const spotifyAcc = userObj.externalAccounts.find(acc => acc.provider === provider);
    if (!spotifyAcc) return false;
    return true;
};