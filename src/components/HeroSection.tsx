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
      delay: 0,
    },
    {
      name: "James C. Heffron",
      rating: 5,
      text: "Thank you for testing my house for mold. My house was found to be infested with mold based...",
      verified: true,
      delay: 1,
    },
    {
      name: "Angie Mcfarland",
      rating: 5,
      text: "They tested my house for mold because I could smell some foul smells. They did an...",
      verified: true,
      delay: 2,
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-12 pt-8">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-10">
                Get More <br />
                <span className="text-primary">Web Traffic</span>
              </h1>
              
              <div className="space-y-5 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full border-[2.5px] border-gray-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gray-700" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-gray-700 font-normal">Get Positive Reviews</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full border-[2.5px] border-gray-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gray-700" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-gray-700 font-normal">Boost Local Ranking</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full border-[2.5px] border-gray-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gray-700" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-gray-700 font-normal">Targeted Ad Campaigns</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full border-[2.5px] border-gray-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gray-700" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-gray-700 font-normal">Scale Beyond Limits</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-bold text-xl px-12 py-7 rounded-none shadow-none hover:shadow-lg transition-all h-auto"
            >
              Start Your Free Trial
            </Button>
          </div>

          {/* Right Content - Floating Review Cards */}
          <div className="relative h-[750px] hidden lg:block">
            <div className="absolute top-0 right-0 w-[420px] animate-float">
              <ReviewCard {...reviews[0]} />
            </div>
            <div className="absolute top-[260px] right-20 w-[420px] animate-float-delayed" style={{ animationDelay: '0.5s' }}>
              <ReviewCard {...reviews[1]} />
            </div>
            <div className="absolute top-[520px] right-0 w-[420px] animate-float" style={{ animationDelay: '1s' }}>
              <ReviewCard {...reviews[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
