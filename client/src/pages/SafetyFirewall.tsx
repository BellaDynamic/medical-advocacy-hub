import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, AlertTriangle, Shield } from "lucide-react";

export default function SafetyFirewall() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Safety Firewall</h1>
        </div>
      </nav>

      <main className="container max-w-4xl py-12">
        {/* Page Header */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">Mandatory Pre-Procedure Protocol</h2>
          <p className="text-lg text-muted-foreground">
            To eliminate the historical clinical pattern of uncoordinated, destructive diagnostic testing, every department must cross-verify any proposed drug or intervention against this mechanism mapping matrix prior to care authorization.
          </p>
        </section>

        {/* Absolute Contraindications */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Absolute Contraindications — Prohibited Agents</h3>
            
            <div className="danger-box mb-8">
              <h4 className="font-bold text-foreground mb-4">DO NOT ADMINISTER</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-950/20 p-3 rounded border border-red-500">
                  <p className="font-semibold text-foreground">Anesthetics</p>
                  <ul className="text-sm text-foreground mt-2 space-y-1">
                    <li>• Propofol</li>
                    <li>• Lidocaine (default blocks)</li>
                  </ul>
                </div>
                <div className="bg-red-950/20 p-3 rounded border border-red-500">
                  <p className="font-semibold text-foreground">Opioids</p>
                  <ul className="text-sm text-foreground mt-2 space-y-1">
                    <li>• Fentanyl</li>
                    <li>• Dilaudid (hydromorphone)</li>
                  </ul>
                </div>
                <div className="bg-red-950/20 p-3 rounded border border-red-500">
                  <p className="font-semibold text-foreground">Contrast Agents</p>
                  <ul className="text-sm text-foreground mt-2 space-y-1">
                    <li>• Gadolinium (unmapped formats)</li>
                    <li>• High-osmolar ionic contrast</li>
                    <li>• Iodine-based contrast</li>
                  </ul>
                </div>
                <div className="bg-red-950/20 p-3 rounded border border-red-500">
                  <p className="font-semibold text-foreground">Bowel Preps</p>
                  <ul className="text-sm text-foreground mt-2 space-y-1">
                    <li>• PEG 3350 (MiraLAX)</li>
                    <li>• Hypertonic phosphate</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="clinical-header">Mechanism of Contraindication</h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">1.</span>
                  <span><strong>Cellular Barrier Bypass:</strong> Agents bypass cellular barrier and fail to methylate → systemic tissue toxicity → autonomic collapse</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">2.</span>
                  <span><strong>GPCR Pathway Misfires:</strong> Trigger GPCR pathway misfires → toxic buildup from impaired COMT clearing → neuro-crash</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">3.</span>
                  <span><strong>Mucosal Permeability:</strong> Alter mucosal membrane permeability → local cellular inflammation → systemic vascular shock</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pre-Procedure Checklist */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Mandatory Pre-Procedure Checklist</h3>
            
            <div className="critical-box mb-8">
              <p className="text-foreground">
                ALL ITEMS BELOW MUST BE COMPLETED AND DOCUMENTED BEFORE ANY ELECTIVE PROCEDURE
              </p>
            </div>

            <div className="space-y-3">
              {[
                { item: "Corrected serum calcium within normal limits", result: "Within lab reference range" },
                { item: "Serum phosphate within acceptable range", result: "Documented" },
                { item: "Serum magnesium checked", result: "Documented" },
                { item: "EKG with QTc interval assessed", result: "QTc < 450ms target — cardiac clearance if borderline" },
                { item: "Calcitriol and calcium supplement doses documented", result: "Active doses on record" },
                { item: "Anesthesiologist notified: PHP1b — dual hypocalcemia risk", result: "VERBAL and WRITTEN notification required" },
                { item: "Anesthesiologist notified: TBX1 VUS implications", result: "Flagged in anesthesia consult" },
                { item: "Lynch syndrome surveillance status current", result: "Date of last colonoscopy on record" },
                { item: "Tempus Pharmacogenomics report reviewed", result: "Drug metabolism flags incorporated" },
                { item: "Dental local anesthetic protocol confirmed", result: "DO NOT PROCEED WITHOUT CONFIRMATION" },
              ].map((check, idx) => (
                <div key={idx} className="bg-muted/50 p-4 rounded border border-border flex gap-4">
                  <input type="checkbox" className="w-5 h-5 flex-shrink-0 mt-1 accent-accent" disabled />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{check.item}</p>
                    <p className="text-sm text-muted-foreground mt-1">{check.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IV Firewall */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Pre-Procedure IV Firewall</h3>
            
            <div className="directive-box mb-8">
              <p className="text-foreground font-semibold mb-4">Administer 25 minutes prior to ANY intervention:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-accent/10 p-4 rounded border border-accent">
                  <p className="font-bold text-foreground mb-2">25mg IV Diphenhydramine</p>
                  <p className="text-sm text-muted-foreground">(Benadryl)</p>
                </div>
                <div className="bg-accent/10 p-4 rounded border border-accent">
                  <p className="font-bold text-foreground mb-2">20mg IV Famotidine</p>
                  <p className="text-sm text-muted-foreground">(Pepcid)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Functional Diagnostic Mandate */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Functional Diagnostic Mandate</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-accent/20">
                    <th className="text-left p-3 font-bold text-accent">Test</th>
                    <th className="text-left p-3 font-bold text-accent">Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-semibold">24-hr Fractional Excretion (Ca/Mg/Phos)</td>
                    <td className="p-3">Quantifies renal mineral dump (PHP1b status)</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/50">
                    <td className="p-3 font-semibold">Urinary cAMP Profile</td>
                    <td className="p-3">Measures G-protein signaling coupling resistance</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-semibold">IHC/MMR Staining (PMS2)</td>
                    <td className="p-3">Mandatory for thoracic mass biopsy to identify Lynch recurrence</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Methylation/OAT Panel</td>
                    <td className="p-3">Assesses Phase II detoxification/methylation block</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Mechanism Mapping Matrix */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Mechanism Mapping Matrix</h3>
            
            <p className="text-foreground mb-6">
              For every proposed clinical intervention, cross-verify against this matrix prior to authorization:
            </p>

            <div className="space-y-6">
              {/* Radiological Dyes */}
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-3">Radiological Dyes / Contrast</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-foreground">Primary Mechanism:</span> Ionic / Osmotic cellular concentration channels</p>
                  <p><span className="font-semibold text-foreground">Domino Effects:</span> Bypasses cellular barrier → fails to methylate → systemic tissue toxicity → autonomic collapse</p>
                  <p><span className="font-semibold text-foreground">Contraindications:</span> Standard high-osmolar ionic contrasts, unmapped gadolinium formats</p>
                  <p><span className="font-semibold text-foreground">Mitigation:</span> Non-ionic, lowest-osmolality agents; mandatory aggressive biogenetic pre-hydration</p>
                </div>
              </div>

              {/* Anesthesia */}
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-3">Procedural Anesthesia / Sedation</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-foreground">Primary Mechanism:</span> GPCR and neurological receptor binding</p>
                  <p><span className="font-semibold text-foreground">Domino Effects:</span> GPCR pathway misfires → toxic buildup from impaired COMT clearing → profound neuro-crash</p>
                  <p><span className="font-semibold text-foreground">Contraindications:</span> Propofol, Fentanyl, Dilaudid, Lidocaine default blocks</p>
                  <p><span className="font-semibold text-foreground">Mitigation:</span> Genomic-Safe alternatives mapped to alternative clearing pathways via custom metabolic support</p>
                </div>
              </div>

              {/* GI Preps */}
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-3">Gastrointestinal Preps</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-foreground">Primary Mechanism:</span> Hyperosmotic intraluminal fluid shifts</p>
                  <p><span className="font-semibold text-foreground">Domino Effects:</span> Alters mucosal membrane permeability → triggers local cellular inflammation → systemic vascular shock</p>
                  <p><span className="font-semibold text-foreground">Contraindications:</span> PEG 3350 (MiraLAX), standard hypertonic phosphate solutions</p>
                  <p><span className="font-semibold text-foreground">Mitigation:</span> Low-osmotic, non-PEG organic alternatives cleared by clinical bioscience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layman Translation */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Layman Translation</h3>
            
            <p className="text-foreground mb-6 italic">
              For administrative staff and clinical technicians who lack advanced training in molecular genomics:
            </p>

            <div className="bg-accent/10 p-6 rounded border border-accent">
              <p className="text-foreground leading-relaxed">
                "This patient's body does not possess standard cellular processing pathways. Because of verified genetic modifications, the cellular engine is physically broken at its baseline. When a standard clinical department puts normal, everyday medications, preps, or contrast dyes into this system, the body cannot break them down. Instead, the chemical sits inside the tissues, causing an immediate toxic misfire. This misfire collapses blood pressure, neurological control, and hormone stability. This is not a preference or simple allergy—it is a mandatory mathematical requirement for survival. If a department does not check how their chemicals interact with this genetic engine before using them, they are committing an act of direct physical violence."
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 mt-12">
          <Link href="/vus" className="text-accent hover:underline">
            ← VUS Variants
          </Link>
          <Link href="/rescue" className="text-accent hover:underline ml-auto">
            Rescue Protocol →
          </Link>
        </div>
      </main>
    </div>
  );
}
