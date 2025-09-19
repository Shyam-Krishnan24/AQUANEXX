import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Dna, 
  FlaskConical, 
  BarChart3, 
  Activity,
  Microscope,
  Database,
  Clock,
  MapPin,
  TrendingUp,
  Download
} from "lucide-react";

const EdnaAnalysis = () => {
  const sampleData = [
    {
      id: "SMP-2024-001",
      location: "Great Barrier Reef",
      depth: "15m",
      status: "Processing",
      speciesDetected: 47,
      biodiversityIndex: 3.2,
      collectionDate: "2024-01-15"
    },
    {
      id: "SMP-2024-002",
      location: "Monterey Bay",
      depth: "8m",
      status: "Completed",
      speciesDetected: 63,
      biodiversityIndex: 3.8,
      collectionDate: "2024-01-14"
    },
    {
      id: "SMP-2024-003",
      location: "Baltic Sea",
      depth: "22m",
      status: "Sequencing",
      speciesDetected: 29,
      biodiversityIndex: 2.1,
      collectionDate: "2024-01-13"
    }
  ];

  const detectedSpecies = [
    { name: "Thunnus albacares", commonName: "Yellowfin Tuna", abundance: "High", reads: 1247 },
    { name: "Chelonia mydas", commonName: "Green Sea Turtle", abundance: "Medium", reads: 834 },
    { name: "Acropora cervicornis", commonName: "Staghorn Coral", abundance: "Low", reads: 456 },
    { name: "Hippocampus kuda", commonName: "Common Seahorse", abundance: "Very Low", reads: 123 }
  ];

  const analysisSteps = [
    { step: "Sample Collection", status: "Completed", progress: 100 },
    { step: "DNA Extraction", status: "Completed", progress: 100 },
    { step: "PCR Amplification", status: "Completed", progress: 100 },
    { step: "Sequencing", status: "In Progress", progress: 75 },
    { step: "Bioinformatics Analysis", status: "Pending", progress: 0 },
    { step: "Species Identification", status: "Pending", progress: 0 }
  ];

  return (
    <div className="min-h-screen surface-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold data-gradient bg-clip-text text-transparent mb-4">
            Environmental DNA Analysis
          </h1>
          <p className="text-xl text-ocean-medium max-w-3xl mx-auto">
            Comprehensive eDNA sequencing and analysis for biodiversity assessment and species monitoring in marine ecosystems.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardContent className="p-6 text-center">
              <FlaskConical className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-ocean-deep">1,247</div>
              <div className="text-sm text-ocean-medium">Active Samples</div>
            </CardContent>
          </Card>
          <Card className="bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardContent className="p-6 text-center">
              <Dna className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-ocean-deep">847</div>
              <div className="text-sm text-ocean-medium">Species Identified</div>
            </CardContent>
          </Card>
          <Card className="bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardContent className="p-6 text-center">
              <Database className="h-8 w-8 text-seaweed mx-auto mb-2" />
              <div className="text-2xl font-bold text-ocean-deep">98.4%</div>
              <div className="text-sm text-ocean-medium">Accuracy Rate</div>
            </CardContent>
          </Card>
          <Card className="bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-coral mx-auto mb-2" />
              <div className="text-2xl font-bold text-ocean-deep">12.3M</div>
              <div className="text-sm text-ocean-medium">DNA Sequences</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sample Status */}
          <Card className="lg:col-span-2 bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FlaskConical className="h-5 w-5 text-accent" />
                <span>Sample Processing Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sampleData.map((sample, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-ocean-deep">{sample.id}</h4>
                        <div className="flex items-center space-x-4 text-sm text-ocean-medium">
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {sample.location}
                          </span>
                          <span>Depth: {sample.depth}</span>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${
                          sample.status === 'Completed' 
                            ? 'bg-green-50 text-green-600 border-green-200'
                            : sample.status === 'Processing'
                            ? 'bg-blue-50 text-blue-600 border-blue-200'
                            : 'bg-orange-50 text-orange-600 border-orange-200'
                        }`}
                      >
                        {sample.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-ocean-medium">Species Detected:</span>
                        <div className="font-semibold text-ocean-deep">{sample.speciesDetected}</div>
                      </div>
                      <div>
                        <span className="text-ocean-medium">Diversity Index:</span>
                        <div className="font-semibold text-ocean-deep">{sample.biodiversityIndex}</div>
                      </div>
                      <div>
                        <span className="text-ocean-medium">Collection Date:</span>
                        <div className="font-semibold text-ocean-deep">{sample.collectionDate}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Download className="h-4 w-4 mr-2" />
                Export Sample Data
              </Button>
            </CardContent>
          </Card>

          {/* Analysis Pipeline */}
          <Card className="bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <span>Analysis Pipeline</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {analysisSteps.map((step, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ocean-deep">{step.step}</span>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        step.status === 'Completed' 
                          ? 'bg-green-50 text-green-600'
                          : step.status === 'In Progress'
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      {step.status}
                    </Badge>
                  </div>
                  <Progress value={step.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Species Detection Results */}
        <Card className="mt-8 bg-background/60 backdrop-blur-sm border-primary-glow/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Microscope className="h-5 w-5 text-seaweed" />
              <span>Detected Species</span>
              <Badge variant="outline" className="bg-seaweed/10 text-seaweed">
                Latest Results
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {detectedSpecies.map((species, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-ocean-deep text-sm mb-1">{species.name}</h4>
                  <p className="text-sm text-ocean-medium mb-2">{species.commonName}</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-ocean-medium">Abundance:</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          species.abundance === 'High' 
                            ? 'bg-green-50 text-green-600'
                            : species.abundance === 'Medium'
                            ? 'bg-yellow-50 text-yellow-600'
                            : species.abundance === 'Low'
                            ? 'bg-orange-50 text-orange-600'
                            : 'bg-red-50 text-red-600'
                        }`}
                      >
                        {species.abundance}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ocean-medium">Reads:</span>
                      <span className="font-medium">{species.reads}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="glow">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Detailed Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EdnaAnalysis;