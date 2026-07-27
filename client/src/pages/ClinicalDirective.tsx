import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Printer, ShieldAlert, Scale, AlertTriangle, ChevronLeft } from "lucide-react";

export default function ClinicalDirective() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50 print:hidden">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Clinical Directive Summary</h1>
          <Button onClick={handlePrint} className="ml-auto flex items-center gap-2">
            <Printer className="w-5 h-5" />
            Print Directive
          </Button>
        </div>
      </nav>

      <main className="container max-w-4xl py-12 print:py-0">
        <div className="bg-card p-8 rounded-lg border border-border shadow-xl print:border-none print:shadow-none">
          <header className="border-b-2 border-primary pb-6 mb-8 text-center">
            <h1 className="text-4xl font-bold text-primary mb-2 uppercase tracking-wider">Genomic Anchoring & Biogenetic Protocol</h1>
            <p className="text-xl font-semibold text-foreground">Master Clinical Directive & Safety Firewall</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-left text-sm">
              <div className="bg-muted/30 p-3 rounded">
                <span className="font-bold block text-primary">PATIENT IDENTITY:</span>
                Brandy Michelle Bianchini
              </div>
              <div className="bg-muted/30 p-3 rounded">
                <span className="font-bold block text-primary">COORDINATOR:</span>
                Dr. Jessica Eby, UCLA Family Medicine
              </div>
            </div>
          </header>

          <div className="critical-box border-4 bg-red-900/30 flex gap-6 items-start">
            <ShieldAlert className="w-12 h-12 text-red-500 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-500 mt-0 mb-4 uppercase border-none p-0">Mandatory EHR Override Flag</h2>
              <p className="text-lg leading-relaxed font-semibold">
                "This patient possesses a non-standard biological engine with verified genomic microdeletions (STX16/GNAS) and severe methylation blockades (MTHFR/COMT). Standard clinical pathways, empirical radiological preps, and standardized procedural care models are mathematically and chemically guaranteed to induce severe systemic cascades ('neuro-crash') due to absolute pathway contradictions. All diagnostic and therapeutic interventions are locked down pending completed mapping against the Master Biogenetic Clinical Directive. Proceeding without care coordination clearance constitutes a direct violation of safety protocols."
              </p>
            </div>
          </div>

          <section className="mt-12">
            <h2 className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              Core Pathophysiological Framework
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="clinical-section m-0">
                <h3 className="text-primary">1. G-Protein Signaling (STX16/GNAS)</h3>
                <p>Microdeletion in STX16 disrupts GNAS imprinting, causing loss of GPCR intracellular signaling integrity. Standard meds assuming normal G-protein transduction generate cellular "misfires," leading to autonomic collapse and PTH/Calcium axis instability.</p>
              </div>
              <div className="clinical-section m-0">
                <h3 className="text-primary">2. Methylation Blockade (MTHFR/COMT)</h3>
                <p>Homozygous variants create an absolute chemical bottleneck. Cells lack enzymatic clearance velocity to neutralize foreign chemical vectors. Standard contrast media, preps, and anesthetics linger as toxic intermediaries, triggering acute neuro-immune inflammation.</p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6" />
              The Safety Firewall: Mandatory Mechanism Mapping
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th>Intervention</th>
                    <th>Absolute Contraindications</th>
                    <th>Mandatory Risk Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">Radiological Contrast</td>
                    <td>Standard high-osmolar ionic agents; unmapped gadolinium.</td>
                    <td>Non-ionic, lowest-osmolality only; aggressive pre-hydration.</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Anesthesia / Sedation</td>
                    <td>Propofol, Fentanyl, Dilaudid, standard Lidocaine.</td>
                    <td>Genomic-Safe alternatives via alternative clearing pathways.</td>
                  </tr>
                  <tr>
                    <td className="font-bold">GI Preps</td>
                    <td>PEG 3350 (MiraLAX), standard hypertonic phosphate.</td>
                    <td>Low-osmotic, non-PEG organic alternatives only.</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Insufflation</td>
                    <td>Standard high-pressure ambient air.</td>
                    <td>Low-pressure CO2 only; continuous vagal tone monitoring.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="flex items-center gap-3">
              <Scale className="w-6 h-6" />
              Statutory Law & Legal Precedent
            </h2>
            <div className="legal-box">
              <div className="mb-6">
                <h3 className="text-primary mt-0">1. Duty to Refer (Case Law)</h3>
                <p>Under <em>St. John v. Peterson</em>, physicians have a strict legal duty to refer when not competent to manage a patient's specific complexity. Standard protocol use for complex genomic patients constitutes a breach of the standard of care.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-primary mt-0">2. ADA Title II & III Compliance</h3>
                <p>Providers MUST make reasonable modifications to avoid discrimination. Refusing to modify standard pathways (preps, dyes) when presented with documented biogenetic contraindications violates federal civil rights law.</p>
              </div>
              <div>
                <h3 className="text-primary mt-0">3. ACA & CMS Chronic Care Mandates</h3>
                <p>Federal regulations mandate Chronic Care Management (CCM) for complex conditions. Care fragmentation and siloed operations contravene federal directives designed to prevent systemic harm.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 print:mt-8">
            <h2 className="flex items-center gap-3 text-primary uppercase tracking-wider">
              Clinical & Administrative Reconciliation Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/30 p-6 rounded border border-border">
                <h3 className="text-primary mt-0 mb-4">1. Administrative Mandate (NEMT/Lodging)</h3>
                <ul className="space-y-3 text-sm text-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded shrink-0 mt-0.5" />
                    <span>Complete DHCS 18-1 (TAR) with HCPCS A0130 & A0425</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded shrink-0 mt-0.5" />
                    <span>Attach 50-Mile Geographical Exemption Justification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded shrink-0 mt-0.5" />
                    <span>Sign Multi-Trip Voucher (Original Blue/Black Ink + Provider Stamp)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded shrink-0 mt-0.5" />
                    <span>Submit UCLA Housing Assistance Application (Fax: 310-794-8134)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted/30 p-6 rounded border border-border">
                <h3 className="text-primary mt-0 mb-4">2. Departmental Referral Redo</h3>
                <ul className="space-y-3 text-sm text-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded shrink-0 mt-0.5" />
                    <span>Re-issue STAT Genomic/Biochemical Referrals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded shrink-0 mt-0.5" />
                    <span>Attach Mandatory Safety Firewall to ALL Referrals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded shrink-0 mt-0.5" />
                    <span>Order Genomic Pre-Procedure Lab Panel (PTH, Ca, Mg, Methylation)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-primary rounded shrink-0 mt-0.5" />
                    <span>Provide Case Number for UCLA Compliance Filing</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <div className="voice-quote">
              "My body does not possess standard cellular processing pathways. This is not a 'preference' or an allergy—it is a mandatory mathematical requirement for survival. If a department does not check how their chemicals interact with my genetic engine before using them, they are committing an act of direct physical violence against my body."
            </div>
          </section>

          <footer className="mt-16 pt-8 border-t-2 border-primary flex justify-between items-end">
            <div className="text-sm text-muted-foreground">
              <p className="font-bold text-foreground mb-1">Electronic Signature & Verification</p>
              <p>Master Genomic Compendium Enforcement Directive v2.1</p>
              <p>Generated: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="w-64 border-b border-foreground pb-1 text-center text-sm font-bold">
              Patient / Legal Representative
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
