import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AsesoriaConstruccion from "./pages/servicios/AsesoriaConstruccion";
import ConsultoriaAmbiental from "./pages/servicios/ConsultoriaAmbiental";
import MarketingDigital from "./pages/servicios/MarketingDigital";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicios/asesoria-construccion" element={<AsesoriaConstruccion />} />
            <Route path="/servicios/consultoria-ambiental" element={<ConsultoriaAmbiental />} />
            <Route path="/servicios/marketing-digital" element={<MarketingDigital />} />
            {/* Legacy routes - redirect to new structure */}
            <Route path="/asesoria-construccion" element={<Index />} />
            <Route path="/consultoria-ambiental" element={<Index />} />
            <Route path="/marketing-digital" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
