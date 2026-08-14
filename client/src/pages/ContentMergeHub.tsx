import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, Layers, GitMerge, FileCheck, ShieldAlert, ArrowRight } from "lucide-react";

export default function ContentMergeHub() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Merge & Revision Hub</span>
        </div>
      </nav>

      <main className="container max-w-5xl py-12 space-y-12">
        {/* Header Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <GitMerge className="w-8 h-8 text-accent" />
            <h1 className="text-4xl font-bold text-accent">Content Merge & Revision Hub</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Prepared staging environment for integrating updated clinical dossiers, institutional failure timelines, and external site details into a unified master resource while maintaining strict separation from quarantined protocols.
          </p>
        </section>

        {/* Status Callout */}
        <section>
          <div className="directive-box">
            <div className="flex gap-4">
              <ShieldAlert className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">MERGE GOVERNANCE & PROTOCOL INTEGRITY</h3>
                <p className="text-foreground text-sm mb-2">
                  When combining material from external portals or previous Manus chat versions, all incoming text must be cross-verified against established genomic files (STX16, PMS2, MTHFR/COMT). Outdated rescue guidance (such as generalized saline protocols) remains permanently quarantined.
                </p>
                <p className="text-foreground text-xs font-semibold">
                  Status: Staging ready for external content ingestion and section re-indexing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Merge Workstreams */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-accent border-b border-border pb-2">Active Merge Workstreams</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Layers className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-accent">1. External Site Detail Intake</h3>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                Ingesting supplementary institutional records, care coordination updates, and departmental escalation logs from external user files.
              </p>
              <div className="text-xs text-muted-foreground pt-2 border-t border-border flex justify-between items-center">
                <span>Target: Unified Master Dossier</span>
                <span className="text-accent font-semibold">Ready</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6 space-y-4">
              <div className="flex items-center gap-3">
                <FileCheck className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-accent">2. Protocol Firewall Validation</h3>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                Enforcing absolute mechanism mapping compliance across all newly merged departmental protocols, ensuring zero unmapped interventions.
              </p>
              <div className="text-xs text-muted-foreground pt-2 border-t border-border flex justify-between items-center">
                <span>Target: Safety Firewall Compliance</span>
                <span className="text-accent font-semibold">Enforced</span>
              </div>
            </Card>
          </div>
        </section>

        {/* Action Footer */}
        <section className="bg-card border border-border p-8 rounded-lg text-center space-y-4">
          <h3 className="text-xl font-bold text-accent">Ready to Execute Merger?</h3>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Once external site details are provided in chat, they will be processed through this hub, formatted according to the Nocturnal Luxury clinical aesthetic, and packaged into the final deployable revision.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link href="/directive" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 hover:opacity-90 transition">
              View Clinical Directive <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
