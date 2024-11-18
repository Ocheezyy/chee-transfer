"use client";

import { ReactElement } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useClerk } from "@clerk/nextjs";

type AccountCardProps = {
    title: string;
    icon: ReactElement;
    description: string;
    buttonText: string;
    linked: boolean;
};

export function AccountCard({ title, icon, description, buttonText, linked }: AccountCardProps) {
    const { openUserProfile } = useClerk();

    const buttonClasses = linked ?
        "w-full bg-pink-600 hover:bg-pink-700 text-white" : "w-full bg-red-600 hover:bg-red-700 text-white";

    return (
        <Card className="flex flex-col h-full bg-gray-700 border-gray-600">
            <CardHeader>
                <div className="flex items-center space-x-2">
                    {icon}
                    <CardTitle className="text-gray-100">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription className="mb-4 text-gray-300">{description}</CardDescription>
                <Button className={buttonClasses} onClick={() => openUserProfile()}>
                    {buttonText}
                    <ArrowRight className="ml-2 h-4 w-4"/>
                </Button>
            </CardContent>
        </Card>
    );
}