import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Target, Zap } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Star,
      title: "Review Generation",
      description: "Build trust and credibility with authentic positive reviews that attract more customers to your business.",
      features: ["Automated requests", "Multi-platform support", "Review monitoring"],
    },
    {
      icon: TrendingUp,
      title: "Local SEO",
      description: "Dominate local search results and get found by customers actively searching for your services.",
      features: ["Google Business optimization", "Citation building", "Local keyword targeting"],
    },
    {
      icon: Target,
      title: "PPC Campaigns",
      description: "Drive qualified traffic with targeted advertising campaigns that deliver measurable ROI.",
      features: ["Google Ads management", "Facebook & Instagram ads", "Conversion optimization"],
    },
    {
      icon: Zap,
      title: "White Label Solutions",
      description: "Scale your agency with our white-label services and offer premium solutions under your brand.",
      features: ["Full branding control", "Dedicated support", "Flexible pricing"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From Reviews to Leads, Get Everything <span className="text-primary">"More"</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all group">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
