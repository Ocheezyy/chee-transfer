import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    // Get the current user ID using Clerk's auth object
    const { userId } = await auth();

    // Check if the user is authenticated
    if (!userId) {
        return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    try {
        // Use the correct provider ID
        const provider = "oauth_spotify"; // Make sure this matches your Clerk configuration

        // Call the Clerk API to get the user's OAuth access tokens
        const client = await clerkClient();
        const clerkResponse = await client.users.getUserOauthAccessToken(
            userId,
            provider
        );

        // Log the Clerk response to debug
        console.log("Clerk Response:", clerkResponse);

        // Extract token from the response
        const accessToken = clerkResponse.data[0]?.token; // Use .data as shown in the logs

        // Check if the accessToken is undefined
        if (!accessToken) {
            return NextResponse.json(
                { message: "Access token is undefined" },
                { status: 500 }
            );
        }

        // Fetch the user data from the Spotify API
        const spotifyUrl = "https://api.spotify.com/v1/me";

        // Call the Spotify API with the access token
        const spotifyResponse = await fetch(spotifyUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });

        // Log the Spotify response status to debug
        console.log("Spotify Response Status:", spotifyResponse.status);

        // Handle the response from the Spotify API
        if (!spotifyResponse.ok) {
            const errorData = await spotifyResponse.json();
            console.error("Spotify API Error:", errorData);
            return NextResponse.json(
                { message: "Failed to fetch Spotify data", error: errorData },
                { status: spotifyResponse.status }
            );
        }

        const spotifyData = await spotifyResponse.json();

        // Log the Spotify data to debug
        console.log("Spotify Data:", spotifyData);

        // Return the Spotify data in the response
        return NextResponse.json({ message: spotifyData });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        // Catch and handle any errors during the API request
        console.error("Error fetching Spotify data:", error);
        return NextResponse.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
}