import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Brain, 
  Search, 
  Camera, 
  FileImage, 
  Microscope,
  TrendingUp,
  Database,
  Zap,
  CheckCircle,
  Upload
} from "lucide-react";

const Taxonomic = () => {
  const recentClassifications = [
    {
      species: "Thunnus albacares",
      commonName: "Yellowfin Tuna",
      confidence: 96.8,
      image: "yellowfin-tuna.jpg",
      location: "Pacific Ocean",
      date: "2 hours ago"
    },
    {
      species: "Chelonia mydas",
      commonName: "Green Sea Turtle",
      confidence: 94.2,
      image: "green-turtle.jpg",
      location: "Caribbean Sea",
      date: "4 hours ago"
    },
    {
      species: "Delphinapterus leucas",
      commonName: "Beluga Whale",
      confidence: 98.5,
      image: "beluga-whale.jpg",
      location: "Arctic Ocean",
      date: "6 hours ago"
    },
    {
      species: "Hippocampus kuda",
      commonName: "Common Seahorse",
      confidence: 92.1,
      image: "seahorse.jpg",
      location: "Indo-Pacific",
      date: "8 hours ago"
    }
  ];

  const modelStats = [
    { name: "Fish Classification", accuracy: "96.4%", samples: "2.3M", status: "Active" },
    { name: "Marine Mammals", accuracy: "94.8%", samples: "890K", status: "Active" },
    { name: "Coral Species", accuracy: "91.2%", samples: "1.2M", status: "Training" },
    { name: "Plankton ID", accuracy: "89.7%", samples: "5.1M", status: "Active" }
  ];

  return (
    <div className="min-h-screen surface-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold data-gradient bg-clip-text text-transparent mb-4">
            AI-Powered Taxonomic Classification
          </h1>
          <p className="text-xl text-ocean-medium max-w-3xl mx-auto">
            Advanced machine learning models for accurate identification and classification of marine species from visual data.
          </p>
        </div>

        {/* Upload Section */}
        <Card className="mb-8 bg-background/60 backdrop-blur-sm border-primary-glow/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-accent" />
              <span>Species Identification</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-2 border-dashed border-primary-glow/30 rounded-lg p-8 text-center hover:border-primary-glow/50 transition-colors">
                  <FileImage className="h-12 w-12 text-ocean-medium mx-auto mb-4" />
                  <p className="text-ocean-medium mb-2">Drop images here or click to upload</p>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Files
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Input placeholder="Enter species name or characteristics..." className="flex-1" />
                  <Button variant="glow">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-ocean-deep mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-20 flex-col">
                    <Microscope className="h-6 w-6 mb-2" />
                    <span className="text-sm">Bulk Analysis</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Brain className="h-6 w-6 mb-2" />
                    <span className="text-sm">Model Training</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Database className="h-6 w-6 mb-2" />
                    <span className="text-sm">Species Database</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <TrendingUp className="h-6 w-6 mb-2" />
                    <span className="text-sm">Analytics</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Classifications */}
          <Card className="lg:col-span-2 bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Recent Classifications</span>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-600">
                  Live Results
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentClassifications.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                    <div className="h-16 w-16 bg-ocean-light/20 rounded-lg flex items-center justify-center">
                      <Camera className="h-8 w-8 text-ocean-medium" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-ocean-deep">{item.species}</h4>
                        <Badge variant="outline" className="text-xs">
                          {item.confidence}% confidence
                        </Badge>
                      </div>
                      <p className="text-sm text-ocean-medium mb-1">{item.commonName}</p>
                      <div className="flex items-center space-x-4 text-xs text-ocean-medium">
                        <span>{item.location}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Model Performance */}
          <Card className="bg-background/60 backdrop-blur-sm border-primary-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-primary" />
                <span>AI Models</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {modelStats.map((model, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-ocean-deep text-sm">{model.name}</h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        model.status === 'Active' 
                          ? 'bg-green-50 text-green-600 border-green-200' 
                          : 'bg-orange-50 text-orange-600 border-orange-200'
                      }`}
                    >
                      {model.status}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-xs text-ocean-medium">
                    <div className="flex justify-between">
                      <span>Accuracy:</span>
                      <span className="font-medium">{model.accuracy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Training Samples:</span>
                      <span className="font-medium">{model.samples}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button variant="glow" className="w-full mt-4">
                <Zap className="h-4 w-4 mr-2" />
                Optimize Models
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Taxonomic;