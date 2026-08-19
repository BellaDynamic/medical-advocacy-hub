import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import GenomicProtocol from "./pages/GenomicProtocol";
import VUS from "./pages/VUS";
import SafetyFirewall from "./pages/SafetyFirewall";
import CareCoordination from "./pages/CareCoordination";
import ProviderEscalation from "./pages/ProviderEscalation";
import RescueProtocol from "./pages/RescueProtocol";
import InstitutionalFailures from "./pages/InstitutionalFailures";
import SurveillanceCalendar from "./pages/SurveillanceCalendar";
import ClinicalDirective from "./pages/ClinicalDirective";
import RiskManagement from "./pages/RiskManagement";
import EvidenceVault from "./pages/EvidenceVault";
import ClinicalOversight from "./pages/ClinicalOversight";
import ComprehensiveDirective from "./pages/ComprehensiveDirective";
import ContentMergeHub from "./pages/ContentMergeHub";
import MandatedLabs from "./pages/MandatedLabs";
import SystemEvidenceMap from "./pages/SystemEvidenceMap";
import SourceVault from "./pages/SourceVault";
import CoordinationRecord from "./pages/CoordinationRecord";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/protocol"} component={GenomicProtocol} />
      <Route path={"/vus"} component={VUS} />
      <Route path={"/safety"} component={SafetyFirewall} />
      <Route path={"/coordination"} component={CareCoordination} />
      <Route path={"/escalation"} component={ProviderEscalation} />
      <Route path={"/rescue"} component={RescueProtocol} />
      <Route path={"/failures"} component={InstitutionalFailures} />
      <Route path={"/surveillance"} component={SurveillanceCalendar} />
      <Route path={"/directive"} component={ClinicalDirective} />
      <Route path={"/risk-management"} component={RiskManagement} />
      <Route path={"/evidence-vault"} component={EvidenceVault} />
      <Route path={"/clinical-oversight"} component={ClinicalOversight} />
      <Route path={"/comprehensive-directive"} component={ComprehensiveDirective} />
      <Route path={"/merge-hub"} component={ContentMergeHub} />
      <Route path={"/mandated-labs"} component={MandatedLabs} />
      <Route path={"/system-map"} component={SystemEvidenceMap} />
      <Route path={"/source-vault"} component={SourceVault} />
      <Route path={"/coordination-record"} component={CoordinationRecord} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
