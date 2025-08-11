import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/50 z-0" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Exotic destination background"
        data-ai-hint="exotic destination"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <h1 className="text-4xl font-headline font-bold drop-shadow-2xl md:text-6xl lg:text-7xl">
            Discover the World's Most Luxurious Adventures
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
            Curated journeys, seamless bookings, and unforgettable experiences—crafted for the discerning traveler.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg transition-transform hover:scale-105">
              <Link href="#book">Start Your Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white transition-colors">
              <Link href="#destinations">Explore Destinations</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
