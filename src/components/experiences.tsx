import { Plane, Ticket, Briefcase, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: <Plane className="w-8 h-8 text-primary" />,
    title: "Custom Trip Planning",
    description: "Personalized itineraries designed to match your unique travel dreams.",
  },
  {
    icon: <Ticket className="w-8 h-8 text-primary" />,
    title: "Hassle-Free Ticketing",
    description: "We handle all the booking complexities so you don't have to.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Luxury Tour Packages",
    description: "Indulge in curated luxury experiences for ultimate comfort and style.",
  },
  {
    icon: <Phone className="w-8 h-8 text-primary" />,
    title: "24/7 Travel Support",
    description: "Our team is always available to assist you during your travels.",
  },
];

export default function Experiences() {
  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-card shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out border-transparent p-6">
              <CardContent className="flex flex-col items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
