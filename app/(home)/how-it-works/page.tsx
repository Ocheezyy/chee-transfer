import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react';
import { stepCards, StepCardProps } from "./stepcards";
import { transferSteps, TransferStepProps } from "./transfersteps";


export default function HowItWorksPage() {

    return (
        <main className="flex-grow pt-16">
            <section className="py-20 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 opacity-50"></div>
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                            How CheeTransfer Works
                        </h1>
                        <p className="text-xl mb-8 text-gray-300">
                            Seamless, secure, and lightning-fast music transfers, right on your device.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stepCards.map((card, count) => {
                            return <StepCard
                                key={`step-card-${count}`}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />

                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                        The Transfer Process
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <ol className="relative border-l border-gray-700">
                            {transferSteps.map((step, count) => {
                                return <TransferStep
                                    key={`transfer-step-${count}`}
                                    number={count+1}
                                    title={step.title}
                                    description={step.description} />
                            })}
                        </ol>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                        Ready to Shift Your Tunes?
                    </h2>
                    <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                        Experience the fastest, most secure way to transfer your music library between platforms.
                    </p>
                    <Button size="lg"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
                        Start Your Free Transfer <ArrowRight className="ml-2 h-5 w-5"/>
                    </Button>
                </div>
            </section>
        </main>
    );
}




function StepCard({ icon, title, description }: StepCardProps) {
    return (
        <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-colors">
            <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-purple-500">
                    {icon}
                    <span>{title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-300">{description}</p>
            </CardContent>
        </Card>
    )
}

function TransferStep({ number, title, description }: TransferStepProps) {
    return (
        <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-gray-900 bg-purple-500">
        {number}
      </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{title}</h3>
            <p className="mb-4 text-base font-normal text-gray-400">{description}</p>
        </li>
    )
}