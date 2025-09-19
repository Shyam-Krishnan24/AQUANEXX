import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/Dashboard";
import DataVisualization from "@/components/DataVisualization";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Dashboard />
        <DataVisualization />
      </main>
    </div>
  );
};

export default Index;
