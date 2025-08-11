
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why choose us?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience ultimate comfort in our Single Rooms, designed to offer tranquility.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Travel Plan</h3>
                  <p className="text-muted-foreground">Personalized itineraries designed to match your unique travel dreams.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Flight Booking</h3>
                  <p className="text-muted-foreground">Personalized itineraries designed to match your unique travel dreams.</p>
                </div>
              </li>
            </ul>
            <Button className="mt-8">Learn More</Button>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
            <Image
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1287"
              data-ai-hint="travel planning"
              alt="Why Choose Us Image"
              width={500}
              height={500}
              className="rounded-2xl object-contain absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
