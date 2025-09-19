import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Satellite, 
  Activity, 
  Database, 
  Waves, 
  MapPin, 
  Zap,
  Signal,
  Download,
  Clock,
  CheckCircle
} from "lucide-react";

const DataCollection = () => {
  const dataSources = [
    {
      name: "Satellite Network",
      icon: Satellite,
      status: "Active",
      count: "47 Satellites",
      dataRate: "2.3 TB/day",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      name: "Ocean Sensors",
      icon: Activity,
      status: "Online",
      count: "1,247 Sensors",
      dataRate: "850 GB/day",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      name: "AUV Fleet",
      icon: Waves,
      status: "Deployed",
      count: "23 Vehicles",
      dataRate: "320 GB/day",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      name: "Research Vessels",
      icon: MapPin,
      status: "Active",
      count: "8 Vessels",
      dataRate: "180 GB/day",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  const recentData = [
    { time: "2 mins ago", source: "Satellite", type: "Ocean Temperature", size: "45 MB" },
    { time: "5 mins ago", source: "AUV-07", type: "Species Detection", size: "128 MB" },
    { time: "8 mins ago", source: "Sensor Grid", type: "pH Levels", size: "23 MB" },
    { time: "12 mins ago", source: "Research Vessel", type: "Water Samples", size: "67 MB" },
    { time: "15 mins ago", source: "Satellite", type: "Chlorophyll Data", size: "89 MB" },
  ];

  return (
    <div className="min-h-screen surface-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold data-gradient bg-clip-text text-transparent mb-4">
            Marine Data Collection Hub
          </h1>
          <p className="text-xl text-ocean-medium max-w-3xl mx-auto">
            Real-time data ingestion from satellites, sensors, AUVs, and research vessels across global marine environments.
          </p>
        </div>

        {/* Status Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dataSources.map((source, index) => (
            <Card key={index} className="bg-background/60 backdrop-blur-sm border-primary-glow/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${source.bgColor}`}>
                    <source.icon className={`h-6 w-6 ${source.color}`} />
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {source.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-ocean-deep mb-2">{source.name}</h3>
                <div className="space-y-1 text-sm text-ocean-medium">
                  <div className="flex justify-between">
                    <span>Count:</span>
                    <span className="font-medium">{source.count}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Rate:</span>
                    <span className="font-medium">{source.dataRate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Data Stream */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Real-time Feed */}
          <Card className="lg:col-span-2 bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Signal className="h-5 w-5 text-accent" />
                <span>Live Data Stream</span>
                <Badge variant="outline" className="bg-accent/10 text-accent">
                  Real-time
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-accent rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-medium text-ocean-deep">{item.type}</div>
                        <div className="text-sm text-ocean-medium">{item.source}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-ocean-deep">{item.size}</div>
                      <div className="text-sm text-ocean-medium flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Download className="h-4 w-4 mr-2" />
                Export Data Log
              </Button>
            </CardContent>
          </Card>

          {/* System Stats */}
          <Card className="bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-primary" />
                <span>System Statistics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-ocean-medium">Storage Used</span>
                  <span className="text-sm font-medium">67%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-ocean-medium">Processing Queue</span>
                  <span className="text-sm font-medium">24 items</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-ocean-medium">Network Load</span>
                  <span className="text-sm font-medium">89%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3.2 TB</div>
                  <div className="text-sm text-ocean-medium">Total Data Today</div>
                </div>
              </div>

              <Button variant="glow" className="w-full">
                <Zap className="h-4 w-4 mr-2" />
                Optimize Processing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataCollection;