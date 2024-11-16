export type TransferStepProps = {
    number: number;
    title: string;
    description: string;
}

export const transferSteps: TransferStepProps[] = [
    {
        number: 1,
        title: "Connect Your Accounts",
        description: "Securely log in to your music streaming services. We use OAuth, so we never see your passwords."
    },
    {
        number: 2,
        title: "Select Your Music",
        description: "Choose the playlists, albums, or tracks you want to transfer. Our interface makes it easy to select multiple items."
    },
    {
        number: 3,
        title: "Start the Transfer",
        description: "Click 'Start Transfer' and watch the magic happen. All processing occurs on your device for maximum speed and privacy."
    },
    {
        number: 4,
        title: "Track Progress",
        description: "Monitor the transfer in real-time. You can pause and resume at any time, and we'll save your progress."
    },
    {
        number: 5,
        title: "Enjoy Your Music",
        description: "Once the transfer is complete, your music will be available on your destination platform. It's that simple!"
    }
]