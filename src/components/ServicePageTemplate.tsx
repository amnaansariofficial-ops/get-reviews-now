import { Helmet } from "react-helmet";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Check, Star, ArrowRight, Shield, Clock, Award, 
  Phone, ChevronDown 
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServicePageProps {
  title: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroDescription: string;
  steps: { title: string; description: string }[];
  benefits: { icon: React.ReactNode; title: string; description: string }[];
  whyUsPoints: string[];
  pricingPlans: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
  }[];
  testimonials: {
    name: string;
    role: string;
    content: string;
    rating: number;
  }[];
  faqs: { question: string; answer: string }[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export const ServicePageTemplate = ({
  title,
  metaDescription,
  heroHeadline,
  heroSubheadline,
  heroDescription,
  steps,
  benefits,
  whyUsPoints,
  pricingPlans,
  testimonials,
  faqs,
}: ServicePageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>{title} | GetReviews - Boost Your Business</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-6"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              {heroSubheadline}
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {heroHeadline}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {heroDescription}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-transform hover:scale-105">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg transition-transform hover:scale-105">
                <Phone className="mr-2 w-5 h-5" />
                Book A Call
              </Button>
            </motion.div>
            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mt-8"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-green-600" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-5 h-5 text-primary" />
                <span>Trusted by 10,000+ Businesses</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Fast Results in 7 Days</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our simple process gets you results fast
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center relative"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover why businesses choose us
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-primary transition-all duration-300 bg-card h-full hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <motion.div 
                      className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-card-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-background/80 max-w-2xl mx-auto">
                We're committed to delivering exceptional results
              </p>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {whyUsPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-background/5 rounded-lg hover:bg-background/10 transition-colors"
                  variants={fadeInUp}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">Pricing Plans</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <Card 
                  className={`relative h-full ${plan.popular ? 'border-2 border-primary shadow-xl scale-105' : 'border'} bg-card`}
                >
                  {plan.popular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 -translate-x-1/2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </motion.div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl text-card-foreground">{plan.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-600" />
                          <span className="text-sm text-card-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full transition-transform hover:scale-105 ${plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-foreground hover:bg-foreground/90 text-background'}`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-card border h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-card-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers
            </p>
          </motion.div>
          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="border rounded-lg bg-background overflow-hidden"
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold hover:bg-secondary/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA + Form */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-primary-foreground"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Join thousands of businesses already using our services to boost their online presence and drive more revenue.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { icon: Shield, text: "30-Day Money-Back Guarantee" },
                  { icon: Award, text: "Dedicated Account Manager" },
                  { icon: Clock, text: "24/7 Customer Support" }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <item.icon className="w-6 h-6" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8" />
                <div>
                  <p className="text-sm">Call us now</p>
                  <p className="text-xl font-bold">+1 (206) 865-0540</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-background border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-center text-card-foreground">Get Your Free Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition-shadow"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition-shadow"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition-shadow"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.textarea
                      placeholder="Tell us about your project"
                      rows={4}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none transition-shadow"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      whileFocus={{ scale: 1.02 }}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 transition-transform hover:scale-105"
                    >
                      Get Free Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
