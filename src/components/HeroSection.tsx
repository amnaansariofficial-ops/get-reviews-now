import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ReviewCard } from "./ReviewCard";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const reviews = [
    {
      name: "James C. Heffron",
      rating: 5,
      text: "Thank you for testing my house for mold. My house was found to be infested with mold based...",
      verified: true,
      delay: 0,
    },
    {
      name: "Angie Mcfarland",
      rating: 5,
      text: "They tested my house for mold because I could smell some foul smells. They did an...",
      verified: true,
      delay: 1,
    },
    {
      name: "Robert Smith",
      rating: 5,
      text: "I hired the company to do the work to my satisfaction rather than trying...",
      verified: true,
      delay: 2,
    },
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                Get More <br />
                <span className="text-primary">Web Traffic</span>
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-foreground" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-foreground">Get Positive Reviews</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-foreground" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-foreground">Boost Local Ranking</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-foreground" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-foreground">Targeted Ad Campaigns</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-foreground" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-foreground">Scale Beyond Limits</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-md shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Free Trial
            </Button>
          </div>

          {/* Right Content - Floating Review Cards */}
          <div className="relative h-[700px] hidden lg:block">
            <div className="absolute top-0 right-0 w-[380px] animate-float">
              <ReviewCard {...reviews[2]} />
            </div>
            <div className="absolute top-[280px] right-16 w-[380px] animate-float-delayed">
              <ReviewCard {...reviews[0]} />
            </div>
            <div className="absolute top-[560px] right-0 w-[380px] animate-float">
              <ReviewCard {...reviews[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
