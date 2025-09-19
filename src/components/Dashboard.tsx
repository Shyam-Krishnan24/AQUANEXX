import ModuleCard from "@/components/ModuleCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Satellite, 
  Database, 
  Brain, 
  Activity, 
  Microscope, 
  Fish, 
  Globe, 
  Workflow,
  BarChart3,
  Cpu,
  Waves,
  Settings
} from "lucide-react";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
            Integrated Marine Intelligence Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Monitor, analyze, and predict marine ecosystem behavior through our comprehensive suite of data collection and AI-powered analysis tools.
          </p>
        </div>

        {/* Real-time Status Bar */}
        <Card className="mb-8 border-accent/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-accent" />
                <span>System Status</span>
              </CardTitle>
              <Badge variant="outline" className="bg-accent/10 text-accent">
                All Systems Operational
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center p-3 bg-accent/5 rounded-lg">
                <div className="text-2xl font-bold text-accent">142</div>
                <div className="text-xs text-muted-foreground">Active Sensors</div>
              </div>
              <div className="text-center p-3 bg-coral/10 rounded-lg">
                <div className="text-2xl font-bold text-coral">23</div>
                <div className="text-xs text-muted-foreground">AUVs Deployed</div>
              </div>
              <div className="text-center p-3 bg-seaweed/10 rounded-lg">
                <div className="text-2xl font-bold text-seaweed">8.2TB</div>
                <div className="text-xs text-muted-foreground">Data Today</div>
              </div>
              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">98.7%</div>
                <div className="text-xs text-muted-foreground">AI Confidence</div>
              </div>
              <div className="text-center p-3 bg-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-accent">1,247</div>
                <div className="text-xs text-muted-foreground">Species ID'd</div>
              </div>
              <div className="text-center p-3 bg-ocean-light/20 rounded-lg">
                <div className="text-2xl font-bold text-ocean-medium">Live</div>
                <div className="text-xs text-muted-foreground">Digital Twin</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ModuleCard
            title="Data Collection Hub"
            description="Satellite, sensor, and AUV data aggregation"
            icon={Satellite}
            status="active"
            metrics={[
              { label: "Data Sources", value: "156" },
              { label: "Uptime", value: "99.8%" }
            ]}
          />

          <ModuleCard
            title="AI Analytics Engine"
            description="Multi-source data correlation and insights"
            icon={Brain}
            status="processing"
            metrics={[
              { label: "Models Running", value: "12" },
              { label: "Predictions/hr", value: "2.4K" }
            ]}
          />

          <ModuleCard
            title="Taxonomic Classification"
            description="Species identification and tracking"
            icon={Microscope}
            status="active"
            metrics={[
              { label: "Species DB", value: "15K+" },
              { label: "Accuracy", value: "94.2%" }
            ]}
          />

          <ModuleCard
            title="eDNA Analysis System"
            description="Environmental DNA processing and analysis"
            icon={Database}
            status="active"
            metrics={[
              { label: "Samples/day", value: "340" },
              { label: "Processing Time", value: "2.1hr" }
            ]}
          />

          <ModuleCard
            title="Otolith Morphology"
            description="Fish age and growth pattern analysis"
            icon={Fish}
            status="standby"
            metrics={[
              { label: "Specimens", value: "8.9K" },
              { label: "Age Classes", value: "45" }
            ]}
          />

          <ModuleCard
            title="Digital Twin Engine"
            description="Real-time ecosystem simulation"
            icon={Globe}
            status="processing"
            metrics={[
              { label: "Scenarios", value: "23" },
              { label: "Resolution", value: "1km²" }
            ]}
          />
        </div>

        {/* Workflow and Integration */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-dashed border-accent/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Workflow className="h-5 w-5 text-accent" />
                <span>n8n Automation Workflows</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded">
                  <span className="text-sm">Data Pipeline Automation</span>
                  <Badge variant="outline" className="bg-accent/10 text-accent">Running</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded">
                  <span className="text-sm">Alert Notification System</span>
                  <Badge variant="outline" className="bg-accent/10 text-accent">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded">
                  <span className="text-sm">Report Generation</span>
                  <Badge variant="outline" className="bg-seaweed/20 text-seaweed">Scheduled</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Settings className="h-4 w-4 mr-2" />
                Configure Workflows
              </Button>
            </CardContent>
          </Card>

          <Card className="border-dashed border-primary/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>Power BI Integration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded">
                  <span className="text-sm">Real-time Dashboards</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary">Live</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded">
                  <span className="text-sm">Historical Trends</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary">Updated</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded">
                  <span className="text-sm">Custom Reports</span>
                  <Badge variant="outline" className="bg-coral/20 text-coral">Ready</Badge>
                </div>
              </div>
              <Button variant="data" className="w-full mt-4">
                <BarChart3 className="h-4 w-4 mr-2" />
                Launch Power BI
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;