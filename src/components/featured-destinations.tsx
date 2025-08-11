import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const destinations = [
  {
    name: 'Santorini, Greece',
    price: 890,
    rating: 5.0,
    image: 'https://placehold.co/400x500.png',
    hint: 'santorini greece'
  },
  {
    name: 'Dubai, UAE',
    price: 890,
    rating: 5.0,
    image: 'https://placehold.co/400x500.png',
    hint: 'dubai city'
  },
  {
    name: 'Kyoto, Japan',
    price: 890,
    rating: 5.0,
    image: 'https://placehold.co/400x500.png',
    hint: 'kyoto shrine'
  },
  {
    name: 'Paris, France',
    price: 890,
    rating: 5.0,
    image: 'https://placehold.co/400x500.png',
    hint: 'paris eiffel'
  },
];

export default function FeaturedDestinations() {
  return (
    <section id="destinations" className="w-full py-20 lg:py-28 bg-secondary/30">
       <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Popular Destinations
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl group relative shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={400}
                  height={500}
                  data-ai-hint={dest.hint}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4 bg-card">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{dest.name}</h3>
                      <p className="text-primary font-semibold">${dest.price} <span className="text-muted-foreground font-normal">Starting</span></p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold">{dest.rating}</span>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-2">Booking Trip</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
