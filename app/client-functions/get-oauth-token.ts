import { auth, clerkClient } from "@clerk/nextjs/server";

const getOauthToken = async (provider: AccountProvider): Promise<string | null> => {
    const { userId } = await auth();
    if (!userId) return null;

    const client = await clerkClient();
    let clerkResponse;
    try {
        clerkResponse = await client.users.getUserOauthAccessToken(
            userId,
            provider
        );
    } catch (err) {
        console.log("getOauthToken", err);

    }


    console.log(clerkResponse?.data);

    const accessToken = clerkResponse?.data?.[0]?.token;
    if (!accessToken) return null;
    return accessToken;
};

export default getOauthToken;