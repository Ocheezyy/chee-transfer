import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Repeat, Shield, ArrowRight, Laptop } from 'lucide-react'
import { ReactElement } from "react"
import { SignedIn, SignedOut, } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-gray-950 text-gray-100">
        <main className="flex-grow pt-16 pb-16">
          <section className="py-20 relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-50"></div>
            <div className="container mx-auto px-4 relative">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse">
                  Shift Your Music Universe
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Seamlessly transfer your playlists between Spotify, Apple Music, and more. Your music, your way.
                </p>
                <SignedIn>
                  <Link href="/client">
                    <Button size="lg"
                            className="bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300 shadow-lg shadow-pink-500/50">
                      Start Your Music Journey <ArrowRight className="ml-2 h-5 w-5"/>
                    </Button>
                  </Link>
                </SignedIn>
                <SignedOut>
                  <Link href="/auth/sign-in">
                    <Button size="lg"
                            className="bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300 shadow-lg shadow-pink-500/50">
                      Start Your Music Journey <ArrowRight className="ml-2 h-5 w-5"/>
                    </Button>
                  </Link>
                </SignedOut>

              </div>
            </div>
          </section>

          <section className="py-20 bg-parent">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Why CheeTransfer?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featureCards.map((card, index) => (
                    <FeatureCard key={`feature-card-${index}`} icon={card.icon} title={card.title}
                                 description={card.description}/>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-parent">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Ready to Revolutionize Your Music Experience?
              </h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Join thousands of music lovers who have already shifted their tunes. Your playlist transfer is just a
                few clicks away.
              </p>
              <SignedIn>
                <Link href="/client">
                  <Button size="lg"
                          className="bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300 shadow-lg shadow-pink-500/50">
                    Get Started Now <ArrowRight className="ml-2 h-5 w-5"/>
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <Link href="/auth/sign-in">
                  <Button size="lg"
                          className="bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300 shadow-lg shadow-pink-500/50">
                    Get Started Now <ArrowRight className="ml-2 h-5 w-5"/>
                  </Button>
                </Link>
              </SignedOut>
            </div>
          </section>
        </main>

        <footer className="bg-gray-950 py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2024 CheeTransfer. All rights reserved. Keep the music flowing.</p>
          </div>
        </footer>
      </div>
  )
}

const featureCards = [
  {
    icon: <Laptop className="h-12 w-12 text-pink-500"/>,
    title: "On Device",
    description: "Transfer your entire music library using only your device, no servers"
  },
  {
    icon: <Repeat className="h-12 w-12 text-pink-500" />,
    title: "Completely Free",
    description: "Due to the transfer being run on your device, there's no cost to us, meaning no cost to you."
  },
  {
    icon: <Shield className="h-12 w-12 text-pink-500" />,
    title: "Fort Knox Security",
    description: "Bank-level encryption keeps your data safe. Your music stays yours, always."
  }
]

type FeatureCardProps = {
  icon: ReactElement;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
      <Card className="bg-gray-900 border-pink-500/50 hover:border-pink-500 transition-colors duration-300 group">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-pink-500 group-hover:text-pink-400 transition-colors duration-300">
            {icon}
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{description}</CardDescription>
        </CardContent>
      </Card>
  )
}