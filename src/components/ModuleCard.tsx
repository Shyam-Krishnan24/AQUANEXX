import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: "active" | "processing" | "standby";
  metrics?: Array<{ label: string; value: string; }>;
  className?: string;
}

const ModuleCard = ({ title, description, icon: Icon, status, metrics, className }: ModuleCardProps) => {
  const statusColors = {
    active: "bg-accent text-accent-foreground",
    processing: "bg-coral text-primary-foreground",
    standby: "bg-muted text-muted-foreground"
  };

  return (
    <Card className={cn("group hover:shadow-xl transition-all duration-300 hover:-translate-y-1", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 ocean-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="text-sm">{description}</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className={statusColors[status]}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {metrics && (
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-lg font-semibold text-ocean-medium">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex space-x-2">
          <Button variant="default" size="sm" className="flex-1">
            View Details
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Configure
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;