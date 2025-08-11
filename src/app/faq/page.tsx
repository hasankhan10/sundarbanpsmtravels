import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/footer";
import Header from "@/components/header";

const faqs = [
    {
        question: "What is Traventure?",
        answer: "Traventure is a travel agency that specializes in creating custom travel experiences for discerning travelers. We handle everything from planning and booking to on-the-ground support."
    },
    {
        question: "How do I book a trip?",
        answer: "You can start by exploring our popular destinations or by contacting us with your travel ideas. Our team will then work with you to create a personalized itinerary and handle all the bookings."
    },
    {
        question: "Can I customize my trip?",
        answer: "Absolutely! We specialize in creating bespoke travel experiences. You can customize every aspect of your trip, from the destinations and activities to the accommodation and pace of travel."
    },
    {
        question: "What's included in the price?",
        answer: "The price typically includes accommodation, transportation, guided tours, and some meals. We provide a detailed breakdown of what's included in your personalized itinerary. International flights are usually not included unless specified."
    },
    {
        question: "Do you offer travel insurance?",
        answer: "While we do not sell travel insurance directly, we strongly recommend that all our clients purchase comprehensive travel insurance. We can recommend reputable providers."
    }
]

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                 <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Find answers to common questions about our services and booking process.
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                            {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
