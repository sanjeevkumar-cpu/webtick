import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/weblogo.png" 
              alt="WebTick" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            <Link to="/#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button variant="hero">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;