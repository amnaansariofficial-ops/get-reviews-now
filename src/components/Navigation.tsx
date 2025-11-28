import { Button } from "@/components/ui/button";
import { Star, Menu, Phone } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
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
