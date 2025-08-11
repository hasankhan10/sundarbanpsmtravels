import Community from "@/components/community";
import Experiences from "@/components/experiences";
import FeaturedDestinations from "@/components/featured-destinations";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";
import MotionDiv from "@/components/ui/motion-div";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={variants}
        >
          <FeaturedDestinations />
        </MotionDiv>
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={variants}
        >
          <Experiences />
        </MotionDiv>
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={variants}
        >
          <WhyChooseUs />
        </MotionDiv>
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={variants}
        >
          <Testimonials />
        </MotionDiv>
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={variants}
        >
          <Community />
        </MotionDiv>
      </main>
      <Footer />
    </div>
  );
}
