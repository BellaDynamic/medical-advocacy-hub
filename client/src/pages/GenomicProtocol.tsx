import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function GenomicProtocol() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Genomic Protocol</h1>
        </div>
      </nav>

      <main className="container max-w-4xl py-12">
        {/* Page Header */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">Confirmed Pathogenic Findings</h2>
          <p className="text-lg text-muted-foreground">
            Two confirmed pathogenic variants classified by ACMG criteria, both maternally inherited from Carol Bianchini (DOB: April 22, 1953).
          </p>
        </section>

        {/* STX16 / PHP1b Section */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">STX16 Deletion / Pseudohypoparathyroidism Type 1b (PHP1b)</h3>

            {/* Genomic Details */}
            <div className="mb-8">
              <h4 className="clinical-header">Genomic Detail</h4>
              <div className="bg-muted/50 p-4 rounded border border-border mb-4">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Gene</td>
                      <td className="py-2">STX16</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Variant</td>
                      <td className="py-2">3.23 kb deletion — Exons 5-7 (in-frame)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Chromosome</td>
                      <td className="py-2">20q13.32</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Inheritance</td>
                      <td className="py-2">Autosomal Dominant — Maternally Inherited</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Classification</td>
                      <td className="py-2">PATHOGENIC (ACMG criteria)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Mechanism</td>
                      <td className="py-2">Loss of methylation at GNAS A/B locus → PTH resistance at kidney</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-accent py-2 pr-4">Laboratory</td>
                      <td className="py-2">Variantyx Genomic Unity Whole Genome Analysis — March 7, 2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Clinical Implications */}
            <div className="mb-8">
              <h4 className="clinical-header">Clinical Implications</h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Chronic PTH Resistance:</strong> Results in hypocalcemia and hyperphosphatemia</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Bone Metabolism Disruption:</strong> Confirmed osteopenia in clinical phenotype</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Smooth Muscle Dysregulation:</strong> Chronic constipation, GI dysmotility</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Neurological Manifestations:</strong> Peripheral neuropathy, arthralgia, migraine with aura (attributable to chronic hypocalcemia)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>TSH Resistance:</strong> Possible concurrent thyroid hormone dysfunction</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Cardiac Risk:</strong> Hypocalcemia prolongs QTc interval → arrhythmia risk under anesthesia</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Facial Features:</strong> Edema and asymmetry consistent with PHP spectrum</span>
                </li>
              </ul>
            </div>

            {/* Anesthesia Alert */}
            <div className="warning-box mb-8">
              <h4 className="font-bold text-foreground mb-2">⚠️ ANESTHESIA ALERT</h4>
              <p className="text-foreground">
                Peri-procedural calcium and electrolyte monitoring REQUIRED before ANY sedation or procedure.
              </p>
            </div>

            {/* Pre-Procedure Lab Panel */}
            <div className="mb-8">
              <h4 className="clinical-header">Mandatory Pre-Procedure Lab Panel</h4>
              <p className="text-foreground mb-4">
                The following labs MUST be drawn, reviewed, and within acceptable clinical range before any procedure, surgery, or anesthesia:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-accent/20">
                      <th className="text-left p-3 font-bold text-accent">Lab Test</th>
                      <th className="text-left p-3 font-bold text-accent">Clinical Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 font-semibold">Serum Calcium (albumin-corrected)</td>
                      <td className="p-3">Primary hypocalcemia risk — must be optimized</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-3 font-semibold">Serum Phosphate</td>
                      <td className="p-3">PHP1b causes hyperphosphatemia</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-semibold">Serum Magnesium</td>
                      <td className="p-3">Hypomagnesemia worsens hypocalcemia</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-3 font-semibold">Intact PTH</td>
                      <td className="p-3">Baseline PTH resistance monitoring</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-semibold">25-OH Vitamin D (calcidiol)</td>
                      <td className="p-3">Substrate for active vitamin D production</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-3 font-semibold">1,25(OH)2 Vitamin D (calcitriol)</td>
                      <td className="p-3">Active vitamin D — supplement dosing reference</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-semibold">Serum Albumin</td>
                      <td className="p-3">Required for corrected calcium calculation</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-3 font-semibold">EKG / QTc Interval</td>
                      <td className="p-3">Hypocalcemia prolongs QTc — cardiac arrhythmia risk under anesthesia</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-semibold">TSH + Free T4</td>
                      <td className="p-3">Evaluate for concurrent TSH resistance</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Current Calcitriol & Calcium Supplement Doses</td>
                      <td className="p-3">Document active supplementation protocol</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* PMS2 / Lynch Section */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">PMS2 Deletion / Lynch Syndrome</h3>

            {/* Genomic Details */}
            <div className="mb-8">
              <h4 className="clinical-header">Genomic Detail</h4>
              <div className="bg-muted/50 p-4 rounded border border-border mb-4">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Gene</td>
                      <td className="py-2">PMS2</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Variant</td>
                      <td className="py-2">4.89 kb deletion — Exons 9-10 (out-of-frame, loss of function)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Chromosome</td>
                      <td className="py-2">7p22.1</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Inheritance</td>
                      <td className="py-2">Autosomal Dominant — Maternally Inherited</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Classification</td>
                      <td className="py-2">PATHOGENIC (ACMG criteria)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Mechanism</td>
                      <td className="py-2">Loss of mismatch repair (MMR) function → microsatellite instability pathway</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="font-semibold text-accent py-2 pr-4">Literature</td>
                      <td className="py-2">Reported in heterozygous state in at least 6 individuals with colorectal cancer</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-accent py-2 pr-4">Laboratory</td>
                      <td className="py-2">Variantyx Genomic Unity Whole Genome Analysis — March 7, 2023 | NCCN Guidelines 1-6.2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Oncology Alert */}
            <div className="danger-box mb-8">
              <h4 className="font-bold text-foreground mb-2">🔴 ONCOLOGY ALERT</h4>
              <p className="text-foreground">
                Elevated lifetime cancer risk — active surveillance protocol REQUIRED.
              </p>
            </div>

            {/* Clinical Implications */}
            <div className="mb-8">
              <h4 className="clinical-header">Clinical Implications</h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Elevated Cancer Risk:</strong> Colorectal, endometrial, urinary tract, sebaceous neoplasms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Microsatellite Instability:</strong> MSI pathway activation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Surveillance Requirement:</strong> Active, current surveillance protocol MANDATORY prior to any elective procedure</span>
                </li>
              </ul>
            </div>

            {/* NCCN Surveillance Protocol */}
            <div className="mb-8">
              <h4 className="clinical-header">NCCN Surveillance Protocol</h4>
              <p className="text-foreground mb-4">
                Surveillance must be active and current prior to any elective procedure:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-accent/20">
                      <th className="text-left p-3 font-bold text-accent">Surveillance</th>
                      <th className="text-left p-3 font-bold text-accent">Frequency / Protocol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 font-semibold">Colonoscopy</td>
                      <td className="p-3">Every 1-2 years — begin age 20-25 or 2-5 years before youngest affected relative</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-3 font-semibold">Endometrial Biopsy</td>
                      <td className="p-3">Annually — gynecologic surveillance</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-semibold">Transvaginal Ultrasound</td>
                      <td className="p-3">Annually — concurrent with endometrial biopsy</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-3 font-semibold">Urinalysis with Cytology</td>
                      <td className="p-3">Annually — urinary tract cancer surveillance</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-semibold">Skin Examination</td>
                      <td className="p-3">Annually — sebaceous neoplasm risk</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-3 font-semibold">Aspirin Chemoprevention</td>
                      <td className="p-3">Discuss with oncologist — CAPP2 trial evidence supports consideration</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">CBC & Metabolic Panel</td>
                      <td className="p-3">Annually — baseline monitoring</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 mt-12">
          <Link href="/" className="text-accent hover:underline">
            ← Back to Home
          </Link>
          <Link href="/vus" className="text-accent hover:underline ml-auto">
            View VUS Variants →
          </Link>
        </div>
      </main>
    </div>
  );
}
