import { auth } from "@clerk/nextjs/server";
import { createClient as createLibsqlClient } from "@libsql/client";
import { createClient as createTursoClient } from "@tursodatabase/api";
import md5 from "md5";
import { redirect } from "next/navigation";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "@/db/schema";

const turso = createTursoClient({
    token: process.env.TURSO_API_TOKEN!,
    org: process.env.TURSO_ORG!,
});

export async function checkDatabaseExists(): Promise<boolean> {
    const dbName = await getDatabaseName();

    if (!dbName) return false;

    try {
        await turso.databases.get(dbName);
        return true;
    } catch (error) {
        console.error("Error checking database existence:", error);
        return false;
    }
}

export async function getDatabaseClient() {
    const url = await getLibsqlUrl();

    if (!url) {
        console.error("Failed to create database client: URL is null.");
        return redirect("/welcome");
    }

    try {
        const client = createLibsqlClient({
            url,
            authToken: process.env.TURSO_GROUP_AUTH_TOKEN,
        });

        return drizzle(client, { schema });
    } catch (error) {
        console.error("Failed to create database client:", error);
        return null;
    }
}

export async function getDatabaseName(): Promise<string | null> {
    const authObj = await auth();
    const userId = authObj.userId;
    return userId ? md5(userId) : null;
}

function getDatabaseUrl(dbName: string | null): string | null {
    return dbName ? `${dbName}-${process.env.TURSO_ORG}.turso.io` : null;
}

async function getLibsqlUrl(): Promise<string | null> {
    const dbName = await getDatabaseName();
    const url = getDatabaseUrl(dbName);
    console.log({ url });
    return url ? `libsql://${url}` : null;
}

export async function getDumpUrl(): Promise<string | null> {
    const dbName = await getDatabaseName();
    const url = getDatabaseUrl(dbName);
    return url ? `https://${url}/dump` : null;
}