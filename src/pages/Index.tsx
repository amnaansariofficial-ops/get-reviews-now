import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>GetReviews - Boost Your Online Reputation & Drive More Traffic</title>
        <meta 
          name="description" 
          content="Transform your online presence with authentic reviews, local SEO, and targeted campaigns. Get more customers and scale your business with our proven digital marketing solutions." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <ServicesSection />
          <TestimonialsSection />
          <PricingSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
