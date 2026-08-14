import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, FileText, Download, ShieldCheck, AlertCircle, Headphones } from "lucide-react";

export default function EvidenceVault() {
  const evidenceItems = [
    {
      title: "Tempus Genomic Report (BM_TempusClinicalReports)",
      date: "2024",
      type: "Genomic Lab Result",
      findings: "Verified STX16 microdeletion and PMS2/Lynch pathogenic variants.",
      status: "Verified",
      link: "#"
    },
    {
      title: "Genova Methylation Panel",
      date: "Feb 14, 2024",
      type: "Biochemical Lab Result",
      findings: "Documented MTHFR/COMT blockade and enzymatic clearance failure.",
      status: "Verified",
      link: "#"
    },
    {
      title: "Dr. Eby Follow-up Call Transcript",
      date: "July 2026",
      type: "Audio/Transcript",
      findings: "Documented care failure, ghosting, and refusal to implement genomic-safe protocols.",
      status: "Documented",
      link: "#"
    },
    {
      title: "Master Genomic Compendium Enforcement",
      date: "July 2026",
      type: "Legal/Clinical Mandate",
      findings: "Statutory legal precedents and mandatory safety firewall directives.",
      status: "Active",
      link: "#"
    },
    {
      title: "UCLA Patient Experience Chat Log",
      date: "July 2026",
      type: "Institutional Evidence",
      findings: "Documented unresponsiveness and failure of internal grievance procedures.",
      status: "Documented",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Master Evidence Vault</h1>
        </div>
      </nav>

      <main className="container py-12">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4 uppercase tracking-wider">Clinical & Legal Documentation</h2>
            <p className="text-xl text-muted-foreground">This vault contains all verified lab reports, transcripts of care failure, and legal mandates. No information is siloed; every claim is backed by verified clinical evidence.</p>
          </header>

          <div className="grid gap-6">
            {evidenceItems.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-accent transition group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-accent/10 p-3 rounded-full">
                      {item.type.includes("Audio") ? (
                        <Headphones className="w-6 h-6 text-accent" />
                      ) : (
                        <FileText className="w-6 h-6 text-accent" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition">{item.title}</h3>
                      <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                        <span>{item.date}</span>
                        <span className="text-accent">•</span>
                        <span>{item.type}</span>
                      </div>
                      <p className="mt-3 text-foreground leading-relaxed">{item.findings}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-900/20 text-green-500 rounded-full text-xs font-bold uppercase tracking-widest border border-green-500/30">
                      <ShieldCheck className="w-3 h-3" />
                      {item.status}
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      View File
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-16">
            <div className="critical-box border-4 bg-primary/10 flex gap-6 items-start">
              <AlertCircle className="w-12 h-12 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-accent mt-0 mb-4 uppercase">Institutional Failure Documentation</h3>
                <p className="text-lg leading-relaxed font-semibold">
                  "The evidence in this vault documents a systematic pattern of neglect, ghosting, and refusal to implement genomic-safe protocols. These files serve as the evidentiary basis for formal complaints filed with DHCS, CDPH, and the Medical Board of California."
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
