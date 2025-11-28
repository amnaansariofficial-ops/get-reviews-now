import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All Posts", count: 24 },
    { name: "SEO Tips", count: 8 },
    { name: "Review Management", count: 6 },
    { name: "Local Marketing", count: 5 },
    { name: "Case Studies", count: 5 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Proven Strategies to Get More Google Reviews in 2025",
      excerpt: "Discover the latest tactics that top businesses are using to generate authentic 5-star reviews and boost their online reputation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      category: "Review Management",
      author: "Sarah Johnson",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Local SEO Checklist: Dominate Your Market in 30 Days",
      excerpt: "A comprehensive step-by-step guide to optimizing your local presence and ranking #1 in your area.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      category: "Local Marketing",
      author: "Michael Chen",
      date: "Jan 12, 2025",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "How AI is Transforming Customer Review Management",
      excerpt: "Explore how artificial intelligence is revolutionizing the way businesses collect, analyze, and respond to customer feedback.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      category: "Review Management",
      author: "Emma Williams",
      date: "Jan 10, 2025",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Ultimate Guide to Google Business Profile Optimization",
      excerpt: "Learn how to maximize your Google Business Profile to attract more customers and increase visibility in local search.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop",
      category: "SEO Tips",
      author: "David Rodriguez",
      date: "Jan 8, 2025",
      readTime: "10 min read",
    },
    {
      id: 5,
      title: "Case Study: How We Tripled Reviews for a Local Restaurant",
      excerpt: "A detailed breakdown of our proven review generation strategy that helped a family restaurant grow from 20 to 200+ reviews in 90 days.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=500&fit=crop",
      category: "Case Studies",
      author: "Jennifer Lee",
      date: "Jan 5, 2025",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Responding to Negative Reviews: The Complete Playbook",
      excerpt: "Master the art of turning negative feedback into positive outcomes with our proven response framework.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
      category: "Review Management",
      author: "Marcus Thompson",
      date: "Jan 3, 2025",
      readTime: "9 min read",
    },
    {
      id: 7,
      title: "Voice Search Optimization: Preparing for the Future of SEO",
      excerpt: "Stay ahead of the curve by optimizing your content for voice search queries and smart assistants.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop",
      category: "SEO Tips",
      author: "Lisa Anderson",
      date: "Dec 30, 2024",
      readTime: "6 min read",
    },
    {
      id: 8,
      title: "Building Trust Through Authentic Customer Testimonials",
      excerpt: "Learn how to leverage genuine customer stories to build credibility and drive more conversions.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop",
      category: "Local Marketing",
      author: "Robert Kim",
      date: "Dec 28, 2024",
      readTime: "5 min read",
    },
    {
      id: 9,
      title: "PPC vs SEO: Which Strategy is Right for Your Business?",
      excerpt: "Compare the pros and cons of paid advertising and organic search to determine the best approach for your goals.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop",
      category: "SEO Tips",
      author: "Alex Martinez",
      date: "Dec 25, 2024",
      readTime: "8 min read",
    },
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Digital Marketing Tips & Insights | GetReviews</title>
        <meta 
          name="description" 
          content="Expert insights on SEO, review management, local marketing, and digital growth strategies. Stay updated with the latest trends and best practices." 
        />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main className="pt-24 pb-16">
          {/* Header */}
          <section className="py-12 bg-gradient-to-br from-primary/10 to-transparent">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Expert insights, strategies, and success stories to help your business grow
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-6 text-base"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 mt-12">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Sidebar */}
              <aside className="lg:col-span-3">
                <Card className="p-6 sticky top-24">
                  <h3 className="font-bold mb-4">Categories</h3>
                  <nav className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium text-left"
                      >
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="ml-2">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </nav>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="font-bold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Google Reviews", "Local SEO", "Reputation", "Marketing", "Growth", "AI"].map((tag, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary/10">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
                    <h3 className="font-bold mb-2">Get Weekly Tips</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Subscribe to receive expert insights directly in your inbox.
                    </p>
                    <Input placeholder="Your email" className="mb-3" />
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Subscribe
                    </Button>
                  </Card>
                </Card>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-9">
                {/* Featured Post */}
                {featuredPost && (
                  <Card className="mb-12 overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-80 md:h-auto overflow-hidden">
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <Badge variant="secondary" className="w-fit mb-3">
                          {featuredPost.category}
                        </Badge>
                        <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{featuredPost.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-fit group/btn">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                )}

                {/* Regular Posts Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {regularPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <Badge variant="secondary" className="mb-3">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12">
                  <Button size="lg" variant="outline">
                    Load More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
