import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";


export const playlists = sqliteTable("playlists", {
    id: integer("id", {
        mode: "number"
    }).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    platform: text("platform", { enum: ["apple", "spotify", "youtube"] }).notNull(),
    extPlaylistId: text("extPlaylistId").notNull(),
    songCount: integer("songCount").notNull(),
});

export const playlistTransfers = sqliteTable("playlistTransfers", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    playlistId: integer("playlistId").references(() => playlists.id),
    transferType: text("transferType", { enum: ["full", "update"] }).default("full").notNull(),
    from: text("from", { enum: ["spotify", "apple", "youtube"] }).notNull(),
    to: text("to", { enum: ["spotify", "apple", "youtube"] }).notNull(),
    status: text("status", { enum: ["draft", "in_progress", "completed"] }).notNull(),
    completedAt: integer("completedAt", { mode: "timestamp_ms" }),
    createdAt: integer("createdAt", { mode: "timestamp_ms" }).default(sql`now()`).notNull(),
});

export const songs = sqliteTable("songs", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    isrc: text("isrc").notNull(),
    status: text("status", { enum: ["success", "conflict", "failed"] }),
    createdAt: integer("createdAt", { mode: "timestamp_ms" }).default(sql`now()`).notNull(),
});