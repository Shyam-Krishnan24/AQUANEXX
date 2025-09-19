import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import DataCollection from "./pages/DataCollection";
import Taxonomic from "./pages/Taxonomic";
import EdnaAnalysis from "./pages/EdnaAnalysis";
import OtolithAnalysis from "./pages/OtolithAnalysis";
import DigitalTwin from "./pages/DigitalTwin";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="data-collection" element={<DataCollection />} />
            <Route path="taxonomic" element={<Taxonomic />} />
            <Route path="edna" element={<EdnaAnalysis />} />
            <Route path="otolith" element={<OtolithAnalysis />} />
            <Route path="digital-twin" element={<DigitalTwin />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
