import Footer from "@/components/footer";
import Header from "@/components/header";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
