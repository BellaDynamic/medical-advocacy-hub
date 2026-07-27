import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, AlertTriangle, FileText, CheckCircle2, XCircle } from "lucide-react";

export default function InstitutionalFailures() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Institutional Failures & Remediation</h1>
        </div>
      </nav>

      <main className="container max-w-4xl py-12">
        {/* Page Header */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">Documented Institutional Failures & Required Remediation</h2>
          <p className="text-lg text-muted-foreground">
            The following verified matrix maps persistent institutional inability to manage high-complexity genomic care. This data serves as a formal evidence brief for Risk Management, the California Medical Board, and legal representatives.
          </p>
        </section>

        {/* Critical Context */}
        <section className="mb-12">
          <div className="directive-box">
            <h3 className="font-bold text-foreground mb-3">Purpose of This Documentation</h3>
            <p className="text-foreground text-sm">
              This page documents systemic failures in care coordination, genomic competency, and institutional accountability. It is not intended as a complaint, but as a formal evidence record for:
            </p>
            <ul className="text-foreground text-sm space-y-1 ml-4 mt-3">
              <li>• UCLA Risk Management and Patient Safety</li>
              <li>• California Medical Board review</li>
              <li>• Legal representatives and advocacy organizations</li>
              <li>• Future clinical peer review boards</li>
              <li>• Institutional quality improvement initiatives</li>
            </ul>
          </div>
        </section>

        {/* Institutional Failure Matrix */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Institutional Failure Matrix</h3>

            {/* UC Davis */}
            <div className="mb-8">
              <div className="bg-accent/10 p-4 rounded border-l-4 border-accent mb-4">
                <h4 className="font-bold text-accent text-lg">UC Davis Medical Center (2025)</h4>
              </div>

              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h5 className="font-bold text-accent mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Documented Failure Mode
                  </h5>
                  <p className="text-foreground text-sm">
                    Dismissal of genomic contraindications in clinical sedation planning. Anesthesia team proceeded with standard sedation protocols despite documented STX16/PHP1b deletion and COMT/MTHFR polymorphisms that contraindicate propofol and standard opioids.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h5 className="font-bold text-accent mb-2">Downstream Harm & Systemic Impact</h5>
                  <ul className="text-foreground text-sm space-y-2 ml-4">
                    <li>• Severe metabolic collapse during procedure</li>
                    <li>• Acute neuro-immune crash with uncontrolled muscle tremors</li>
                    <li>• Unmitigated toxic tissue accumulation from impaired drug clearance</li>
                    <li>• Inadequate post-procedure monitoring and rescue response</li>
                    <li>• Discharge without proper stabilization or follow-up coordination</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h5 className="font-bold text-accent mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Required Institutional Remediation
                  </h5>
                  <ul className="text-foreground text-sm space-y-2 ml-4">
                    <li>• Formal medical board reporting and incident investigation</li>
                    <li>• Systemic overhaul of pre-anesthesia intake competency</li>
                    <li>• Mandatory genomic literacy training for all anesthesia staff</li>
                    <li>• Implementation of EHR flags for high-complexity genetic conditions</li>
                    <li>• Establishment of pre-procedure genomic safety review protocol</li>
                    <li>• Written apology and acknowledgment of care failure</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* UCLA Health */}
            <div className="mb-8">
              <div className="bg-accent/10 p-4 rounded border-l-4 border-accent mb-4">
                <h4 className="font-bold text-accent text-lg">UCLA Health System (2025–2026)</h4>
              </div>

              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h5 className="font-bold text-accent mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Documented Failure Mode
                  </h5>
                  <p className="text-foreground text-sm mb-3">
                    Systemic referral suppression, erasure of 2017 baseline history, and redundant uncoordinated radiological scanning.
                  </p>
                  <ul className="text-foreground text-sm space-y-2 ml-4">
                    <li>• <strong>Referral Suppression:</strong> Documented cases where specialty referrals were not placed despite clear clinical indication</li>
                    <li>• <strong>EHR Erasure:</strong> Baseline genomic and structural imaging data from 2017 was not accessible to current care teams</li>
                    <li>• <strong>Redundant Imaging:</strong> Multiple contrast-enhanced studies ordered without coordination, increasing toxic exposure</li>
                    <li>• <strong>Lack of Mechanism Mapping:</strong> No pre-imaging genomic safety review performed</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h5 className="font-bold text-accent mb-2">Downstream Harm & Systemic Impact</h5>
                  <ul className="text-foreground text-sm space-y-2 ml-4">
                    <li>• Accelerated structural degradation due to excessive contrast exposures</li>
                    <li>• Delayed diagnosis and intervention for progressive aortic tortuosity</li>
                    <li>• Loss of critical baseline data for longitudinal comparison</li>
                    <li>• Fragmented care coordination across departments</li>
                    <li>• Increased cumulative radiation and contrast burden</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h5 className="font-bold text-accent mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Required Institutional Remediation
                  </h5>
                  <ul className="text-foreground text-sm space-y-2 ml-4">
                    <li>• <strong>Immediate EHR Restoration:</strong> Restore all archived baseline profiles and genomic data to current medical record</li>
                    <li>• <strong>Clinical Override Flags:</strong> Mandatory placement of high-level "Genomic Complexity Warning" in EHR</li>
                    <li>• <strong>Interdisciplinary Care Coordination:</strong> Establish formal care coordination protocol with dedicated coordinator</li>
                    <li>• <strong>Imaging Review Board:</strong> All future imaging must be reviewed by radiology + genomics team before ordering</li>
                    <li>• <strong>Root Cause Analysis:</strong> Formal investigation of referral suppression and EHR data loss</li>
                    <li>• <strong>Staff Retraining:</strong> Mandatory genomic competency training for all clinical staff</li>
                    <li>• <strong>Written Apology:</strong> Formal acknowledgment of care failures and commitment to remediation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sutter Health */}
            <div className="mb-8">
              <div className="bg-accent/10 p-4 rounded border-l-4 border-accent mb-4">
                <h4 className="font-bold text-accent text-lg">Sutter Health System</h4>
              </div>

              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h5 className="font-bold text-accent mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Documented Failure Mode
                  </h5>
                  <p className="text-foreground text-sm">
                    Documented radiological negligence regarding thoracic structural progression. Serial imaging studies failed to recognize or communicate progressive aortic arch tortuosity and connective tissue fragility.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h5 className="font-bold text-accent mb-2">Downstream Harm & Systemic Impact</h5>
                  <ul className="text-foreground text-sm space-y-2 ml-4">
                    <li>• Delayed interdisciplinary planning for structural intervention</li>
                    <li>• Severe localized muscle and nerve entrapment from progressive structural changes</li>
                    <li>• Increased risk of acute vascular events due to unmonitored aortic changes</li>
                    <li>• Loss of opportunity for preventive intervention</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h5 className="font-bold text-accent mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Required Institutional Remediation
                  </h5>
                  <ul className="text-foreground text-sm space-y-2 ml-4">
                    <li>• Internal case review integration and forensic radiology review</li>
                    <li>• Legal representatives' involvement in root cause analysis</li>
                    <li>• Radiology staff retraining on connective tissue disorders</li>
                    <li>• Implementation of structured reporting for serial imaging studies</li>
                    <li>• Establishment of automatic alerts for significant structural changes</li>
                    <li>• Written apology and commitment to improved care coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Interdisciplinary Mandate */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Unified Interdisciplinary Workflow Mandate</h3>
            
            <p className="text-foreground mb-6">
              To ensure patient safety and prevent future institutional failures, all departments must operate as a unified, coordinated front. Siloed care is no longer acceptable for high-complexity genomic cases.
            </p>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">EHR Flagging Requirement</h4>
                <p className="text-foreground text-sm">
                  The patient's digital file must carry a permanent, high-level "Genomic Complexity Warning" that halts the application of automated clinic templates and triggers mandatory genomic safety review before any intervention.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">The Care Coordinator Rule</h4>
                <p className="text-foreground text-sm mb-2">
                  Every department involved in the patient's care must assign a dedicated care coordinator to:
                </p>
                <ul className="text-foreground text-sm space-y-1 ml-4">
                  <li>• Directly communicate with Dr. Jessica Eby's team before clinical handoffs</li>
                  <li>• Ensure genomic safety mapping is completed before any procedure</li>
                  <li>• Coordinate interdisciplinary meetings at least quarterly</li>
                  <li>• Maintain unified documentation and care plans</li>
                </ul>
              </div>

              <div className="danger-box">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  The Legal Disclaimer
                </h4>
                <p className="text-foreground text-sm">
                  Any medical provider who chooses to bypass this biogenetic document, ignore the mandatory mechanism mapping workflows, or treat the patient's conditions as isolated empirical complaints takes full personal and institutional liability for the ensuing systemic physiological collapse.
                </p>
                <p className="text-foreground text-sm mt-3 font-semibold">
                  This is not a recommendation. This is a legal and clinical mandate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Departments Requiring Coordination */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Required Interdisciplinary Departments</h3>
            
            <p className="text-foreground mb-6">
              The following departments must be involved in coordinated care planning and must have dedicated care coordinators:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Gastroenterology</h4>
                <p className="text-foreground text-xs">GI procedures, colonoscopy, EGD, biopsy planning</p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Endocrinology</h4>
                <p className="text-foreground text-xs">Metabolic monitoring, hormone management, mineral restoration</p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Radiology</h4>
                <p className="text-foreground text-xs">Imaging planning, contrast safety, structural monitoring</p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Neurovascular Surgery</h4>
                <p className="text-foreground text-xs">Aortic arch monitoring, vascular intervention planning</p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Immunology</h4>
                <p className="text-foreground text-xs">Immune system monitoring, inflammatory response management</p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Oncology</h4>
                <p className="text-foreground text-xs">Lynch syndrome surveillance, cancer screening coordination</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 mt-12">
          <Link href="/rescue" className="text-accent hover:underline">
            ← Rescue Protocol
          </Link>
          <Link href="/" className="text-accent hover:underline ml-auto">
            Home →
          </Link>
        </div>
      </main>
    </div>
  );
}
