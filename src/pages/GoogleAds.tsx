import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { MousePointer, DollarSign, Users, PieChart, Rocket, Eye } from "lucide-react";

const GoogleAds = () => {
  return (
    <ServicePageTemplate
      title="Google Ads Management"
      metaDescription="Expert Google Ads management services to maximize your ROI. PPC campaigns that drive qualified leads and sales. Get more customers with our proven strategies."
      heroHeadline="Maximize Your ROI with Expert Google Ads Management"
      heroSubheadline="💰 Certified Google Partner"
      heroDescription="Stop wasting money on ineffective ads. Our Google-certified experts create high-converting PPC campaigns that deliver measurable results and maximize your advertising budget."
      steps={[
        { title: "Account Audit", description: "Review your current ads and identify opportunities" },
        { title: "Strategy", description: "Develop a custom campaign strategy for your goals" },
        { title: "Campaign Setup", description: "Create optimized campaigns and ad groups" },
        { title: "Optimization", description: "Continuous A/B testing and bid optimization" },
        { title: "Scale", description: "Expand winning campaigns for maximum growth" },
      ]}
      benefits={[
        { icon: <MousePointer className="w-8 h-8" />, title: "Higher Click-Through Rates", description: "Our compelling ad copy and smart targeting achieve CTRs 2-3x above industry averages." },
        { icon: <DollarSign className="w-8 h-8" />, title: "Lower Cost Per Click", description: "Strategic bidding and quality score optimization reduces your cost per click significantly." },
        { icon: <Users className="w-8 h-8" />, title: "Qualified Leads", description: "Target the right audience with precision targeting to get leads ready to convert." },
        { icon: <PieChart className="w-8 h-8" />, title: "Detailed Analytics", description: "Comprehensive reporting shows exactly where your ad spend goes and what results it generates." },
        { icon: <Rocket className="w-8 h-8" />, title: "Fast Results", description: "Start generating leads and sales within days of launching your campaigns." },
        { icon: <Eye className="w-8 h-8" />, title: "Brand Visibility", description: "Increase brand awareness and stay top-of-mind with your target audience." },
      ]}
      whyUsPoints={[
        "Google Partner certified agency",
        "Average 300% ROAS for clients",
        "$10M+ in managed ad spend",
        "Dedicated account manager",
        "Weekly optimization cycles",
        "Transparent fee structure",
        "Cross-platform expertise",
        "Landing page optimization included",
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$599",
          description: "For businesses new to Google Ads",
          features: [
            "Up to $3,000 ad spend",
            "2 campaigns",
            "Keyword research",
            "Ad copy creation",
            "Conversion tracking",
            "Bi-weekly reporting",
          ],
        },
        {
          name: "Growth",
          price: "$1,199",
          description: "For scaling businesses",
          features: [
            "Up to $10,000 ad spend",
            "5 campaigns",
            "Advanced targeting",
            "A/B testing",
            "Remarketing setup",
            "Landing page review",
            "Weekly reporting",
            "Phone support",
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$2,999",
          description: "For high-volume advertisers",
          features: [
            "Unlimited ad spend",
            "Unlimited campaigns",
            "Shopping & Display ads",
            "YouTube advertising",
            "Custom audiences",
            "CRO consulting",
            "Daily optimization",
            "Priority support",
          ],
        },
      ]}
      testimonials={[
        {
          name: "Jennifer Martinez",
          role: "Owner, Martinez Law Firm",
          content: "Our cost per lead dropped by 60% while lead quality improved dramatically. GetReviews transformed our Google Ads from a money pit to a lead machine.",
          rating: 5,
        },
        {
          name: "Tom Williams",
          role: "E-commerce Director, StyleHub",
          content: "500% ROAS in our first quarter working together. Their team knows Google Ads inside and out. Best decision we made for our marketing.",
          rating: 5,
        },
        {
          name: "Amanda Lee",
          role: "CEO, FitLife Gym",
          content: "We went from struggling to get members to having a waitlist. The targeting precision and ad optimization are next level.",
          rating: 5,
        },
      ]}
      faqs={[
        { question: "How much should I budget for Google Ads?", answer: "We recommend starting with at least $1,500-3,000/month in ad spend for meaningful results. However, we can work with smaller budgets for local businesses. Your total investment includes ad spend plus our management fee." },
        { question: "How quickly will I see results?", answer: "You can start seeing traffic and leads within the first week of launching. However, optimal performance typically comes after 2-3 months of testing and optimization." },
        { question: "Do you manage Shopping and Display campaigns?", answer: "Yes, we manage all Google Ads campaign types including Search, Shopping, Display, YouTube, and Performance Max campaigns." },
        { question: "What's your management fee structure?", answer: "Our fees are based on a flat monthly rate depending on your plan level. This provides cost predictability as your ad spend scales." },
        { question: "Can you help with landing pages?", answer: "Yes, we review and provide recommendations for your landing pages. Our Growth and Enterprise plans include landing page optimization consulting." },
        { question: "How do you measure success?", answer: "We track conversions, cost per acquisition, ROAS, quality scores, and other KPIs aligned with your business goals. You'll receive detailed reports showing performance." },
        { question: "Do you require long-term contracts?", answer: "No long-term contracts required. We work on month-to-month agreements because we believe in earning your business through results." },
      ]}
    />
  );
};

export default GoogleAds;
