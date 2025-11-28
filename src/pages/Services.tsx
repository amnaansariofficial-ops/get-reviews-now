import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, MapPin, Globe, ShoppingBag, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Services = () => {
  const serviceCategories = [
    { name: "Search Engine Optimization", path: "/services/seo", icon: "→" },
    { name: "Google Business Profile", path: "/services/google-business" },
    { name: "Link Building", path: "/services/link-building" },
    { name: "Content Writing", path: "/services/content-writing" },
    { name: "Paid Ads", path: "/services/paid-ads" },
    { name: "Reputation Management", path: "/services/reputation" },
    { name: "Social Media Management", path: "/services/social-media" },
    { name: "Web Design & Development", path: "/services/web-design" },
    { name: "White Label Services", path: "/services/white-label" },
  ];

  const seoServices = [
    {
      icon: BarChart3,
      iconBg: "bg-primary",
      title: "SEO",
      description: "Generate more leads using SEO strategies designed for real growth.",
    },
    {
      icon: Globe,
      iconBg: "bg-primary",
      title: "GEO",
      description: "Rank your business in AI search results such as ChatGPT and Google AI.",
    },
    {
      icon: MapPin,
      iconBg: "bg-primary",
      title: "Local SEO",
      description: "Be the first choice when locals search for your service.",
    },
    {
      icon: Globe,
      iconBg: "bg-primary",
      title: "National SEO",
      description: "Increase national visibility and convert searches into loyal paying customers.",
    },
    {
      icon: ShoppingBag,
      iconBg: "bg-primary",
      title: "E-Commerce SEO",
      description: "Perform eCommerce SEO that drives growth and multiplies sales daily.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing Services - SEO, PPC & More | GetReviews</title>
        <meta 
          name="description" 
          content="Comprehensive digital marketing services including SEO, local SEO, PPC, reputation management, and more. Drive targeted traffic that grows your revenue." 
        />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left Sidebar */}
              <aside className="lg:col-span-3">
                <Card className="p-6 sticky top-24">
                  <nav className="space-y-2">
                    {serviceCategories.map((category, index) => (
                      <Link
                        key={index}
                        to={category.path}
                        className="block px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium group"
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.name}</span>
                          {category.icon && (
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          )}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </Card>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-6">
                {/* Featured Service Card */}
                <Card className="mb-8 p-8 border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">Rank & Rule</h1>
                      <p className="text-lg text-muted-foreground">
                        Drive Targeted Traffic That Grows Your Revenue
                      </p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
                  </div>
                </Card>

                {/* Service Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {seoServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Card key={index} className="p-6 hover:shadow-lg transition-all group cursor-pointer">
                        <div className="flex gap-4">
                          <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-7 h-7 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                {/* Additional Services Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">More Services</h2>
                  <div className="grid gap-4">
                    <Card className="p-6 hover:shadow-lg transition-all">
                      <h3 className="text-lg font-bold mb-2">Reputation Management</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Monitor and manage your online reputation across all platforms.
                      </p>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all">
                      <h3 className="text-lg font-bold mb-2">Social Media Management</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Engage your audience with strategic social media campaigns.
                      </p>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all">
                      <h3 className="text-lg font-bold mb-2">Web Design & Development</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Custom websites that convert visitors into customers.
                      </p>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <aside className="lg:col-span-3">
                <div className="sticky top-24 space-y-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-bold mb-4">Featured</h3>
                    <div className="space-y-4">
                      <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" 
                        alt="Case Study" 
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-bold mb-2 text-sm">
                          An Integrated SEO Strategy Propelled Interstate Air Conditioning and Heating to a New Height
                        </h4>
                        <Button variant="link" className="p-0 h-auto text-primary" asChild>
                          <Link to="/case-studies/interstate-air">
                            View Case Study →
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-primary/5">
                    <h3 className="text-lg font-bold mb-2">Ready to Get Started?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Let's discuss how we can help grow your business.
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Schedule Consultation
                    </Button>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;
