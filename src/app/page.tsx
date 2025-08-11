import AiDestinationFinder from "@/components/ai-destination-finder";
import Experiences from "@/components/experiences";
import FeaturedDestinations from "@/components/featured-destinations";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedDestinations />
        <Experiences />
        <AiDestinationFinder />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
