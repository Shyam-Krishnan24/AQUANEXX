import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Activity,
  Database,
  Download,
  Filter,
  Calendar,
  MapPin,
  Zap
} from "lucide-react";

const Analytics = () => {
  const kpiMetrics = [
    {
      title: "Species Diversity",
      value: "847",
      change: "+23",
      trend: "up",
      percentage: "+2.8%",
      period: "vs last month"
    },
    {
      title: "Water Quality Index",
      value: "8.2",
      change: "+0.3",
      trend: "up",
      percentage: "+3.8%",
      period: "vs last month"
    },
    {
      title: "Biomass Density",
      value: "145.7",
      change: "-12.3",
      trend: "down",
      percentage: "-7.8%",
      period: "vs last month"
    },
    {
      title: "Data Processing",
      value: "98.4%",
      change: "+1.2%",
      trend: "up",
      percentage: "+1.2%",
      period: "vs last month"
    }
  ];

  const regionalData = [
    { region: "North Pacific", temperature: "18.5°C", species: 234, biodiversity: 8.2, status: "Healthy" },
    { region: "Atlantic Ocean", temperature: "16.2°C", species: 198, biodiversity: 7.8, status: "Monitor" },
    { region: "Mediterranean", temperature: "22.1°C", species: 156, biodiversity: 6.9, status: "Concern" },
    { region: "Arctic Ocean", temperature: "2.8°C", species: 89, biodiversity: 9.1, status: "Healthy" },
    { region: "Indian Ocean", temperature: "24.6°C", species: 278, biodiversity: 8.7, status: "Healthy" }
  ];

  const trendData = [
    { metric: "Ocean Temperature", trend: "+0.8°C", timeframe: "10 years", impact: "High", color: "text-red-500" },
    { metric: "pH Levels", trend: "-0.1 pH", timeframe: "5 years", impact: "Medium", color: "text-orange-500" },
    { metric: "Species Migration", trend: "+15%", timeframe: "3 years", impact: "Medium", color: "text-blue-500" },
    { metric: "Coral Coverage", trend: "-23%", timeframe: "10 years", impact: "Critical", color: "text-red-600" }
  ];

  const recentReports = [
    {
      title: "Global Marine Biodiversity Report 2024",
      type: "Annual Report",
      date: "Jan 15, 2024",
      pages: "247 pages",
      status: "Published"
    },
    {
      title: "Pacific Ocean Temperature Analysis",
      type: "Research Paper",
      date: "Jan 12, 2024",
      pages: "45 pages",
      status: "Draft"
    },
    {
      title: "Species Migration Patterns Q4 2023",
      type: "Quarterly Report",
      date: "Jan 8, 2024",
      pages: "89 pages",
      status: "Published"
    }
  ];

  return (
    <div className="min-h-screen surface-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold data-gradient bg-clip-text text-transparent mb-4">
            Marine Analytics Dashboard
          </h1>
          <p className="text-xl text-ocean-medium max-w-3xl mx-auto">
            Comprehensive analytics and insights from global marine data with advanced visualization and trend analysis.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 Days
          </Button>
          <Button variant="outline">
            <MapPin className="h-4 w-4 mr-2" />
            All Regions
          </Button>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter Data
          </Button>
          <Button variant="glow" className="ml-auto">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* KPI Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiMetrics.map((metric, index) => (
            <Card key={index} className="bg-background/60 backdrop-blur-sm border-primary-glow/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-ocean-medium">{metric.title}</h3>
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                </div>
                <div className="text-2xl font-bold text-ocean-deep mb-1">{metric.value}</div>
                <div className="flex items-center space-x-2 text-sm">
                  <Badge 
                    variant="outline" 
                    className={`${
                      metric.trend === 'up' 
                        ? 'bg-green-50 text-green-600 border-green-200' 
                        : 'bg-red-50 text-red-600 border-red-200'
                    }`}
                  >
                    {metric.percentage}
                  </Badge>
                  <span className="text-ocean-medium">{metric.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Regional Analysis */}
          <Card className="lg:col-span-2 bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Regional Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regionalData.map((region, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-ocean-deep">{region.region}</h4>
                      <Badge 
                        variant="outline" 
                        className={`${
                          region.status === 'Healthy' 
                            ? 'bg-green-50 text-green-600 border-green-200'
                            : region.status === 'Monitor'
                            ? 'bg-yellow-50 text-yellow-600 border-yellow-200'
                            : 'bg-red-50 text-red-600 border-red-200'
                        }`}
                      >
                        {region.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-ocean-medium">Temperature:</span>
                        <div className="font-semibold text-ocean-deep">{region.temperature}</div>
                      </div>
                      <div>
                        <span className="text-ocean-medium">Species:</span>
                        <div className="font-semibold text-ocean-deep">{region.species}</div>
                      </div>
                      <div>
                        <span className="text-ocean-medium">Biodiversity:</span>
                        <div className="font-semibold text-ocean-deep">{region.biodiversity}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trend Analysis */}
          <Card className="bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span>Trend Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trendData.map((trend, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-ocean-deep text-sm">{trend.metric}</h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        trend.impact === 'Critical' 
                          ? 'bg-red-50 text-red-600 border-red-200'
                          : trend.impact === 'High'
                          ? 'bg-orange-50 text-orange-600 border-orange-200'
                          : 'bg-yellow-50 text-yellow-600 border-yellow-200'
                      }`}
                    >
                      {trend.impact}
                    </Badge>
                  </div>
                  <div className={`text-lg font-bold ${trend.color}`}>{trend.trend}</div>
                  <div className="text-xs text-ocean-medium">over {trend.timeframe}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Data Visualization Chart Placeholder */}
        <Card className="mt-8 bg-background/60 backdrop-blur-sm border-primary-glow/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-seaweed" />
              <span>Interactive Data Visualization</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-ocean-surface via-ocean-light/20 to-ocean-medium/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-ocean-medium mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-ocean-deep mb-2">Advanced Chart Component</h3>
                <p className="text-ocean-medium">Interactive data visualization will be rendered here</p>
                <Button variant="outline" className="mt-4">
                  <Zap className="h-4 w-4 mr-2" />
                  Load Chart Data
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card className="mt-8 bg-background/60 backdrop-blur-sm border-primary-glow/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-primary" />
              <span>Recent Reports</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {recentReports.map((report, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {report.type}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        report.status === 'Published' 
                          ? 'bg-green-50 text-green-600 border-green-200' 
                          : 'bg-orange-50 text-orange-600 border-orange-200'
                      }`}
                    >
                      {report.status}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-ocean-deep mb-2">{report.title}</h4>
                  <div className="flex items-center justify-between text-sm text-ocean-medium">
                    <span>{report.date}</span>
                    <span>{report.pages}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-3">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;