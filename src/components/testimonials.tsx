import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Emily Carter',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman portrait',
    initials: 'EC',
    review: "The most seamless and luxurious travel experience of my life. Every detail was perfect!",
  },
  {
    name: 'Michael Chen',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'man portrait',
    initials: 'MC',
    review: "Elite Escapes turned our dream vacation into a reality. Their recommendations were spot-on.",
  },
  {
    name: 'Sophia Rodriguez',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman smiling',
    initials: 'SR',
    review: "Unparalleled service and access to exclusive locations. I wouldn't trust my travels to anyone else.",
  },
  {
    name: 'David Lee',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'man profile',
    initials: 'DL',
    review: "From the planning stages to the trip itself, everything was handled with utmost professionalism.",
  },
];

const StarRating = ({ rating = 5 }) => (
  <div className="flex gap-1 text-secondary">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-current" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="about-us" className="w-full py-20 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-primary md:text-5xl">
            Raving Reviews
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Hear from our clients who have experienced the world with us.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col justify-between p-6 bg-card shadow-lg border-transparent hover:border-secondary/30 transition-colors duration-300">
                    <CardContent className="p-0 flex flex-col items-center text-center space-y-4">
                      <Avatar className="w-20 h-20 border-4 border-secondary/50">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <blockquote className="text-lg font-medium text-foreground">
                        “{testimonial.review}”
                      </blockquote>
                       <div className="pt-2 space-y-1">
                        <StarRating />
                        <p className="text-base font-bold text-primary">{testimonial.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
