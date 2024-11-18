import { User } from "@clerk/nextjs/server";

export const checkExternalAccount = async (userObj: User | null, provider: AccountProvider) => {
    if (userObj === null) return null;
    const externalAccount = userObj.externalAccounts.find(acc => acc.provider === provider);
    if (!externalAccount) return false;
    return externalAccount;
};