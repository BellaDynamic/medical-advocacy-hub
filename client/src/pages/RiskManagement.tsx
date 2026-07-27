import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, AlertTriangle, CheckCircle2, Phone, Mail } from "lucide-react";

export default function RiskManagement() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Risk Management & Formal Complaint Filing</h1>
        </div>
      </nav>

      <main className="container max-w-4xl py-12">
        {/* Page Header */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">Formal Escalation & Institutional Accountability</h2>
          <p className="text-lg text-muted-foreground">
            When internal UCLA Health channels fail to respond or address your concerns, you have the legal right to file formal complaints with state and federal oversight agencies. This page provides exact contact information and step-by-step filing instructions.
          </p>
        </section>

        {/* Critical Timeline */}
        <section className="mb-12">
          <div className="danger-box">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Documentation of Non-Response
            </h3>
            <p className="text-foreground mb-4">
              <strong>If you have waited more than 3 weeks without response from the Office of Patient Experience:</strong> This constitutes institutional failure and grounds for formal escalation to state and federal agencies.
            </p>
            <p className="text-foreground font-semibold">
              Document the date you first contacted Patient Experience and the date of this escalation. This timeline is evidence of institutional negligence.
            </p>
          </div>
        </section>

        {/* UCLA Internal Escalation */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Step 1: UCLA Internal Escalation (Compliance Services)</h3>
            <p className="text-foreground mb-6">
              Before filing external complaints, formally notify UCLA's Compliance Office of the non-response from Patient Experience.
            </p>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  UCLA Health Office of Compliance Services
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">(310) 794-8638</p>
                <p className="text-foreground text-sm mb-2">
                  <strong>Anonymous Hotline:</strong> <span className="font-mono">1-800-403-4744</span>
                </p>
                <p className="text-foreground text-sm mb-2">
                  <strong>Email:</strong> <span className="font-mono">[email protected]</span>
                </p>
                <p className="text-foreground text-sm">
                  <strong>What to report:</strong> Non-responsiveness from Patient Experience office, failure to address ADA compliance concerns, institutional negligence in care coordination.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">What to Say</h4>
                <p className="text-foreground text-sm mb-3">
                  "I am filing a formal compliance complaint regarding non-response from the Office of Patient Experience. I contacted them on [DATE] regarding [SPECIFIC ISSUE] and have received no response after three weeks. This constitutes a failure to provide effective communication and reasonable accommodation as required under the ADA."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DHCS Fraud & Abuse */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Step 2: DHCS Fraud & Abuse Reporting</h3>
            <p className="text-foreground mb-6">
              If UCLA Health has failed to process medical transportation reimbursements (TARs, vouchers, NEMT claims) or has deliberately withheld care coordination, this constitutes Medi-Cal fraud.
            </p>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  DHCS Fraud & Abuse Hotline
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">1-800-MEDI-CAL (1-800-633-4225)</p>
                <p className="text-foreground text-sm mb-2">
                  <strong>Hours:</strong> Monday–Friday, 8:00 AM to 5:00 PM
                </p>
                <p className="text-foreground text-sm">
                  <strong>What to report:</strong> Denial of FFS medical exemption benefits, failure to process travel authorizations, institutional barriers to care coordination.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Required Information for Filing</h4>
                <ul className="text-foreground text-sm space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Your Medi-Cal ID number</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Specific dates</strong> of denied services or non-response</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Provider name and department</strong> that failed to respond</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Documentation</strong> of harm caused (delayed care, financial burden, medical deterioration)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CDPH Formal Complaint */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Step 3: California Department of Public Health (CDPH) Formal Complaint</h3>
            <p className="text-foreground mb-6">
              CDPH investigates health facility violations including failure to provide adequate care coordination and ADA non-compliance.
            </p>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  California Department of Public Health
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">Toll-Free: 800-228-1019</p>
                <p className="text-foreground font-mono text-lg mb-2">Direct: 916-552-8700</p>
                <p className="text-foreground text-sm mb-2">
                  <strong>Mailing Address:</strong> CDPH, Health Facilities Inspection Division, Los Angeles District Office, 3400 Aerojet Avenue, Suite 323, El Monte, CA 91731
                </p>
                <p className="text-foreground text-sm">
                  <strong>What to report:</strong> Institutional failure to provide safe, coordinated care; negligence in handling complex genetic cases; ADA violations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Joint Commission */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Step 4: The Joint Commission (National Accreditation Body)</h3>
            <p className="text-foreground mb-6">
              The Joint Commission accredits UCLA Health and investigates complaints about quality of care, patient safety, and institutional responsiveness.
            </p>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  The Joint Commission
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">Phone: 800-994-6610</p>
                <p className="text-foreground font-mono text-lg mb-2">Fax: 630-792-5636</p>
                <p className="text-foreground font-mono text-lg mb-2">Email: [email protected]</p>
                <p className="text-foreground text-sm mb-2">
                  <strong>Mailing Address:</strong> Office of Quality and Patient Safety, The Joint Commission, One Renaissance Boulevard, Oakbrook Terrace, IL 60181
                </p>
                <p className="text-foreground text-sm">
                  <strong>What to report:</strong> Patient safety concerns, institutional failure to implement genomic safety protocols, non-responsiveness to patient complaints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HHS Office for Civil Rights */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Step 5: U.S. Dept of Health & Human Services (Office for Civil Rights)</h3>
            <p className="text-foreground mb-6">
              File here for violations of civil rights, including ADA discrimination and failure to provide reasonable medical accommodations.
            </p>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  HHS Office for Civil Rights
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">Phone: 800-368-1019</p>
                <p className="text-foreground text-sm mb-2">
                  <strong>Online:</strong> OCR Complaint Portal
                </p>
                <p className="text-foreground text-sm mb-2">
                  <strong>Mailing Address:</strong> U.S. Department of Health and Human Services, 200 Independence Ave, SW Room 509F, HHH Building, Washington, D.C. 20201
                </p>
                <p className="text-foreground text-sm">
                  <strong>What to report:</strong> Discrimination based on disability, failure to provide ADA-compliant care protocols, violation of patient civil rights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Board of California */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Step 6: Medical Board of California</h3>
            <p className="text-foreground mb-6">
              File here for complaints regarding specific physician conduct, negligence, and failure to meet the standard of care.
            </p>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Medical Board of California
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">Toll-Free: 800-633-2322</p>
                <p className="text-foreground font-mono text-lg mb-2">Direct: 916-263-2382</p>
                <p className="text-foreground text-sm">
                  <strong>What to report:</strong> Physician negligence, failure to follow documented genomic protocols, unprofessional conduct, and harm caused by delays in care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Printable Complaint Template */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Printable Formal Complaint Template</h3>
            <p className="text-foreground mb-6">
              Use this template when filing complaints with DHCS, CDPH, or The Joint Commission. Customize with your specific dates and incidents.
            </p>

            <div className="bg-muted/50 p-6 rounded border border-border font-mono text-sm leading-relaxed">
              <p className="mb-4 font-bold">FORMAL COMPLAINT - INSTITUTIONAL FAILURE & CARE DENIAL</p>
              
              <p className="mb-4">
                <strong>Complainant:</strong> [Your Name]<br />
                <strong>Medi-Cal ID:</strong> [Your ID]<br />
                <strong>Date of Complaint:</strong> [Today's Date]<br />
                <strong>Facility:</strong> UCLA Health System (Westwood/Santa Monica)
              </p>

              <p className="mb-4">
                <strong>SUMMARY OF COMPLAINT:</strong><br />
                I am filing a formal complaint regarding institutional failure to provide adequate care coordination, ADA-compliant communication, and timely response to critical medical needs. Specifically:
              </p>

              <p className="mb-4">
                1. On [DATE], I contacted the Office of Patient Experience regarding [SPECIFIC ISSUE: e.g., "failure to process medical transportation authorization for 1000-mile travel to specialized care"].<br />
                <br />
                2. As of [TODAY'S DATE], I have received no response after [NUMBER] weeks of waiting.<br />
                <br />
                3. This non-response has resulted in [SPECIFIC HARM: e.g., "delayed access to critical genomic monitoring, financial burden, medical deterioration"].
              </p>

              <p className="mb-4">
                <strong>REGULATORY VIOLATIONS:</strong><br />
                • Failure to provide effective communication (ADA Title III)<br />
                • Denial of FFS medical exemption benefits (Medi-Cal violation)<br />
                • Institutional negligence in care coordination<br />
                • Failure to implement required genomic safety protocols
              </p>

              <p>
                <strong>REQUESTED REMEDY:</strong><br />
                Immediate assignment of dedicated care coordinator, restoration of EHR baseline data, formal institutional review, and corrective action plan to prevent future failures.
              </p>
            </div>

            <div className="mt-6 text-center">
              <button 
                onClick={() => window.print()} 
                className="bg-accent text-background px-6 py-3 rounded font-semibold hover:bg-accent/90 transition"
              >
                Print This Template
              </button>
            </div>
          </div>
        </section>

        {/* Final Accountability */}
        <section className="mb-12">
          <div className="danger-box">
            <h3 className="text-2xl font-bold text-foreground mb-4">Critical Timeline for Filing</h3>
            <p className="text-foreground mb-4">
              <strong>Do not wait:</strong> File complaints immediately. The longer you wait, the weaker your case becomes. Document everything with dates.
            </p>
            <ul className="text-foreground space-y-2">
              <li className="flex gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Today:</strong> File with UCLA Compliance (310-794-8638)</span>
              </li>
              <li className="flex gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Within 48 hours:</strong> File with DHCS Fraud & Abuse (1-800-MEDI-CAL)</span>
              </li>
              <li className="flex gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Within 1 week:</strong> File with CDPH (800-228-1019)</span>
              </li>
              <li className="flex gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Within 2 weeks:</strong> File with The Joint Commission (800-994-6610)</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
