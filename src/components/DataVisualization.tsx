import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity, MapPin, Thermometer, Droplets, BarChart3 } from "lucide-react";

const DataVisualization = () => {
  return (
    <section className="py-16 surface-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
            Real-time Marine Data Insights
          </h2>
          <p className="text-lg text-ocean-medium max-w-3xl mx-auto">
            Live visualizations and trend analysis from our global network of marine sensors and satellite feeds.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Temperature Trends */}
          <Card className="col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Thermometer className="h-5 w-5 text-coral" />
                  <span>Ocean Temperature</span>
                </div>
                <Badge variant="outline" className="bg-coral/10 text-coral">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +0.3°C
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-t from-coral/20 to-coral/5 rounded-lg flex items-end justify-center p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coral">18.7°C</div>
                    <div className="text-sm text-muted-foreground">Current Average</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-sm font-semibold">16.2°C</div>
                    <div className="text-xs text-muted-foreground">Min</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">22.1°C</div>
                    <div className="text-xs text-muted-foreground">Max</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">18.7°C</div>
                    <div className="text-xs text-muted-foreground">Avg</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* pH Levels */}
          <Card className="col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Droplets className="h-5 w-5 text-accent" />
                  <span>pH Levels</span>
                </div>
                <Badge variant="outline" className="bg-accent/10 text-accent">
                  <Activity className="h-3 w-3 mr-1" />
                  Stable
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-t from-accent/20 to-accent/5 rounded-lg flex items-end justify-center p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">8.12</div>
                    <div className="text-sm text-muted-foreground">Current pH</div>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  Optimal Range: 7.8 - 8.3
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Species Diversity */}
          <Card className="col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-seaweed" />
                  <span>Biodiversity Index</span>
                </div>
                <Badge variant="outline" className="bg-seaweed/10 text-seaweed">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12%
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-32 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="hsl(var(--seaweed))"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="251"
                        strokeDashoffset="63"
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-seaweed">74%</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold">1,247 Species Detected</div>
                  <div className="text-xs text-muted-foreground">Last 24 hours</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Geographic Distribution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Global Marine Data Coverage</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-ocean-surface via-ocean-light/20 to-ocean-medium/10 rounded-lg relative overflow-hidden">
              {/* Simulated world map with data points */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-8 opacity-70">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="h-4 w-4 bg-accent rounded-full animate-pulse"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-ocean-deep">Active Data Points: 1,247</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-coral rounded-full"></div>
                  <span className="text-sm text-ocean-deep">Alert Zones: 3</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button variant="ocean" size="lg">
            <BarChart3 className="h-5 w-5 mr-2" />
            View Advanced Analytics
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;