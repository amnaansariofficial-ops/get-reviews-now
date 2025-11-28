import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "David Rodriguez",
      role: "Restaurant Owner",
      image: "DR",
      rating: 5,
      text: "Our online presence has completely transformed. We went from barely any reviews to hundreds of positive ratings. Customer trust has never been higher!",
    },
    {
      name: "Jennifer Lee",
      role: "Dental Practice Manager",
      image: "JL",
      rating: 5,
      text: "The automated review system is a game-changer. We now consistently get 5-star reviews without having to manually ask every patient.",
    },
    {
      name: "Marcus Thompson",
      role: "Auto Repair Shop Owner",
      image: "MT",
      rating: 5,
      text: "Best ROI we've ever had on marketing. New customers specifically mention our great reviews when they call. Worth every penny!",
    },
    {
      name: "Lisa Anderson",
      role: "Real Estate Agent",
      image: "LA",
      rating: 5,
      text: "My Google Business profile is now thriving with authentic reviews. This has directly led to more qualified leads and closed deals.",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Thousands of Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our clients have to say about their success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all">
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
