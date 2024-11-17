import { auth, clerkClient, User } from "@clerk/nextjs/server";

export const getUserObject = async (): Promise<User | null> => {
    const { userId } = await auth();
    if (!userId) return null;
    const client = await clerkClient();
    return await client.users.getUser(userId);
};