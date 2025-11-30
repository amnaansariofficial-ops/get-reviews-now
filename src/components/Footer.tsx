import { Star, Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Footer = () => {
  return (
    <footer className="bg-[#2D3436] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Get <span className="text-primary">Reviews</span> Buzz
            </h3>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              We are a team of Internet Marketing and Online Reputation Management experts who can uplift your local business and help you climb the ladder of business success.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:marketing@getreviews.buzz" className="hover:text-primary transition-colors">
                  marketing@getreviews.buzz
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+12068650540" className="hover:text-primary transition-colors">
                  +1 (206) 865-0540
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <span>@WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-1">Company</h3>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Case Study
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-1">Services</h3>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/services/buy-reviews" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Buy Reviews
                </Link>
              </li>
              <li>
                <Link to="/services/google-reviews" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Buy Google Reviews
                </Link>
              </li>
              <li>
                <Link to="/services/trustpilot-reviews" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Buy TrustPilot Reviews
                </Link>
              </li>
              <li>
                <Link to="/services/tripadvisor-reviews" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Buy Tripadvisor Reviews
                </Link>
              </li>
              <li>
                <Link to="/services/gbp-management" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  GBP Management
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-sm text-primary hover:text-primary/80 transition-colors font-semibold">
                  Search Engine Optimization (SEO)
                </Link>
              </li>
              <li>
                <Link to="/services/web-design" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care & Newsletter */}
          <div>
            <div className="mb-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-1">Customer Care</h3>
                <div className="w-12 h-1 bg-primary"></div>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link to="/help" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Login / Signup
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-1">Newsletter</h3>
                <div className="w-12 h-1 bg-primary"></div>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to our weekly newsletter and receive updates via email.
              </p>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white border-0 text-foreground placeholder:text-muted-foreground"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  Subscribe
                </Button>
              </div>
              
              <div className="mt-6 flex gap-3 items-center">
                <span className="text-xs text-gray-400">We accept:</span>
                <div className="flex gap-2">
                  <div className="text-xs text-gray-400">VISA</div>
                  <div className="text-xs text-gray-400">MC</div>
                  <div className="text-xs text-gray-400">AMEX</div>
                  <div className="text-xs text-primary">PayPal</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-center text-sm text-gray-400">
            © 2025 GetReviews Buzz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
