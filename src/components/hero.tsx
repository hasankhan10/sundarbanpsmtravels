
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Calendar, ChevronDown, MapPin, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-secondary/30 pt-12 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Let's Explore the world
          </h1>
          <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
            Discover the World with Ease! Your dream destinations and unforgettable experiences are just a click away.
          </p>
          <Card className="shadow-lg text-left">
            <CardContent className="p-4">
            <Tabs defaultValue="destination">
              <TabsList className="grid w-full grid-cols-3 bg-secondary">
                <TabsTrigger value="destination">Destination</TabsTrigger>
                <TabsTrigger value="flight">Flight</TabsTrigger>
                <TabsTrigger value="hotel">Hotel</TabsTrigger>
              </TabsList>
              <TabsContent value="destination" className="pt-6">
                <div className="grid sm:grid-cols-3 gap-4 items-end">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Location</label>
                        <div className="flex items-center gap-2 p-2 border rounded-md bg-background">
                            <MapPin className="w-5 h-5 text-muted-foreground" />
                            <Input placeholder="Lisbon, Portugal" className="border-0 p-0 h-auto focus-visible:ring-0"/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Date</label>
                         <div className="flex items-center gap-2 p-2 border rounded-md bg-background">
                            <Calendar className="w-5 h-5 text-muted-foreground" />
                            <Input placeholder="02-06-2025" className="border-0 p-0 h-auto focus-visible:ring-0"/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Price</label>
                        <div className="flex items-center gap-2 p-2 border rounded-md bg-background">
                             <span className="text-muted-foreground">$</span>
                            <Input placeholder="10,000 - 12,000" className="border-0 p-0 h-auto focus-visible:ring-0"/>
                        </div>
                    </div>
                </div>
                <Button className="w-full mt-6">Search Now</Button>
              </TabsContent>
            </Tabs>
            </CardContent>
          </Card>
        </div>
        <div className="relative h-full min-h-[400px] md:min-h-[500px] hidden lg:block">
            <div className="absolute top-0 left-1/4 w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-lg transform -rotate-6">
              <div className="relative w-full h-full">
                <Image src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1470" data-ai-hint="beach vacation" alt="Explore" layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="absolute top-1/4 -left-8 w-[450px] h-[300px] rounded-2xl overflow-hidden shadow-2xl z-10">
              <div className="relative w-full h-full">
                <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470" data-ai-hint="mountain adventure" alt="Explore" layout="fill" objectFit="cover" />
              </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-full">
                    <Avatar>
                        <AvatarImage src="https://randomuser.me/api/portraits/women/75.jpg" data-ai-hint="woman traveler"/>
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                     <Avatar className="-ml-4 border-2 border-white">
                        <AvatarImage src="https://randomuser.me/api/portraits/men/76.jpg" data-ai-hint="man explorer"/>
                        <AvatarFallback>B</AvatarFallback>
                    </Avatar>
                     <Avatar className="-ml-4 border-2 border-white">
                        <AvatarImage src="https://randomuser.me/api/portraits/women/76.jpg" data-ai-hint="tourist smiling"/>
                        <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-sm">Reviews</p>
                        <p className="text-xs">4.8 out of 5</p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[250px] rounded-2xl overflow-hidden shadow-lg transform rotate-3">
              <div className="relative w-full h-full">
                 <Image src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1470" data-ai-hint="cityscape europe" alt="Explore" layout="fill" objectFit="cover" />
              </div>
            </div>
             <div className="absolute bottom-0 left-1/2 w-[350px] h-[220px] rounded-2xl overflow-hidden shadow-lg transform -translate-x-1/2">
              <div className="relative w-full h-full">
                 <Image src="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?q=80&w=1352" data-ai-hint="tropical island" alt="Explore" layout="fill" objectFit="cover" />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}