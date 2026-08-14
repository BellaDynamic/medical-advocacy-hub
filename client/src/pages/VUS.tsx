import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, AlertTriangle } from "lucide-react";

export default function VUS() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Variants of Uncertain Significance</h1>
        </div>
      </nav>

      <main className="container max-w-4xl py-12">
        {/* Page Header */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">VUS Monitoring Protocol</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Source: Invitae Primary Immunodeficiency Panel (429 genes, May 14, 2024 — Invitae #RQ6414402, Lab Director: Jeana DaRe PhD FACMG).
          </p>
          <p className="text-foreground">
            Four heterozygous VUS were identified. None are individually confirmed pathogenic. However, the clinical constellation—particularly CASP10 and TBX1—warrants active monitoring given the confirmed PHP1b and Lynch diagnoses.
          </p>
        </section>

        {/* CASP10 */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">CASP10 — ALPS-CASP10 Risk</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">Variant</p>
                <p className="font-semibold text-foreground">c.1202_1208del (p.Cys401Leufs*15)</p>
              </div>
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">Associated Condition</p>
                <p className="font-semibold text-foreground">Autoimmune Lymphoproliferative Syndrome (ALPS)</p>
              </div>
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">Priority</p>
                <p className="font-semibold text-foreground">MODERATE</p>
              </div>
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">PolyPhen-2</p>
                <p className="font-semibold text-foreground">N/A (frameshift)</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="clinical-header">Clinical Significance</h4>
              <p className="text-foreground mb-4">
                CASP10 (caspase-10) is involved in apoptosis regulation. Variants in this gene are associated with Autoimmune Lymphoproliferative Syndrome (ALPS), a primary immunodeficiency characterized by lymphoproliferation and autoimmune manifestations.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="clinical-header">Monitoring Protocol</h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Periodic lymphocyte subset panels — CBC with differential, immunoglobulin levels, natural killer cell function</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Autoimmune marker monitoring (ANA, anti-dsDNA)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Annual reclassification review with genetics</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CLCN7 */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">CLCN7 — Osteopetrosis / HOD Syndrome Risk</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">Variant</p>
                <p className="font-semibold text-foreground">c.1138G{'>'} T (p.Ala380Ser)</p>
              </div>
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">Associated Conditions</p>
                <p className="font-semibold text-foreground">Osteopetrosis, HOD syndrome</p>
              </div>
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">Priority</p>
                <p className="font-semibold text-foreground">MODERATE</p>
              </div>
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">PolyPhen-2</p>
                <p className="font-semibold text-foreground">Not disruptive (95% NPV)</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="clinical-header">Clinical Significance</h4>
              <p className="text-foreground mb-4">
                CLCN7 encodes a chloride channel involved in bone resorption and osteoclast function. Variants are associated with osteopetrosis (increased bone density) and HOD syndrome (hypopigmentation, organomegaly, delayed myelination).
              </p>
            </div>

            <div className="mb-8">
              <h4 className="clinical-header">Monitoring Protocol</h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Annual DEXA bone density scan (doubly indicated given concurrent PHP1b bone metabolism disruption)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Ophthalmology monitoring for HOD-related changes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Annual reclassification review with genetics</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* TBX1 - HIGH PRIORITY */}
        <section className="mb-12">
          <div className="clinical-section border-2 border-primary">
            <div className="flex gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-accent flex-shrink-0" />
              <h3 className="text-3xl font-bold text-accent">TBX1 — DiGeorge / 22q11.2 Syndrome Risk [HIGH PRIORITY]</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-primary/10 p-4 rounded border border-primary">
                <p className="text-sm text-muted-foreground mb-2">Variant</p>
                <p className="font-semibold text-foreground">c.1444G{'>'} C (p.Ala482Pro)</p>
              </div>
              <div className="bg-primary/10 p-4 rounded border border-primary">
                <p className="text-sm text-muted-foreground mb-2">Associated Condition</p>
                <p className="font-semibold text-foreground">DiGeorge / 22q11.2 syndrome</p>
              </div>
              <div className="bg-primary/10 p-4 rounded border border-primary">
                <p className="text-sm text-muted-foreground mb-2">Priority</p>
                <p className="font-semibold text-accent">HIGH — MONITOR</p>
              </div>
              <div className="bg-primary/10 p-4 rounded border border-primary">
                <p className="text-sm text-muted-foreground mb-2">PolyPhen-2</p>
                <p className="font-semibold text-foreground">LIKELY DISRUPTIVE</p>
              </div>
            </div>

            <div className="critical-box mb-8">
              <h4 className="font-bold text-foreground mb-2">⚠️ DUAL HYPOCALCEMIA PATHWAY</h4>
              <p className="text-foreground">
                The TBX1 VUS involves a gene associated with DiGeorge syndrome, which independently causes hypocalcemia via hypoparathyroidism. Combined with confirmed PHP1b (hypocalcemia via PTH resistance), this creates a <strong>DUAL hypocalcemia risk pathway</strong> that MUST be explicitly communicated to anesthesiology before any procedure.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="clinical-header">Clinical Significance</h4>
              <p className="text-foreground mb-4">
                TBX1 is a transcription factor critical for neural crest cell development. DiGeorge syndrome (22q11.2 deletion) is associated with T-cell deficiency, hypoparathyroidism, cardiac defects, and cleft palate. This VUS warrants close monitoring given its potential for immunodeficiency and endocrine dysfunction.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="clinical-header">Monitoring Protocol</h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>T-cell subset panel (CD3, CD4, CD8 counts) annually</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Calcium monitoring (dual pathway emphasis)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Flag to immunology</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Reclassification review annually</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>MANDATORY anesthesia notification before any sedation or procedure</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* TLR3 */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">TLR3 — Herpes Simplex Encephalitis Susceptibility</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">Variant</p>
                <p className="font-semibold text-foreground">c.2206G{'>'} A (p.Val736Ile)</p>
              </div>
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">Associated Condition</p>
                <p className="font-semibold text-foreground">Herpes simplex encephalitis susceptibility</p>
              </div>
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">Priority</p>
                <p className="font-semibold text-foreground">LOW-MODERATE</p>
              </div>
              <div className="bg-muted/50 p-4 rounded">
                <p className="text-sm text-muted-foreground mb-2">PolyPhen-2</p>
                <p className="font-semibold text-foreground">Likely tolerated</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="clinical-header">Clinical Significance</h4>
              <p className="text-foreground mb-4">
                TLR3 (Toll-like receptor 3) is part of the innate immune system's response to double-stranded RNA. Variants in TLR3 are associated with increased susceptibility to herpes simplex encephalitis, a rare but serious CNS infection.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="clinical-header">Monitoring Protocol</h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Viral susceptibility awareness — document in infection history</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Flag if CNS herpes simplex infection occurs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Lower immediate clinical urgency, but maintain awareness</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="clinical-header mb-6">VUS Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-accent/20">
                    <th className="text-left p-3 font-bold text-accent">Gene</th>
                    <th className="text-left p-3 font-bold text-accent">Variant</th>
                    <th className="text-left p-3 font-bold text-accent">Condition</th>
                    <th className="text-left p-3 font-bold text-accent">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-semibold">CASP10</td>
                    <td className="p-3">c.1202_1208del</td>
                    <td className="p-3">ALPS</td>
                    <td className="p-3">MODERATE</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/50">
                    <td className="p-3 font-semibold">CLCN7</td>
                    <td className="p-3">c.1138G{'>'} T</td>
                    <td className="p-3">Osteopetrosis / HOD</td>
                    <td className="p-3">MODERATE</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-semibold">TBX1</td>
                    <td className="p-3">c.1444G{'>'} C</td>
                    <td className="p-3">DiGeorge / 22q11.2</td>
                    <td className="p-3 text-accent font-bold">HIGH</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">TLR3</td>
                    <td className="p-3">c.2206G{'>'} A</td>
                    <td className="p-3">HSE susceptibility</td>
                    <td className="p-3">LOW-MOD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 mt-12">
          <Link href="/protocol" className="text-accent hover:underline">
            ← Genomic Protocol
          </Link>
          <Link href="/safety" className="text-accent hover:underline ml-auto">
            Safety Firewall →
          </Link>
        </div>
      </main>
    </div>
  );
}
