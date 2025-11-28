import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "299",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 50 review requests/month",
        "Google Business optimization",
        "Basic analytics dashboard",
        "Email support",
        "1 location",
      ],
    },
    {
      name: "Professional",
      price: "599",
      description: "For growing businesses that need more",
      features: [
        "Up to 200 review requests/month",
        "Multi-platform review management",
        "Advanced analytics & reporting",
        "Priority support",
        "Up to 3 locations",
        "Local SEO optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited review requests",
        "White label solution",
        "Dedicated account manager",
        "24/7 premium support",
        "Unlimited locations",
        "Custom integrations",
        "API access",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 ${
                plan.popular
                  ? "border-primary border-2 shadow-xl relative"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price !== "Custom" && <span className="text-2xl">$</span>}
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
