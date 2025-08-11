
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from './ui/button';


const StarRating = ({ rating = 5 }) => (
  <div className="flex gap-0.5 text-yellow-400">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`} />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="about-us" className="w-full py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-[500px] h-[600px]">
                <Image 
                    src="https://placehold.co/500x600.png"
                    data-ai-hint="happy traveler"
                    alt="Happy client"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div>
                 <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                    What our client say about us
                </h2>
                <Card className="shadow-lg relative">
                    <CardContent className="p-8">
                        <p className="text-lg text-muted-foreground italic">
                        A fantastic experience from start to finish! The team made our trip effortless and memorable with their excellent service and attention to detail. Highly recommend for hassle-free travel planning!
                        </p>
                        <div className='mt-6'>
                            <p className='font-semibold'>Mohammad Madhu</p>
                            <p className='text-sm text-muted-foreground'>CEO of MSY-Tech</p>
                        </div>
                        <div className="mt-4">
                            <StarRating rating={5}/>
                        </div>
                    </CardContent>
                </Card>
                <div className="flex gap-4 mt-8">
                    <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                        <ChevronLeft />
                    </Button>
                    <Button size="icon" className="rounded-full h-12 w-12">
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
