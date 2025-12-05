import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Search, TrendingUp, Globe, BarChart3, Target, Zap } from "lucide-react";

const SEOServices = () => {
  return (
    <ServicePageTemplate
      title="SEO Services"
      metaDescription="Professional SEO services to boost your website rankings, drive organic traffic, and increase conversions. Get found on Google with our proven SEO strategies."
      heroHeadline="Dominate Search Rankings with Expert SEO Services"
      heroSubheadline="🚀 #1 SEO Agency"
      heroDescription="Transform your online visibility with data-driven SEO strategies that deliver measurable results. Our expert team helps businesses rank higher, drive more traffic, and convert visitors into customers."
      steps={[
        { title: "SEO Audit", description: "Comprehensive analysis of your website's current SEO health" },
        { title: "Strategy", description: "Custom SEO roadmap tailored to your business goals" },
        { title: "Optimization", description: "On-page and technical SEO implementation" },
        { title: "Content", description: "High-quality content creation and optimization" },
        { title: "Results", description: "Track rankings, traffic, and conversions" },
      ]}
      benefits={[
        { icon: <Search className="w-8 h-8" />, title: "Higher Rankings", description: "Get your website to the top of Google search results for your target keywords and outrank your competitors." },
        { icon: <TrendingUp className="w-8 h-8" />, title: "Increased Traffic", description: "Drive more organic traffic to your website with strategic keyword targeting and content optimization." },
        { icon: <Globe className="w-8 h-8" />, title: "Global Reach", description: "Expand your reach to new markets with international SEO strategies and multilingual optimization." },
        { icon: <BarChart3 className="w-8 h-8" />, title: "Better ROI", description: "SEO delivers one of the highest ROIs in digital marketing with long-term sustainable results." },
        { icon: <Target className="w-8 h-8" />, title: "Targeted Traffic", description: "Attract visitors who are actively searching for your products or services and ready to convert." },
        { icon: <Zap className="w-8 h-8" />, title: "Fast Results", description: "Start seeing improvements in your rankings and traffic within the first 30-60 days." },
      ]}
      whyUsPoints={[
        "10+ years of SEO experience",
        "Proven track record with 500+ clients",
        "White-hat SEO techniques only",
        "Transparent monthly reporting",
        "Dedicated SEO specialist assigned",
        "No long-term contracts required",
        "Google-certified team members",
        "24/7 support and communication",
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$499",
          description: "Perfect for small businesses",
          features: [
            "10 target keywords",
            "Monthly SEO audit",
            "On-page optimization",
            "2 blog posts/month",
            "Basic link building",
            "Monthly reporting",
          ],
        },
        {
          name: "Professional",
          price: "$999",
          description: "Ideal for growing businesses",
          features: [
            "25 target keywords",
            "Weekly SEO audit",
            "Full technical SEO",
            "4 blog posts/month",
            "Advanced link building",
            "Competitor analysis",
            "Local SEO included",
            "Priority support",
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$2,499",
          description: "For large businesses",
          features: [
            "Unlimited keywords",
            "Daily monitoring",
            "Complete SEO overhaul",
            "8 blog posts/month",
            "Premium link building",
            "Content strategy",
            "International SEO",
            "Dedicated manager",
          ],
        },
      ]}
      testimonials={[
        {
          name: "Michael Roberts",
          role: "CEO, TechStart Inc",
          content: "Our organic traffic increased by 340% in just 6 months. The ROI has been incredible, and we're now ranking #1 for our main keywords.",
          rating: 5,
        },
        {
          name: "Sarah Johnson",
          role: "Marketing Director, HomePro",
          content: "GetReviews' SEO team transformed our online presence. We went from page 5 to page 1 for competitive keywords. Highly recommend!",
          rating: 5,
        },
        {
          name: "David Chen",
          role: "Founder, LocalBiz",
          content: "The best investment we made for our business. Our lead generation from organic search has tripled since working with them.",
          rating: 5,
        },
      ]}
      faqs={[
        { question: "How long does it take to see SEO results?", answer: "Most clients start seeing improvements within 3-6 months, with significant results typically appearing within 6-12 months. SEO is a long-term strategy that builds sustainable growth over time." },
        { question: "Do you guarantee first page rankings?", answer: "While we cannot guarantee specific rankings (no ethical SEO company can), we have a proven track record of improving rankings for 95% of our clients. We focus on driving meaningful traffic and conversions." },
        { question: "What's included in your SEO services?", answer: "Our services include keyword research, on-page optimization, technical SEO, content creation, link building, local SEO, and comprehensive monthly reporting." },
        { question: "Do you work with businesses in my industry?", answer: "We work with businesses across all industries including e-commerce, healthcare, legal, real estate, SaaS, and more. Our strategies are customized for each industry's unique challenges." },
        { question: "How do you measure SEO success?", answer: "We track keyword rankings, organic traffic, conversion rates, and ROI. You'll receive detailed monthly reports showing progress across all key metrics." },
        { question: "What makes your SEO services different?", answer: "We focus on sustainable, white-hat SEO strategies that build long-term value. Our data-driven approach, transparent reporting, and dedicated support set us apart." },
        { question: "Can I cancel my SEO service anytime?", answer: "Yes, we don't require long-term contracts. You can cancel with 30 days notice. However, we recommend committing to at least 6 months for best results." },
      ]}
    />
  );
};

export default SEOServices;
