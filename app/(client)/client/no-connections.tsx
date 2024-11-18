import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function NoConnections() {

    return (
        <main className="flex-1 p-8 overflow-auto">
            <Card
                className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20">
                <CardHeader className="relative p-6 text-center">
                    <CardTitle className="text-3xl font-bold text-white mb-2">Connect your accounts</CardTitle>
                    <CardDescription className="text-lg text-gray-200">
                        Link your music services to start transferring your playlists and tracks.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                    <Link href="/client/accounts">
                        <Button
                            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg font-semibold rounded-full transition-colors duration-300">
                            Connect them now
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </Button>
                    </Link>
                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-300 mb-4">
                            Don&#39;t see your preferred music service?
                            Check out our supported platforms to see what other options are available.
                        </p>
                        <Link href="/client/supported-platforms">
                            <Button variant="outline"
                                    className="mt-2 text-gray-200 border-gray-400 hover:bg-white hover:bg-opacity-10">
                                View Supported Platforms
                                <ArrowRight className="ml-2 h-4 w-4"/>
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}