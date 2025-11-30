import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ReviewCard } from "./ReviewCard";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const reviews = [
    {
      name: "Robert Smith",
      rating: 5,
      text: "I hired the company to do the work to my satisfaction rather than trying...",
      verified: true,
    },
    {
      name: "James C. Heffron",
      rating: 5,
      text: "Thank you for testing my house for mold. My house was found to be infested with mold based...",
      verified: true,
    },
    {
      name: "Angie Mcfarland",
      rating: 5,
      text: "They tested my house for mold because I could smell some foul smells. They did an...",
      verified: true,
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#F5F5F5]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 pt-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-black leading-[1.1] mb-8">
                Get More <br />
                <span className="text-primary">Web Traffic</span>
              </h1>
              
              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-foreground" strokeWidth={3} />
                  </div>
                  <p className="text-base text-foreground">Get Positive Reviews</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-foreground" strokeWidth={3} />
                  </div>
                  <p className="text-base text-foreground">Boost Local Ranking</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-foreground" strokeWidth={3} />
                  </div>
                  <p className="text-base text-foreground">Targeted Ad Campaigns</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-foreground" strokeWidth={3} />
                  </div>
                  <p className="text-base text-foreground">Scale Beyond Limits</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-6 rounded-none h-auto"
            >
              Start Your Free Trial
            </Button>
          </div>

          {/* Right Content - Background Shape & Floating Review Cards */}
          <div className="relative h-[700px] hidden lg:block">
            {/* Curved Background Shape */}
            <div 
              className="absolute -right-32 top-0 w-[800px] h-full bg-gray-300/40 rounded-l-full"
              style={{ clipPath: "ellipse(70% 100% at 100% 50%)" }}
            />
            
            {/* Background Image */}
            <div 
              className="absolute right-0 top-0 w-[600px] h-full bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${heroBg})` }}
            />
            
            {/* Floating Review Cards */}
            <div className="absolute top-0 -left-12 w-[380px] animate-float z-10">
              <ReviewCard {...reviews[0]} />
            </div>
            <div className="absolute top-[240px] left-16 w-[380px] animate-float-delayed z-10">
              <ReviewCard {...reviews[1]} />
            </div>
            <div className="absolute bottom-8 -left-12 w-[380px] animate-float z-10" style={{ animationDelay: '1s' }}>
              <ReviewCard {...reviews[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
