import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Microscope, 
  Camera, 
  Ruler, 
  Calendar,
  TrendingUp,
  FileImage,
  BarChart3,
  Download,
  Zap,
  Eye
} from "lucide-react";

const OtolithAnalysis = () => {
  const recentAnalyses = [
    {
      id: "OTO-2024-045",
      species: "Atlantic Cod",
      age: "3.2 years",
      length: "42.5 cm",
      growthRate: "Fast",
      confidence: 94.2,
      location: "North Sea",
      status: "Completed"
    },
    {
      id: "OTO-2024-046",
      species: "Yellowfin Tuna",
      age: "2.8 years",
      length: "89.3 cm",
      growthRate: "Normal",
      confidence: 97.1,
      location: "Pacific Ocean",
      status: "Processing"
    },
    {
      id: "OTO-2024-047",
      species: "Red Snapper",
      age: "5.1 years",
      length: "55.7 cm",
      growthRate: "Slow",
      confidence: 91.8,
      location: "Gulf of Mexico",
      status: "Completed"
    }
  ];

  const morphologyMetrics = [
    { metric: "Otolith Length", value: "12.4 mm", range: "8.2-18.6 mm" },
    { metric: "Otolith Width", value: "8.7 mm", range: "5.1-12.3 mm" },
    { metric: "Perimeter", value: "34.2 mm", range: "22.8-48.9 mm" },
    { metric: "Surface Area", value: "87.3 mm²", range: "42.1-156.7 mm²" },
    { metric: "Roundness", value: "0.73", range: "0.45-0.89" },
    { metric: "Aspect Ratio", value: "1.43", range: "1.12-2.01" }
  ];

  const ageGroups = [
    { age: "0-1 years", count: 147, percentage: 23 },
    { age: "1-3 years", count: 312, percentage: 48 },
    { age: "3-5 years", count: 158, percentage: 24 },
    { age: "5+ years", count: 33, percentage: 5 }
  ];

  return (
    <div className="min-h-screen surface-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold data-gradient bg-clip-text text-transparent mb-4">
            Otolith Morphology Analysis
          </h1>
          <p className="text-xl text-ocean-medium max-w-3xl mx-auto">
            Advanced computer vision and machine learning for automated fish age determination and growth analysis through otolith examination.
          </p>
        </div>

        {/* Analysis Tools */}
        <Card className="mb-8 bg-background/60 backdrop-blur-sm border-primary-glow/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-accent" />
              <span>Otolith Analysis Tools</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <FileImage className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-ocean-deep mb-2">Image Upload</h3>
                <p className="text-sm text-ocean-medium mb-4">Upload otolith microscopy images for analysis</p>
                <Button variant="outline" className="w-full">
                  Upload Images
                </Button>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Ruler className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-ocean-deep mb-2">Morphometry</h3>
                <p className="text-sm text-ocean-medium mb-4">Automated measurement and shape analysis</p>
                <Button variant="outline" className="w-full">
                  Start Analysis
                </Button>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Calendar className="h-12 w-12 text-seaweed mx-auto mb-4" />
                <h3 className="font-semibold text-ocean-deep mb-2">Age Estimation</h3>
                <p className="text-sm text-ocean-medium mb-4">AI-powered age determination from growth rings</p>
                <Button variant="outline" className="w-full">
                  Estimate Age
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Analyses */}
          <Card className="lg:col-span-2 bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Microscope className="h-5 w-5 text-primary" />
                  <span>Recent Analyses</span>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  650 samples this week
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAnalyses.map((analysis, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-ocean-deep">{analysis.id}</h4>
                        <p className="text-sm text-ocean-medium">{analysis.species} • {analysis.location}</p>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${
                          analysis.status === 'Completed' 
                            ? 'bg-green-50 text-green-600 border-green-200'
                            : 'bg-blue-50 text-blue-600 border-blue-200'
                        }`}
                      >
                        {analysis.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-ocean-medium">Age:</span>
                        <div className="font-semibold text-ocean-deep">{analysis.age}</div>
                      </div>
                      <div>
                        <span className="text-ocean-medium">Length:</span>
                        <div className="font-semibold text-ocean-deep">{analysis.length}</div>
                      </div>
                      <div>
                        <span className="text-ocean-medium">Growth Rate:</span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            analysis.growthRate === 'Fast' 
                              ? 'bg-green-50 text-green-600'
                              : analysis.growthRate === 'Normal'
                              ? 'bg-blue-50 text-blue-600'
                              : 'bg-orange-50 text-orange-600'
                          }`}
                        >
                          {analysis.growthRate}
                        </Badge>
                      </div>
                      <div>
                        <span className="text-ocean-medium">Confidence:</span>
                        <div className="font-semibold text-ocean-deep">{analysis.confidence}%</div>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        View Images
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Export Data
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Morphology Metrics */}
          <Card className="bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Ruler className="h-5 w-5 text-accent" />
                <span>Morphology Metrics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {morphologyMetrics.map((metric, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-ocean-deep">{metric.metric}</span>
                    <span className="text-sm font-bold text-primary">{metric.value}</span>
                  </div>
                  <div className="text-xs text-ocean-medium">
                    Range: {metric.range}
                  </div>
                </div>
              ))}
              
              <Button variant="glow" className="w-full mt-4">
                <Zap className="h-4 w-4 mr-2" />
                Run Batch Analysis
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Age Distribution */}
        <Card className="mt-8 bg-background/60 backdrop-blur-sm border-primary-glow/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-seaweed" />
              <span>Age Distribution Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ageGroups.map((group, index) => (
                <div key={index} className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-ocean-deep mb-2">{group.count}</div>
                  <div className="text-sm text-ocean-medium mb-3">{group.age}</div>
                  <Progress value={group.percentage} className="h-2 mb-2" />
                  <div className="text-xs text-ocean-medium">{group.percentage}% of total</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="glow" className="mr-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                Growth Trend Analysis
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OtolithAnalysis;