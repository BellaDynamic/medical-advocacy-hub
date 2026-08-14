import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, AlertTriangle } from "lucide-react";

export default function RescueProtocol() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Rescue & Stabilization Protocol (ARCHIVED / SUPERSEDED)</h1>
        </div>
      </nav>

      <main className="container max-w-4xl py-12">
        <section className="mb-12">
          <div className="danger-box p-6 rounded border border-red-500 bg-red-950/20">
            <div className="flex gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-3">CRITICAL NOTICE: CONTENT QUARANTINED & SUPERSEDED</h3>
                <p className="text-foreground text-base mb-4 font-semibold">
                  The previous rescue protocol and acute stabilization guidance hosted here are officially recognized as <strong>outdated, inaccurate, and potentially hazardous</strong>. Specifically, generic saline recommendations and prior acute rescue instructions do not reflect safe, current clinical standards for this patient profile and must NOT be used as a general clinical directive.
                </p>
                <p className="text-muted-foreground text-sm">
                  This page is maintained strictly as an archived record prior to data export and site migration. All clinical interventions must be determined entirely by qualified attending specialists and emergency physicians based on real-time physiological assessment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
