import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { AlertTriangle, FileText, Shield, Clock, Users, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Archival Banner */}
      <div className="bg-card border-b border-primary/40 py-2 px-4 text-center text-accent text-sm font-medium">
        ARCHIVAL DRAFT — Awaiting clinical update & merger. Outdated acute/saline rescue protocols have been quarantined.
      </div>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-accent">Medical Advocacy Hub</h1>
          <div className="flex gap-4">
            <Link href="/protocol" className="text-foreground hover:text-accent transition">
              Protocol
            </Link>
            <Link href="/vus" className="text-foreground hover:text-accent transition">
              VUS
            </Link>
            <Link href="/safety" className="text-foreground hover:text-accent transition">
              Safety
            </Link>
            <Link href="/coordination" className="text-foreground hover:text-accent transition">
              Care Coordination
            </Link>
            <Link href="/escalation" className="text-foreground hover:text-accent transition">
              Escalation
            </Link>
            <Link href="/rescue" className="text-foreground hover:text-accent transition">
              Rescue
            </Link>
            <Link href="/failures" className="text-foreground hover:text-accent transition">
              Failures
            </Link>
            <Link href="/surveillance" className="text-foreground hover:text-accent transition">
              Surveillance
            </Link>
            <Link href="/directive" className="text-foreground hover:text-accent transition">
              Directive
            </Link>
            <Link href="/risk-management" className="text-foreground hover:text-accent transition">
              Risk Management
            </Link>
            <Link href="/merge-hub" className="text-accent hover:underline transition font-semibold">
              Merge Hub
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-card to-background py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-accent leading-tight">
                Clinical Mandate for Genomic Safety
              </h2>
              <p className="text-xl text-muted-foreground">
                A unified, legally binding directive documenting confirmed genomic pathology, mandatory provider protocols, and institutional accountability.
              </p>
            </div>

            {/* Critical Alert */}
            <div className="critical-box">
              <div className="flex gap-4">
                <AlertTriangle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">MANDATORY SYSTEM DIRECTIVE</h3>
                  <p className="text-foreground">
                    This patient presents with a non-standard biological engine requiring mandatory genomic safety mapping before any clinical intervention. Standard clinical pathways, empirical radiological preps, and standardized procedural care models are mathematically and chemically guaranteed to induce severe systemic cascades due to absolute pathway contradictions.
                  </p>
                </div>
              </div>
            </div>

            {/* Purpose Statement */}
            <div className="clinical-section">
              <h3 className="clinical-header">Purpose & Scope</h3>
              <div className="space-y-4 text-foreground">
                <p>
                  This site documents a unified clinical directive synthesizing confirmed genomic pathology (STX16 deletion/PHP1b and PMS2 deletion/Lynch Syndrome), institutional failure documentation, and mandatory provider protocols.
                </p>
                <p>
                  It applies to Brandy Bianchini and family members with shared genetic diseases and serves as a formal, legally and clinically binding firewall for all diagnostic and therapeutic interventions.
                </p>
                <p>
                  This document is intended for healthcare providers, institutional risk management, legal representatives, and clinical peer review boards.
                </p>
              </div>
            </div>

            {/* Key Sections */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-card border-border p-6 hover:bg-accent/5 transition">
                <div className="flex gap-3 mb-3">
                  <Shield className="w-6 h-6 text-accent flex-shrink-0" />
                  <h4 className="text-lg font-bold text-accent">Genomic Protocol</h4>
                </div>
                <p className="text-foreground text-sm">
                  Confirmed pathogenic variants (STX16/PHP1b, PMS2/Lynch) with full clinical implications, lab citations, and inheritance details.
                </p>
                <Link href="/protocol" className="text-accent hover:underline text-sm mt-3 inline-block">
                  View Protocol →
                </Link>
              </Card>

              <Card className="bg-card border-border p-6 hover:bg-accent/5 transition">
                <div className="flex gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0" />
                  <h4 className="text-lg font-bold text-accent">Safety Firewall</h4>
                </div>
                <p className="text-foreground text-sm">
                  Mandatory pre-procedure checklist, contraindicated agents, required lab panels, and mechanism mapping matrix.
                </p>
                <Link href="/safety" className="text-accent hover:underline text-sm mt-3 inline-block">
                  View Firewall →
                </Link>
              </Card>

              <Card className="bg-card border-border p-6 hover:bg-accent/5 transition">
                <div className="flex gap-3 mb-3">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0" />
                  <h4 className="text-lg font-bold text-accent">Rescue Protocol</h4>
                </div>
                <p className="text-foreground text-sm">
                  Step-by-step emergency response for neuro-crash events, including IV NAC, Methyl-B12, and mineral restoration.
                </p>
                <Link href="/rescue" className="text-accent hover:underline text-sm mt-3 inline-block">
                  View Protocol →
                </Link>
              </Card>

              <Card className="bg-card border-border p-6 hover:bg-accent/5 transition">
                <div className="flex gap-3 mb-3">
                  <FileText className="w-6 h-6 text-accent flex-shrink-0" />
                  <h4 className="text-lg font-bold text-accent">Clinical Directive</h4>
                </div>
                <p className="text-foreground text-sm">
                  Printable, one-page provider handoff formatted for immediate clinical use and institutional filing.
                </p>
                <Link href="/directive" className="text-accent hover:underline text-sm mt-3 inline-block">
                  View Directive →
                </Link>
              </Card>

              <Card className="bg-card border-border p-6 hover:bg-accent/5 transition">
                <div className="flex gap-3 mb-3">
                  <Users className="w-6 h-6 text-accent flex-shrink-0" />
                  <h4 className="text-lg font-bold text-accent">Institutional Failures</h4>
                </div>
                <p className="text-foreground text-sm">
                  Documented care coordination failures with required remediation for each facility.
                </p>
              <Link href="/coordination" className="text-accent hover:underline text-sm mt-3 inline-block">
                View Coordination →
              </Link>
              </Card>

              <Card className="bg-card border-border p-6 hover:bg-accent/5 transition">
                <div className="flex gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-accent flex-shrink-0" />
                  <h4 className="text-lg font-bold text-accent">Surveillance Calendar</h4>
                </div>
                <p className="text-foreground text-sm">
                  Annual testing schedule with frequencies and clinical rationale for each condition.
                </p>
              <Link href="/coordination" className="text-accent hover:underline text-sm mt-3 inline-block">
                View Coordination →
              </Link>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Link href="/coordination">
              <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3">
                View Care Coordination
              </Button>
            </Link>
            <Link href="/protocol">
              <Button variant="outline" className="w-full sm:w-auto border-accent text-accent hover:bg-accent/10 font-bold px-8 py-3">
                View Protocol
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="bg-card border-t border-border py-16">
        <div className="container max-w-4xl">
          <h3 className="text-3xl font-bold text-accent mb-8">Who This Is For</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-foreground">Healthcare Providers</h4>
              <p className="text-muted-foreground">
                Mandatory reference for all clinical decision-making. Cross-verify every intervention against the mechanism mapping matrix.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-foreground">Institutional Risk Management</h4>
              <p className="text-muted-foreground">
                Formal evidence brief documenting institutional failures and required remediation. Serves as basis for compliance review.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-foreground">Legal Representatives</h4>
              <p className="text-muted-foreground">
                Comprehensive documentation of care coordination failures, medical negligence, and institutional accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container max-w-4xl text-center text-muted-foreground text-sm">
          <p>
            This document is a formal, legally and clinically binding clinical directive. All clinical decisions must be made in conjunction with current laboratory values, patient history, and applicable clinical guidelines.
          </p>
          <p className="mt-4">
            Last Updated: July 2026 | Version 1.0
          </p>
        </div>
      </footer>
    </div>
  );
}
