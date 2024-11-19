import { auth, clerkClient } from "@clerk/nextjs/server";

const getOauthToken = async (provider: AccountProvider): Promise<string | null> => {
    const { userId } = await auth();
    if (!userId) return null;

    const client = await clerkClient();
    const clerkResponse = await client.users.getUserOauthAccessToken(
        userId,
        provider
    );

    const accessToken = clerkResponse.data[0]?.token;
    if (!accessToken) return null;
    return accessToken;
};

export default getOauthToken;