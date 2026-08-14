import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, ClipboardList, ShieldAlert, Activity, Users, FileText, Printer } from "lucide-react";

export default function ClinicalOversight() {
  const handlePrint = () => {
    window.print();
  };

  const departments = [
    {
      name: "OBGYN-Oncology",
      mandate: "PCP required to oversee yearly PMS2 immunostains and cell staining collection during procedures.",
      status: "Critical Monitoring Required",
      protocols: "Genomic-safe procedural handling; no standard preps or anesthetics."
    },
    {
      name: "GI-Oncology (Hereditary Diseases)",
      mandate: "PCP must manage care when specialists (e.g., Dr. Ho) fail to coordinate across Endo-GI-Neuro-Vascular-Liver overlaps.",
      status: "Active Surveillance",
      protocols: "Lynch syndrome monitoring; quarterly biochemical lab panels."
    },
    {
      name: "Genetics & Rare Diseases",
      mandate: "Re-issue STAT referrals for variant-level biochemistry and bioscience mapping. Address provider neglect and ADA non-compliance.",
      status: "Escalated for Neglect",
      protocols: "Full DNA hereditary cancer and disease panel monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="bg-card border-b border-border sticky top-0 z-50 print:hidden">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Clinical Oversight & Procedure Mandate</h1>
          <Button onClick={handlePrint} className="ml-auto flex items-center gap-2">
            <Printer className="w-5 h-5" />
            Print Mandate
          </Button>
        </div>
      </nav>

      <main className="container py-12">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <ShieldAlert className="w-10 h-10 text-primary" />
              <h2 className="text-4xl font-bold text-primary uppercase tracking-wider">Interdisciplinary Care Mandate</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This mandate ends care fragmentation. The Primary Care Physician (PCP) is required to serve as the central clinical mediator for all interdisciplinary procedures, ensuring that nursing notes and procedure outcomes are flagged for immediate oversight.
            </p>
          </header>

          <section className="mb-16">
            <div className="critical-box border-4 bg-primary/10 p-8">
              <h3 className="text-2xl font-bold text-accent mb-6 uppercase flex items-center gap-3">
                <Activity className="w-8 h-8" />
                Immediate Procedure Oversight
              </h3>
              <p className="text-lg font-semibold mb-6">
                Nursing notes from all facility procedures must be flagged for immediate review by the PCP and the relevant specialists. "Knowing is preventing." No procedure is to be authorized without a documented interdisciplinary protocol mapping.
              </p>
              <div className="bg-background/50 p-6 rounded border border-primary/30">
                <h4 className="text-accent font-bold mb-3 uppercase text-sm tracking-widest">Mandatory Flagging:</h4>
                <ul className="grid md:grid-cols-2 gap-4 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Biochemical Bioscience Misfires
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Autonomic Tone Fluctuations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Connective Tissue Fragility Events
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Metabolic Clearance Delays
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-3xl font-bold text-accent mb-8 uppercase tracking-wide flex items-center gap-3">
              <Users className="w-8 h-8" />
              Departmental Referral Reconciliation
            </h3>
            <div className="grid gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-8 hover:border-accent transition">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-bold text-primary">{dept.name}</h4>
                    <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest border border-accent/30">
                      {dept.status}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-sm font-bold text-muted-foreground uppercase mb-2">Clinical Mandate:</h5>
                      <p className="text-foreground leading-relaxed">{dept.mandate}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-muted-foreground uppercase mb-2">Mandatory Protocols:</h5>
                      <p className="text-foreground leading-relaxed">{dept.protocols}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-accent mb-6 uppercase flex items-center gap-3">
                <ClipboardList className="w-8 h-8" />
                DHCS TAR & Reimbursement Enforcement
              </h3>
              <p className="text-foreground mb-6">
                Reimbursement for transportation and services has been delayed for over a year due to administrative failure. The PCP and specialists are required to submit all Treatment Authorization Requests (TAR) immediately.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded border border-border">
                  <h4 className="text-primary font-bold mb-4">PCP Responsibility:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      Sign all PCS forms for NEMT and lodging assistance.
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      Provide geographical exemption codes for 1000-mile transit.
                    </li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded border border-border">
                  <h4 className="text-primary font-bold mb-4">Specialist Responsibility:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      Submit clinical justification for out-of-area specialty care.
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      Coordinate with PCP on technical billing requirements.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <footer className="text-center py-8 border-t border-border">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              Generated for Immediate Clinical Reconciliation | {new Date().toLocaleDateString()}
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
