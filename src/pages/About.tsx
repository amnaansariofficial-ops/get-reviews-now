import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet";

const About = () => {
  const stats = [
    { number: "10K+", label: "Happy Clients" },
    { number: "50M+", label: "Reviews Generated" },
    { number: "98%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We're dedicated to delivering results that matter.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes and ROI that directly impact your bottom line.",
    },
    {
      icon: Award,
      title: "Industry Leaders",
      description: "Award-winning strategies backed by years of proven expertise.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We stay ahead of trends to keep your business growing.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Leading Digital Marketing Agency | GetReviews</title>
        <meta 
          name="description" 
          content="Learn about our mission to help businesses grow through authentic reviews and digital marketing excellence. 10K+ happy clients and 15+ years of experience." 
        />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 to-transparent">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">About GetReviews</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're on a mission to help businesses thrive in the digital age through 
                  authentic reviews, strategic marketing, and measurable results.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010, GetReviews began with a simple observation: online reviews 
                    were becoming the new word-of-mouth, but businesses struggled to generate and 
                    manage them effectively.
                  </p>
                  <p>
                    What started as a small reputation management service has grown into a 
                    comprehensive digital marketing agency, serving over 10,000 businesses 
                    across the United States.
                  </p>
                  <p>
                    Today, we combine cutting-edge technology with proven marketing strategies 
                    to help businesses of all sizes build their online presence, attract more 
                    customers, and grow their revenue.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
