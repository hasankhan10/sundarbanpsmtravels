import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const destinations = [
  {
    name: 'Santorini, Greece',
    description: 'Iconic sunsets and whitewashed villages.',
    image: 'https://placehold.co/800x1000.png',
    hint: 'greece island'
  },
  {
    name: 'Kyoto, Japan',
    description: 'Ancient temples and serene gardens.',
    image: 'https://placehold.co/800x600.png',
    hint: 'japan temple'
  },
  {
    name: 'Bora Bora, French Polynesia',
    description: 'Overwater bungalows on turquoise lagoons.',
    image: 'https://placehold.co/800x1200.png',
    hint: 'tropical island'
  },
  {
    name: 'Amalfi Coast, Italy',
    description: 'Dramatic cliffs and charming seaside towns.',
    image: 'https://placehold.co/800x800.png',
    hint: 'italy coast'
  },
  {
    name: 'Serengeti, Tanzania',
    description: 'The ultimate luxury safari adventure.',
    image: 'https://placehold.co/800x600.png',
    hint: 'safari wildlife'
  },
  {
    name: 'Paris, France',
    description: 'The timeless city of romance and art.',
    image: 'https://placehold.co/800x1000.png',
    hint: 'paris city'
  },
];

export default function FeaturedDestinations() {
  return (
    <section id="destinations" className="w-full py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10"></div>
       <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-primary md:text-5xl">
            Featured Destinations
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            A curated selection of the world's most breathtaking locales.
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {destinations.map((dest, index) => (
            <Card key={index} className="overflow-hidden break-inside-avoid group relative shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg">
              <CardContent className="p-0">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={800}
                  height={1000}
                  data-ai-hint={dest.hint}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-headline font-bold">{dest.name}</h3>
                  <p className="text-base text-white/90 mb-4">{dest.description}</p>
                  <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
