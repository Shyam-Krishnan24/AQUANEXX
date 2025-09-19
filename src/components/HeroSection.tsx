import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Satellite, Waves, Brain, Database, Activity, BarChart3, Globe, Microscope } from "lucide-react";
import heroImage from "@/assets/marine-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 ocean-gradient opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge variant="outline" className="bg-background/10 border-primary-glow text-primary-foreground">
            <Activity className="h-3 w-3 mr-1" />
            Real-time Marine Intelligence
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Advanced Marine
            <span className="block data-gradient bg-clip-text text-transparent">
              Decision Support
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Harness satellite data, sensor networks, and AI-powered insights to make informed decisions 
            about our marine ecosystems in real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="glow" size="lg" className="text-lg px-8 py-6">
              <Globe className="h-5 w-5 mr-2" />
              Launch Platform
            </Button>
            <Button variant="surface" size="lg" className="text-lg px-8 py-6">
              <BarChart3 className="h-5 w-5 mr-2" />
              View Analytics
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <Card className="bg-background/10 border-primary-glow/30 p-4 backdrop-blur">
              <div className="text-center">
                <Satellite className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground">150+</div>
                <div className="text-sm text-primary-foreground/80">Active Satellites</div>
              </div>
            </Card>
            <Card className="bg-background/10 border-primary-glow/30 p-4 backdrop-blur">
              <div className="text-center">
                <Database className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground">2.4TB</div>
                <div className="text-sm text-primary-foreground/80">Data Processed</div>
              </div>
            </Card>
            <Card className="bg-background/10 border-primary-glow/30 p-4 backdrop-blur">
              <div className="text-center">
                <Brain className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground">95%</div>
                <div className="text-sm text-primary-foreground/80">AI Accuracy</div>
              </div>
            </Card>
            <Card className="bg-background/10 border-primary-glow/30 p-4 backdrop-blur">
              <div className="text-center">
                <Microscope className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground">10K+</div>
                <div className="text-sm text-primary-foreground/80">Species Tracked</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;