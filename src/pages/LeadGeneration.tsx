import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Users, Mail, Phone, Database, Filter, TrendingUp } from "lucide-react";

const LeadGeneration = () => {
  return (
    <ServicePageTemplate
      title="Lead Generation Services"
      metaDescription="Professional B2B and B2C lead generation services. Get qualified leads delivered to your inbox. Multi-channel lead gen strategies that fill your sales pipeline."
      heroHeadline="Fill Your Pipeline with Qualified Leads"
      heroSubheadline="📈 Lead Gen Experts"
      heroDescription="Stop chasing cold leads. Our multi-channel lead generation strategies deliver warm, qualified prospects directly to your sales team, ready to buy."
      steps={[
        { title: "Define ICP", description: "Identify your ideal customer profile" },
        { title: "Build Strategy", description: "Create multi-channel outreach plan" },
        { title: "Generate", description: "Launch campaigns across channels" },
        { title: "Qualify", description: "Filter and score leads for quality" },
        { title: "Deliver", description: "Hand off sales-ready leads to your team" },
      ]}
      benefits={[
        { icon: <Users className="w-8 h-8" />, title: "Qualified Prospects", description: "Every lead is pre-qualified based on your criteria so your sales team only talks to serious buyers." },
        { icon: <Mail className="w-8 h-8" />, title: "Multi-Channel Approach", description: "We generate leads through email, social, content, PPC, and more for maximum reach." },
        { icon: <Phone className="w-8 h-8" />, title: "Sales-Ready Leads", description: "Leads are nurtured and ready for a sales conversation when they reach your team." },
        { icon: <Database className="w-8 h-8" />, title: "CRM Integration", description: "Leads flow directly into your CRM with all relevant data for seamless handoff." },
        { icon: <Filter className="w-8 h-8" />, title: "Quality Filtering", description: "Advanced lead scoring ensures you only pay for leads that meet your criteria." },
        { icon: <TrendingUp className="w-8 h-8" />, title: "Scalable Results", description: "Start small and scale up as we prove ROI. No ceiling on growth potential." },
      ]}
      whyUsPoints={[
        "10,000+ leads generated monthly",
        "40% average conversion rate",
        "GDPR and CAN-SPAM compliant",
        "Real-time lead delivery",
        "Lead quality guarantee",
        "Custom qualification criteria",
        "Exclusive leads (not resold)",
        "Performance-based options",
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$799",
          description: "For testing lead generation",
          features: [
            "50 qualified leads/month",
            "Basic targeting",
            "Email lead gen",
            "Lead scoring",
            "CSV delivery",
            "Monthly strategy call",
          ],
        },
        {
          name: "Growth",
          price: "$1,799",
          description: "For scaling lead flow",
          features: [
            "150 qualified leads/month",
            "Advanced targeting",
            "Multi-channel approach",
            "CRM integration",
            "Lead nurturing",
            "Phone verification",
            "Weekly reporting",
            "Priority support",
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$3,999",
          description: "For high-volume needs",
          features: [
            "500+ leads/month",
            "Custom targeting",
            "All channels included",
            "Appointment setting",
            "Dedicated team",
            "Custom workflows",
            "Real-time delivery",
            "SLA guarantee",
          ],
        },
      ]}
      testimonials={[
        {
          name: "Robert Anderson",
          role: "VP Sales, CloudTech",
          content: "GetReviews filled our pipeline with 200+ qualified leads in the first month. Our sales team has never been busier or happier.",
          rating: 5,
        },
        {
          name: "Michelle Davis",
          role: "Director, Financial Services Co",
          content: "The lead quality is exceptional. 30% of the leads they deliver convert to customers. That's 3x better than our previous provider.",
          rating: 5,
        },
        {
          name: "Kevin O'Brien",
          role: "Founder, SaaS Startup",
          content: "As a startup, we needed leads fast. GetReviews delivered immediately and helped us hit our first $1M ARR.",
          rating: 5,
        },
      ]}
      faqs={[
        { question: "What makes a lead 'qualified'?", answer: "We work with you to define qualification criteria based on factors like company size, industry, budget, timeline, and decision-making authority. Only leads meeting your criteria are delivered." },
        { question: "Are the leads exclusive to us?", answer: "Yes, all leads are exclusive and generated specifically for your business. We never resell leads to multiple clients." },
        { question: "How are leads delivered?", answer: "Leads can be delivered via CRM integration (Salesforce, HubSpot, etc.), email notification, or CSV export based on your preference." },
        { question: "What channels do you use for lead generation?", answer: "We use a mix of email outreach, LinkedIn, content marketing, paid advertising, and intent data depending on your target audience." },
        { question: "What if leads don't meet our criteria?", answer: "We have a lead quality guarantee. Any lead that doesn't meet agreed criteria is replaced at no additional cost." },
        { question: "Do you offer appointment setting?", answer: "Yes, our Enterprise plan includes appointment setting where we schedule qualified meetings directly on your sales team's calendars." },
        { question: "How quickly can you start delivering leads?", answer: "Most campaigns are live within 2 weeks of kickoff, with leads flowing within the first week of launch." },
      ]}
    />
  );
};

export default LeadGeneration;
