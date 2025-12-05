import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Facebook, Instagram, Heart, Share2, MessageCircle, Sparkles } from "lucide-react";

const MetaAds = () => {
  return (
    <ServicePageTemplate
      title="Meta Ads (Facebook & Instagram)"
      metaDescription="Professional Meta Ads management for Facebook and Instagram. Reach billions of users with targeted social media advertising. Expert campaign management and optimization."
      heroHeadline="Reach Your Audience on Facebook & Instagram"
      heroSubheadline="📱 Meta Business Partner"
      heroDescription="Harness the power of the world's largest social networks. Our Meta Ads experts create scroll-stopping campaigns that drive engagement, leads, and sales across Facebook and Instagram."
      steps={[
        { title: "Discovery", description: "Understand your audience and business goals" },
        { title: "Creative", description: "Design compelling ads that capture attention" },
        { title: "Targeting", description: "Build custom audiences for precision targeting" },
        { title: "Launch", description: "Deploy campaigns across Facebook & Instagram" },
        { title: "Optimize", description: "Test, refine, and scale winning ads" },
      ]}
      benefits={[
        { icon: <Facebook className="w-8 h-8" />, title: "3 Billion+ Users", description: "Reach the world's largest audience across Facebook, Instagram, Messenger, and WhatsApp." },
        { icon: <Instagram className="w-8 h-8" />, title: "Visual Storytelling", description: "Showcase your brand with stunning image and video ads that resonate with your audience." },
        { icon: <Heart className="w-8 h-8" />, title: "Brand Engagement", description: "Build meaningful connections with potential customers through engaging content and interactions." },
        { icon: <Share2 className="w-8 h-8" />, title: "Viral Potential", description: "Create shareable content that amplifies your reach organically through social sharing." },
        { icon: <MessageCircle className="w-8 h-8" />, title: "Direct Communication", description: "Connect directly with prospects through Messenger ads and Instagram DMs." },
        { icon: <Sparkles className="w-8 h-8" />, title: "Advanced Targeting", description: "Leverage detailed demographics, interests, and behaviors to reach your ideal customers." },
      ]}
      whyUsPoints={[
        "Meta Business Partner certified",
        "Expert creative team on staff",
        "Advanced audience building",
        "Dynamic ad optimization",
        "Full-funnel campaign strategy",
        "Pixel setup and tracking",
        "Retargeting expertise",
        "Creative testing framework",
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$499",
          description: "For businesses exploring social ads",
          features: [
            "Up to $2,000 ad spend",
            "1 campaign",
            "Basic targeting",
            "2 ad creatives",
            "Monthly reporting",
            "Facebook OR Instagram",
          ],
        },
        {
          name: "Growth",
          price: "$999",
          description: "For serious social advertisers",
          features: [
            "Up to $7,500 ad spend",
            "3 campaigns",
            "Custom audiences",
            "5 ad creatives/month",
            "A/B testing",
            "Facebook + Instagram",
            "Retargeting included",
            "Weekly reporting",
          ],
          popular: true,
        },
        {
          name: "Scale",
          price: "$2,499",
          description: "For maximum social impact",
          features: [
            "Unlimited ad spend",
            "Unlimited campaigns",
            "Lookalike audiences",
            "10+ ad creatives/month",
            "Video ad production",
            "Messenger & WhatsApp ads",
            "Daily optimization",
            "Dedicated strategist",
          ],
        },
      ]}
      testimonials={[
        {
          name: "Rachel Kim",
          role: "Founder, BeautyBox",
          content: "Our Instagram ads went viral and we sold out our entire inventory in 3 days. GetReviews knows exactly how to create content that converts on social.",
          rating: 5,
        },
        {
          name: "Marcus Johnson",
          role: "CMO, TechGadgets",
          content: "We've tried managing Meta ads in-house but never got results like this. 8x ROAS and our brand awareness is through the roof.",
          rating: 5,
        },
        {
          name: "Lisa Thompson",
          role: "Owner, Boutique Fashion",
          content: "The creative team is incredible. They understand our brand voice perfectly and every ad they create performs amazingly well.",
          rating: 5,
        },
      ]}
      faqs={[
        { question: "Do you create the ad creatives?", answer: "Yes! Our in-house creative team designs eye-catching images and videos for your campaigns. We handle everything from concept to production." },
        { question: "Can you run ads on both Facebook and Instagram?", answer: "Absolutely. Our Growth and Scale plans include advertising on both platforms. We optimize placement based on where your audience engages most." },
        { question: "What types of campaigns do you run?", answer: "We run all campaign types including awareness, traffic, engagement, leads, and conversion campaigns. We recommend the best mix based on your goals." },
        { question: "How do you target the right audience?", answer: "We use custom audiences from your customer data, lookalike audiences to find similar users, and detailed interest/behavior targeting to reach ideal prospects." },
        { question: "Can you help with the Facebook Pixel?", answer: "Yes, we handle complete Pixel setup, event tracking, and ensure your conversion tracking is accurate for campaign optimization." },
        { question: "What's your approach to creative testing?", answer: "We follow a systematic testing framework, testing different images, copy, headlines, and CTAs to continuously improve performance." },
        { question: "How do you handle iOS 14 tracking changes?", answer: "We've adapted our strategies for the post-iOS 14 landscape, using Conversions API, aggregated event measurement, and first-party data strategies." },
      ]}
    />
  );
};

export default MetaAds;
