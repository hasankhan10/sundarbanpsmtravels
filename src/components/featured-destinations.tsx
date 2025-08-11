
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import MotionDiv from './ui/motion-div';

const destinations = [
  {
    name: 'Santorini, Greece',
    price: 890,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470',
    hint: 'santorini greece'
  },
  {
    name: 'Dubai, UAE',
    price: 890,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1470',
    hint: 'dubai city'
  },
  {
    name: 'Kyoto, Japan',
    price: 890,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1470',
    hint: 'kyoto shrine'
  },
  {
    name: 'Paris, France',
    price: 890,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1470',
    hint: 'paris eiffel'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
            <MotionDiv
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={cardVariants}
            >
              <Card className="overflow-hidden rounded-2xl group relative shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
