import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import SEOServices from "./pages/SEOServices";
import GoogleAds from "./pages/GoogleAds";
import MetaAds from "./pages/MetaAds";
import LeadGeneration from "./pages/LeadGeneration";
import GoogleReviews from "./pages/GoogleReviews";
import VideoEditing from "./pages/VideoEditing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:category" element={<Services />} />
          <Route path="/seo-services" element={<SEOServices />} />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route path="/meta-ads" element={<MetaAds />} />
          <Route path="/lead-generation" element={<LeadGeneration />} />
          <Route path="/google-reviews" element={<GoogleReviews />} />
          <Route path="/video-editing" element={<VideoEditing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
