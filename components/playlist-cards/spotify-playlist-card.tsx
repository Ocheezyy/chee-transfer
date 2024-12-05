import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Music } from "lucide-react";
import SpotifyIcon from "@/components/svgs/SpotifyIcon";

export default function SpotifyPlaylistCard({ playlist }: SpotifyPlaylistCardProps) {
    return (
        <Card key={playlist.id}
              className="overflow-hidden bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
            <div className="relative aspect-square">
                {playlist.images && playlist.images[0] ? (
                    <Image
                        src={playlist.images[0].url}
                        alt={playlist.name}
                        layout="fill"
                        objectFit="cover"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-700">
                        <Music className="w-1/3 h-1/3 text-gray-400"/>
                    </div>
                )}
            </div>
            <div className="p-4 flex items-center justify-between">
                <div className="flex-grow overflow-hidden">
                    <h2 className="font-semibold text-lg truncate">{playlist.name}</h2>
                    <p className="text-sm text-gray-400 truncate">{playlist.tracks.total} tracks</p>
                </div>
                <SpotifyIcon className="w-6 h-6 text-[#1DB954] flex-shrink-0 ml-2"/>
            </div>
        </Card>
    );
}