import { Button } from "@/components/ui/button";
import { Star, Menu, Phone, ShoppingCart, User, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlatformIcon } from "./PlatformIcon";

const platformNames = [
  "Google", "Google Local Guide", "TrustPilot", "Google GPS", "Glassdoor",
  "Facebook", "Google LSA", "Zillow", "Thumbtack", "Houzz",
  "Home Advisor", "Google Playstore", "Indeed", "TrustPilot Verified", "Home Star",
  "Booking", "BBB", "Tripadvisor", "WebMD", "Product"
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buyReviewsOpen, setBuyReviewsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-xl font-bold">
              Get<span className="text-primary">Reviews</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Buy Reviews Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setBuyReviewsOpen(true)}
              onMouseLeave={() => setBuyReviewsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors text-primary py-4">
                Buy Reviews
                <ChevronDown className={`w-4 h-4 transition-transform ${buyReviewsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {buyReviewsOpen && (
                <div 
                  className="fixed left-0 right-0 top-16 z-[100]"
                  onMouseEnter={() => setBuyReviewsOpen(true)}
                  onMouseLeave={() => setBuyReviewsOpen(false)}
                >
                  <div className="container mx-auto px-4">
                    <div className="bg-[#FDFBF7] border border-gray-100 shadow-xl rounded-b-lg p-8">
                      <div className="grid grid-cols-5 gap-x-6 gap-y-5 mb-8">
                        {platformNames.map((platform, index) => (
                          <Link
                            key={index}
                            to={`/buy-reviews/${platform.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                            onClick={() => setBuyReviewsOpen(false)}
                          >
                            <PlatformIcon platform={platform} />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors leading-tight">
                              {platform}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-200 pt-6">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 h-auto rounded-lg">
                          Discover 100+ Other Platforms
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 border shadow-lg z-[100]">
                <DropdownMenuItem asChild>
                  <Link to="/services">All Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/seo">SEO Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/local-seo">Local SEO</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/ppc">PPC Management</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Resources
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 border shadow-lg z-[100]">
                <DropdownMenuItem asChild>
                  <Link to="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/case-studies">Case Studies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/how-it-works">How It Works</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/affiliate">Affiliate</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+12068650540" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +1 (206) 865-0540
            </a>
            <Link to="/cart" className="relative hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/login" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <User className="w-4 h-4" />
              Login
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Book A Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full">
                Book A Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};