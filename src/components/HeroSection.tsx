import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { ReviewCard } from "./ReviewCard";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Outstanding service! They helped us increase our online visibility dramatically. Highly recommend!",
      verified: true,
      delay: 0,
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "The team delivered exactly what they promised. Our review count has tripled in just two months.",
      verified: true,
      delay: 1,
    },
    {
      name: "Emma Williams",
      rating: 5,
      text: "Professional, responsive, and results-driven. Best investment we've made for our business growth.",
      verified: true,
      delay: 2,
    },
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Get More{" "}
                <span className="text-primary">Web Traffic</span>
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">Get Positive Reviews</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">Boost Local Ranking</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">Targeted Ad Campaigns</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">Scale Beyond Limits</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Free Trial
            </Button>
          </div>

          {/* Right Content - Floating Review Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                {...review}
                className={`absolute ${
                  index === 0
                    ? "top-0 right-0 animate-float"
                    : index === 1
                    ? "top-1/3 right-12 animate-float-delayed"
                    : "top-2/3 right-0 animate-float"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
