import { Gem, Landmark, MountainSnow, Sofa } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const experiences = [
  {
    icon: <MountainSnow className="w-10 h-10 text-secondary" />,
    title: "Adventure",
    description: "Embark on thrilling escapades in the world's most dramatic landscapes.",
  },
  {
    icon: <Sofa className="w-10 h-10 text-secondary" />,
    title: "Relaxation",
    description: "Unwind and rejuvenate in serene paradises and tranquil retreats.",
  },
  {
    icon: <Gem className="w-10 h-10 text-secondary" />,
    title: "Luxury",
    description: "Indulge in unparalleled opulence and world-class service.",
  },
  {
    icon: <Landmark className="w-10 h-10 text-secondary" />,
    title: "Culture",
    description: "Immerse yourself in the rich tapestry of global history and art.",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="w-full py-20 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-primary md:text-5xl">
            Unforgettable Experiences
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Journeys tailored to every desire, crafted with impeccable detail.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="text-center bg-card shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out border-transparent hover:border-secondary/30">
              <CardHeader className="items-center">
                <div className="p-4 bg-secondary/10 rounded-full mb-4">
                  {exp.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{exp.title}</CardTitle>
                <CardDescription className="pt-2">{exp.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
