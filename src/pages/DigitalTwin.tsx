import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Globe, 
  Play, 
  Pause,
  RotateCcw,
  Settings,
  Thermometer,
  Droplets,
  Wind,
  Fish,
  Waves,
  TrendingUp,
  AlertTriangle,
  Eye
} from "lucide-react";
import { useState } from "react";

const DigitalTwin = () => {
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [timeSpeed, setTimeSpeed] = useState([1]);
  const [temperature, setTemperature] = useState([18.5]);
  const [salinity, setSalinity] = useState([35.2]);
  const [currentSpeed, setCurrentSpeed] = useState([0.8]);

  const scenarios = [
    {
      name: "Climate Change Impact",
      description: "Simulate +2°C ocean warming over 50 years",
      status: "Ready",
      duration: "6 months simulation",
      color: "text-orange-500"
    },
    {
      name: "Marine Protected Area",
      description: "Model fishing restrictions impact on biodiversity",
      status: "Running",
      duration: "2 years simulation",
      color: "text-green-500"
    },
    {
      name: "Oil Spill Response",
      description: "Emergency response and ecosystem recovery modeling",
      status: "Completed",
      duration: "1 year simulation",
      color: "text-red-500"
    },
    {
      name: "Aquaculture Expansion",
      description: "Environmental impact of new fish farms",
      status: "Ready",
      duration: "5 years simulation",
      color: "text-blue-500"
    }
  ];

  const currentMetrics = [
    { name: "Water Temperature", value: "18.5°C", change: "+0.3°C", trend: "up", icon: Thermometer },
    { name: "Salinity", value: "35.2 PSU", change: "+0.1 PSU", trend: "up", icon: Droplets },
    { name: "Current Speed", value: "0.8 m/s", change: "-0.2 m/s", trend: "down", icon: Wind },
    { name: "Species Count", value: "1,247", change: "+23", trend: "up", icon: Fish },
    { name: "Wave Height", value: "2.1 m", change: "+0.4 m", trend: "up", icon: Waves },
    { name: "Biomass Index", value: "74.2", change: "+1.8", trend: "up", icon: TrendingUp }
  ];

  const alerts = [
    { type: "Warning", message: "Temperature anomaly detected in Zone 3", time: "5 min ago" },
    { type: "Info", message: "Migration pattern changed for Yellowfin Tuna", time: "15 min ago" },
    { type: "Critical", message: "Algae bloom risk increasing in Northern sector", time: "1 hour ago" }
  ];

  return (
    <div className="min-h-screen surface-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold data-gradient bg-clip-text text-transparent mb-4">
            Marine Digital Twin Engine
          </h1>
          <p className="text-xl text-ocean-medium max-w-3xl mx-auto">
            Real-time ecosystem modeling and scenario simulation for predictive marine management and decision support.
          </p>
        </div>

        {/* Simulation Controls */}
        <Card className="mb-8 bg-background/60 backdrop-blur-sm border-primary-glow/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Simulation Control Center</span>
              </div>
              <Badge 
                variant="outline" 
                className={`${
                  isSimulationRunning 
                    ? 'bg-green-50 text-green-600 border-green-200' 
                    : 'bg-gray-50 text-gray-600 border-gray-200'
                }`}
              >
                {isSimulationRunning ? 'Running' : 'Paused'}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <label className="text-sm font-medium text-ocean-deep">Time Speed</label>
                <Slider
                  value={timeSpeed}
                  onValueChange={setTimeSpeed}
                  max={10}
                  min={0.1}
                  step={0.1}
                  className="w-full"
                />
                <div className="text-xs text-ocean-medium">{timeSpeed[0]}x speed</div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-medium text-ocean-deep">Temperature (°C)</label>
                <Slider
                  value={temperature}
                  onValueChange={setTemperature}
                  max={30}
                  min={0}
                  step={0.1}
                  className="w-full"
                />
                <div className="text-xs text-ocean-medium">{temperature[0]}°C</div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-medium text-ocean-deep">Salinity (PSU)</label>
                <Slider
                  value={salinity}
                  onValueChange={setSalinity}
                  max={40}
                  min={30}
                  step={0.1}
                  className="w-full"
                />
                <div className="text-xs text-ocean-medium">{salinity[0]} PSU</div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-medium text-ocean-deep">Current Speed (m/s)</label>
                <Slider
                  value={currentSpeed}
                  onValueChange={setCurrentSpeed}
                  max={3}
                  min={0}
                  step={0.1}
                  className="w-full"
                />
                <div className="text-xs text-ocean-medium">{currentSpeed[0]} m/s</div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <Button 
                variant="glow" 
                onClick={() => setIsSimulationRunning(!isSimulationRunning)}
              >
                {isSimulationRunning ? (
                  <>
                    <Pause className="h-4 w-4 mr-2" />
                    Pause Simulation
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Start Simulation
                  </>
                )}
              </Button>
              <Button variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Advanced Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Metrics */}
          <Card className="lg:col-span-2 bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-accent" />
                <span>Live Ecosystem Metrics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentMetrics.map((metric, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <metric.icon className="h-5 w-5 text-ocean-medium" />
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          metric.trend === 'up' 
                            ? 'bg-green-50 text-green-600 border-green-200' 
                            : 'bg-red-50 text-red-600 border-red-200'
                        }`}
                      >
                        {metric.change}
                      </Badge>
                    </div>
                    <div className="text-xl font-bold text-ocean-deep">{metric.value}</div>
                    <div className="text-sm text-ocean-medium">{metric.name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <span>System Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {alerts.map((alert, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        alert.type === 'Critical' 
                          ? 'bg-red-50 text-red-600 border-red-200'
                          : alert.type === 'Warning'
                          ? 'bg-orange-50 text-orange-600 border-orange-200'
                          : 'bg-blue-50 text-blue-600 border-blue-200'
                      }`}
                    >
                      {alert.type}
                    </Badge>
                    <span className="text-xs text-ocean-medium">{alert.time}</span>
                  </div>
                  <p className="text-sm text-ocean-deep">{alert.message}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Scenario Library */}
        <Card className="mt-8 bg-background/60 backdrop-blur-sm border-primary-glow/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-primary" />
              <span>Simulation Scenarios</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {scenarios.map((scenario, index) => (
                <div key={index} className="p-6 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-ocean-deep">{scenario.name}</h3>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        scenario.status === 'Running' 
                          ? 'bg-blue-50 text-blue-600 border-blue-200'
                          : scenario.status === 'Completed'
                          ? 'bg-green-50 text-green-600 border-green-200'
                          : 'bg-gray-50 text-gray-600 border-gray-200'
                      }`}
                    >
                      {scenario.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-ocean-medium mb-3">{scenario.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ocean-medium">{scenario.duration}</span>
                    <Button variant="outline" size="sm">
                      {scenario.status === 'Running' ? 'View Progress' : 
                       scenario.status === 'Completed' ? 'View Results' : 'Launch'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DigitalTwin;