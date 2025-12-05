import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Star, MessageSquare, TrendingUp, Shield, Award, ThumbsUp } from "lucide-react";

const GoogleReviews = () => {
  return (
    <ServicePageTemplate
      title="Google Reviews Management"
      metaDescription="Professional Google Reviews management and reputation services. Get more 5-star reviews, respond to feedback, and build trust with potential customers."
      heroHeadline="Build a 5-Star Reputation on Google"
      heroSubheadline="⭐ Reputation Experts"
      heroDescription="93% of consumers read reviews before buying. Our Google Reviews management service helps you generate more positive reviews, manage feedback, and build the trust that drives sales."
      steps={[
        { title: "Audit", description: "Analyze your current review profile" },
        { title: "Strategy", description: "Create a review generation plan" },
        { title: "Generate", description: "Implement automated review requests" },
        { title: "Manage", description: "Monitor and respond to all reviews" },
        { title: "Grow", description: "Continuously improve your rating" },
      ]}
      benefits={[
        { icon: <Star className="w-8 h-8" />, title: "More 5-Star Reviews", description: "Our proven system generates consistent positive reviews from your happiest customers." },
        { icon: <MessageSquare className="w-8 h-8" />, title: "Review Response", description: "Professional responses to all reviews, both positive and negative, to protect your brand." },
        { icon: <TrendingUp className="w-8 h-8" />, title: "Higher Rankings", description: "More positive reviews boost your local SEO and Google Maps visibility." },
        { icon: <Shield className="w-8 h-8" />, title: "Reputation Protection", description: "Proactive monitoring alerts you to new reviews so you can respond quickly." },
        { icon: <Award className="w-8 h-8" />, title: "Trust Building", description: "A strong review profile builds instant credibility with potential customers." },
        { icon: <ThumbsUp className="w-8 h-8" />, title: "Conversion Boost", description: "Businesses with 4+ stars see 50% more conversions than competitors." },
      ]}
      whyUsPoints={[
        "100% Google-compliant methods",
        "Average 0.8 star rating increase",
        "Real reviews from real customers",
        "Multi-location management",
        "Automated review requests",
        "Review response templates",
        "Competitor review analysis",
        "Weekly performance reports",
      ]}
      pricingPlans={[
        {
          name: "Basic",
          price: "$299",
          description: "For single location businesses",
          features: [
            "1 location",
            "Review request automation",
            "Email + SMS requests",
            "Monthly review report",
            "Basic response templates",
            "Email support",
          ],
        },
        {
          name: "Professional",
          price: "$599",
          description: "For growing businesses",
          features: [
            "Up to 3 locations",
            "Priority review requests",
            "Custom email sequences",
            "Review response service",
            "Competitor monitoring",
            "Weekly reporting",
            "Phone support",
            "QR code review cards",
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$1,499",
          description: "For multi-location brands",
          features: [
            "Unlimited locations",
            "White-label dashboard",
            "Custom integrations",
            "Dedicated manager",
            "Crisis management",
            "Real-time alerts",
            "API access",
            "SLA guarantee",
          ],
        },
      ]}
      testimonials={[
        {
          name: "Dr. Emily Watson",
          role: "Owner, Family Dental Care",
          content: "We went from 3.8 to 4.7 stars in 4 months. New patients constantly mention they chose us because of our reviews. Game changer!",
          rating: 5,
        },
        {
          name: "James Miller",
          role: "GM, AutoPro Service Center",
          content: "GetReviews automated everything. We're getting 15-20 new reviews per month without lifting a finger. Our Google visibility has skyrocketed.",
          rating: 5,
        },
        {
          name: "Patricia Nguyen",
          role: "Owner, Pho House Restaurant",
          content: "Their response management saved us during a tough review situation. They turned a 1-star situation into a loyal customer. Worth every penny.",
          rating: 5,
        },
      ]}
      faqs={[
        { question: "Are your methods Google-compliant?", answer: "Yes, 100%. We never buy fake reviews or use any black-hat tactics. We simply make it easier for your real customers to leave honest feedback." },
        { question: "How do you get customers to leave reviews?", answer: "We set up automated email and SMS sequences that reach out to customers after their experience, making it easy for them to leave feedback with one-click links." },
        { question: "Can you remove negative reviews?", answer: "We can't remove legitimate reviews, but we can help you respond professionally and request removal of reviews that violate Google's guidelines." },
        { question: "How quickly will I see results?", answer: "Most businesses see an increase in review velocity within the first 2-4 weeks. Rating improvements typically occur over 2-3 months." },
        { question: "Do you respond to reviews on my behalf?", answer: "Yes, our Professional and Enterprise plans include review response service. We craft personalized responses that reflect your brand voice." },
        { question: "Can you help with reviews on other platforms?", answer: "Yes, we can manage reviews across Google, Yelp, Facebook, TripAdvisor, and industry-specific platforms." },
        { question: "What if I have multiple locations?", answer: "Our Professional plan supports up to 3 locations, and Enterprise supports unlimited locations with centralized dashboard management." },
      ]}
    />
  );
};

export default GoogleReviews;
