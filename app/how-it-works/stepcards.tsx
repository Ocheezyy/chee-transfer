import { ReactElement } from "react";
import { Laptop, Lock, Server } from "lucide-react";

export type StepCardProps = {
    icon: ReactElement;
    title: string;
    description: string;
}


export const stepCards: StepCardProps[] = [
    {
        icon: <Laptop className="h-12 w-12 text-purple-500"/>,
        title: "Local Processing",
        description: "Your music transfer happens entirely on your device. No uploading required, ensuring speed and privacy."
    },
    {
        icon: <Lock className="h-12 w-12 text-purple-500"/>,
        title: "Secure Transfer",
        description: "Your data never leaves your device. We use state-of-the-art encryption to keep your music information safe."
    },
    {
        icon: <Server className="h-12 w-12 text-purple-500"/>,
        title: "Progress Tracking",
        description: "We only store your transfer progress on our servers, allowing you to pause and resume transfers at any time."
    }
]