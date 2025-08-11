import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Community() {
    return (
        <section id="community" className="w-full py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
                    <div className="flex flex-col items-center text-center">
                         <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Join with our community
                        </h2>
                        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
                            Join our travel community and inspire your next adventure.
                        </p>
                        <Button size="lg" className="mt-8">Join Now</Button>
                    </div>
                    <div className="absolute -top-8 -left-8">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src="https://placehold.co/64x64.png" data-ai-hint="woman portrait"/>
                            <AvatarFallback>U1</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="absolute top-1/4 -right-4">
                        <Avatar className="w-12 h-12">
                            <AvatarImage src="https://placehold.co/48x48.png" data-ai-hint="man portrait"/>
                            <AvatarFallback>U2</AvatarFallback>
                        </Avatar>
                    </div>
                     <div className="absolute top-1/2 -left-12">
                        <Avatar className="w-20 h-20">
                            <AvatarImage src="https://placehold.co/80x80.png" data-ai-hint="man smiling"/>
                            <AvatarFallback>U3</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="absolute -bottom-8 left-1/4">
                        <Avatar className="w-14 h-14">
                            <AvatarImage src="https://placehold.co/56x56.png" data-ai-hint="woman smiling"/>
                            <AvatarFallback>U4</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="absolute -bottom-4 -right-4">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src="https://placehold.co/64x64.png" data-ai-hint="man profile"/>
                            <AvatarFallback>U5</AvatarFallback>
                        </Avatar>
                    </div>
                     <div className="absolute bottom-1/4 -left-2">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="person face"/>
                            <AvatarFallback>U6</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </section>
    )
}
