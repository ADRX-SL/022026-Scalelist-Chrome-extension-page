import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Accuracy from "@/components/Accuracy";
import BenchmarkVideo from "@/components/BenchmarkVideo";
import Testimonial from "@/components/Testimonial";
import WeeklyData from "@/components/WeeklyData";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="flex min-h-screen flex-col gap-16 bg-background">
      <Hero />
      <Features />
      <Accuracy />
      <BenchmarkVideo />
      <Testimonial />
      <WeeklyData />
      <FAQ />
      <FooterCTA />
      <Footer />
    </main>
  );
};

export default Index;
