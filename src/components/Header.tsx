import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Waves, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Data Collection", path: "/data-collection" },
    { name: "Taxonomic AI", path: "/taxonomic" },
    { name: "eDNA Analysis", path: "/edna" },
    { name: "Otolith Analysis", path: "/otolith" },
    { name: "Digital Twin", path: "/digital-twin" },
    { name: "Analytics", path: "/analytics" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary-glow/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 ocean-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Waves className="h-6 w-6 text-primary-foreground animate-wave" />
            </div>
            <div>
              <h1 className="text-xl font-bold data-gradient bg-clip-text text-transparent">AquaIntel</h1>
              <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30 mt-1">
                Marine Decision Support
              </Badge>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-ocean-medium hover:text-accent hover:bg-accent/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-ocean-medium hover:text-accent">
              Login
            </Button>
            <Button variant="glow" size="sm" className="shadow-lg hover:shadow-xl">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-ocean-medium hover:text-accent rounded-lg hover:bg-accent/10 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-primary-glow/20 py-4 space-y-2 bg-background/95 backdrop-blur-xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-ocean-medium hover:text-accent hover:bg-accent/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-primary-glow/20">
              <Button variant="ghost" size="sm" className="justify-start text-ocean-medium hover:text-accent">
                Login
              </Button>
              <Button variant="glow" size="sm" className="justify-start">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;