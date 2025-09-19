import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Waves, Activity, Database, Brain, Globe, BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 ocean-gradient rounded-lg flex items-center justify-center">
              <Waves className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-ocean-deep">AquaIntel</h1>
              <p className="text-xs text-muted-foreground">Marine Decision Support Platform</p>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#data-collection" className="text-sm font-medium hover:text-primary transition-colors">
            Data Collection
          </a>
          <a href="#analytics" className="text-sm font-medium hover:text-primary transition-colors">
            Analytics
          </a>
          <a href="#digital-twin" className="text-sm font-medium hover:text-primary transition-colors">
            Digital Twin
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="text-accent">
            <Activity className="h-3 w-3 mr-1" />
            Live
          </Badge>
          <Button variant="ocean" size="sm">
            Connect System
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;