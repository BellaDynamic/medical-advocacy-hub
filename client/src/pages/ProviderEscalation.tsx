import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, Phone, Mail, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ProviderEscalation() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Provider Escalation & Technical Billing</h1>
        </div>
      </nav>

      <main className="container max-w-4xl py-12">
        {/* Page Header */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">Official Advocacy & Escalation Directory</h2>
          <p className="text-lg text-muted-foreground">
            This is your master desk reference containing exact publicly cited contacts, phone numbers, and technical billing criteria for immediate provider escalation and reimbursement processing.
          </p>
        </section>

        {/* UCLA Health System */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">UCLA Health System (Westwood & Santa Monica)</h3>
            <p className="text-foreground mb-6">
              Use these lines to bypass regular clinic receptionists and connect with high-level patient managers who have authority to assign dedicated case navigators and approve medical housing referrals.
            </p>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  UCLA Patient Affairs / Office of the Patient Experience
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">(310) 267-9113</p>
                <p className="text-foreground text-sm mb-3">
                  <strong>Hours:</strong> Monday–Friday, 8:00 AM to 5:00 PM
                </p>
                <p className="text-foreground text-sm">
                  <strong>Purpose:</strong> Central department for filing formal complaints regarding social services mismanagement, lack of clinic coordination, and physical/financial trauma caused by administrative delays. This is your primary escalation line for case review and coordination.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  UCLA Santa Monica Medical Center (Patient Affairs & Spiritual Care)
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">(424) 259-9120</p>
                <p className="text-foreground text-sm">
                  <strong>Purpose:</strong> Direct desk for the location housing specialized departments. Use this line for location-specific coordination and case management.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  The Tiverton House (UCLA Subsidized Patient Lodging)
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">(310) 794-8759</p>
                <p className="text-foreground text-sm">
                  <strong>Purpose:</strong> Medical housing coordination. Ask for the main desk or international/specialized coordination lines for complex care requirements.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  UCLA Health Language & Disability Services
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">(310) 267-8001</p>
                <p className="text-foreground text-sm">
                  <strong>Purpose:</strong> If you require documents in alternative accessible formats due to disability and overlapping complex care requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* State/Federal FFS Infrastructure */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">State/Federal Fee-for-Service (FFS) & GHPP Infrastructure</h3>
            <p className="text-foreground mb-6">
              Direct central state phone lines in Sacramento handling FFS Medical Exemptions and specialized genomic files.
            </p>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  DHCS FFS Beneficiary Service Center / Reimbursement Processing Center
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">(916) 403-2007</p>
                <p className="text-foreground text-sm mb-2">
                  <strong>TTY/Hearing Impaired:</strong> <span className="font-mono">(866) 784-2595</span>
                </p>
                <p className="text-foreground text-sm">
                  <strong>Purpose:</strong> Official hotline for tracking retroactive 12-month claim packets and transportation reimbursement status. Use this line to verify claim processing and resolve payment holds.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  DHCS Genetically Handicapped Persons Program (GHPP) Eligibility Division
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">(916) 552-9105</p>
                <p className="text-foreground text-sm mb-2">
                  <strong>Instructions:</strong> Press Option 2, then Option 2 again
                </p>
                <p className="text-foreground text-sm">
                  <strong>Purpose:</strong> Connects directly to a state case auditor to anchor overlapping complex genetic and genomic care pipelines. Use for GHPP eligibility verification and rare disease tracking coordination.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  DHCS FFS Member Travel Support Email
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">DHCSNMT@dhcs.ca.gov</p>
                <p className="text-foreground text-sm">
                  <strong>Purpose:</strong> Official non-managed care digital inbox for direct inquiries about FFS transportation rules and case exceptions.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Medi-Cal FFS Main Provider Portal / Telephone Service Center (TSC)
                </h4>
                <p className="text-foreground font-mono text-lg mb-2">1-800-541-5555</p>
                <p className="text-foreground text-sm">
                  <strong>Purpose:</strong> If provider staff claim they do not know how to submit a travel TAR, force them to call this line to speak with Medi-Cal Provider Relations for immediate screen-sharing assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Billing Requirements */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Technical Provider Requirements for Immediate Payout</h3>
            <p className="text-foreground mb-6">
              To guarantee retroactive claims or direct-vendor vouchers are processed and paid immediately without automated system audit holds, your provider must execute these specific data fields perfectly. The state's automated billing engine screens for three critical parameters:
            </p>

            {/* Requirement 1 */}
            <div className="mb-8">
              <div className="danger-box mb-4">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Requirement 1: Multi-Trip Signature & Stamp Mandate
                </h4>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border mb-4">
                <h4 className="font-bold text-accent mb-3">The Problem</h4>
                <p className="text-foreground text-sm">
                  The state will instantly reject an entire stack of reimbursement pages if a clerk simply writes "Attended" or signs a generic form.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-3">The Fix</h4>
                <p className="text-foreground text-sm mb-3">
                  On the official DHCS FFS Member Reimbursement Form, the provider must physically sign and date the <strong>"Section IV: Appointment Verification Form" for every single date you travel</strong>.
                </p>
                <p className="text-foreground text-sm">
                  <strong>Alternatively:</strong> The clinic supervisor must provide a printout of your UCLA Electronic Health Record (EHR) Appointment Attendance Ledger featuring an official clinic stamp.
                </p>
              </div>
            </div>

            {/* Requirement 2 */}
            <div className="mb-8">
              <div className="danger-box mb-4">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Requirement 2: 50-Mile Geographical Exemption Code on TAR
                </h4>
              </div>

              <p className="text-foreground text-sm mb-4">
                For future direct-vendor vouchers (where the state pays the airline or transit provider upfront), the provider cannot just type "patient needs a ride." The electronic Treatment Authorization Request (TAR) or Physician Certification Statement (PCS) must contain these specific components:
              </p>

              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h4 className="font-bold text-accent mb-2">Modality Type Confirmation</h4>
                  <p className="text-foreground text-sm">
                    The staff must specifically select <strong>"Air Transportation"</strong> or <strong>"Long-Distance Ground NEMT"</strong> in the dropdown field.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h4 className="font-bold text-accent mb-2">Chronicity Extension Box</h4>
                  <p className="text-foreground text-sm">
                    For overlapping complex genetic care and oncology tracking, the staff must flag the authorization duration as a <strong>365-day standing order</strong> so you do not have to refile biweekly.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded border border-border">
                  <h4 className="font-bold text-accent mb-3">Critical Core Justification Text</h4>
                  <p className="text-foreground text-sm mb-3">
                    The doctor must copy and paste this exact verbiage into the state system's notes box:
                  </p>
                  <div className="bg-background p-3 rounded border-l-4 border-accent font-mono text-xs text-foreground leading-relaxed">
                    "Member holds a full, active state/federal Fee-for-Service (FFS) Medical Exemption for high-complexity genomic tracking and rare genetic diseases. The ultra-specialized diagnostic sequencing protocols, cellular tracking interventions, and expert rare disease departments required for this member's treatment plan are entirely unavailable within a local 50-mile geographic radius of the member's Northern California residence in Shingle Springs. Driving a round-trip distance of 14+ hours triggers severe, documented physiological and neuromuscular degradation to the member's body. Direct-vendor commercial air vouchers, long-distance transit, and local medical lodging authorizations are a strict clinical and statutory necessity under CCR Title 22 § 51323 and § 51303 to protect life and prevent immediate physical harm."
                  </div>
                </div>
              </div>
            </div>

            {/* Requirement 3 */}
            <div className="mb-8">
              <div className="danger-box mb-4">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Requirement 3: Verification of Payee Data Record (STD 204)
                </h4>
              </div>

              <p className="text-foreground text-sm mb-4">
                When you submit your master packet to the P.O. Box in Sacramento, your provider or case manager must ensure your STD 204 Form matches your Medi-Cal profile exactly:
              </p>

              <div className="space-y-3">
                <div className="flex gap-3 p-3 bg-muted/50 rounded border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground text-sm font-semibold">Section 2 - Sole Proprietor/Individual</p>
                    <p className="text-foreground text-sm">Make sure only the box for "Sole Proprietor/Individual" is checked. Leaving other boxes marked or choosing business options will trigger a fraud flag because you are an individual beneficiary.</p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 bg-muted/50 rounded border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground text-sm font-semibold">Section 3 - Social Security Number Verification</p>
                    <p className="text-foreground text-sm">Verify your Social Security Number matches your state eligibility file exactly. Any mismatch will delay processing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Provider Instruction Sheet */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Printable Provider Instruction Sheet</h3>
            
            <div className="bg-muted/50 p-6 rounded border border-border space-y-4">
              <div className="border-b border-border pb-4">
                <h4 className="font-bold text-accent mb-2">INSTRUCTIONS FOR PROVIDER STAFF</h4>
                <p className="text-foreground text-sm">
                  This patient requires specialized documentation for state reimbursement processing. Please follow these exact steps to ensure immediate payment processing without audit holds.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <span className="text-foreground text-sm">
                    <strong>Sign Section IV of DHCS Form:</strong> For every appointment date, physically sign and date the "Section IV: Appointment Verification Form" on the official DHCS FFS Member Reimbursement Form.
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <span className="text-foreground text-sm">
                    <strong>Provide EHR Attendance Ledger:</strong> Alternatively, print the patient's UCLA Electronic Health Record (EHR) Appointment Attendance Ledger with official clinic stamp.
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <span className="text-foreground text-sm">
                    <strong>Submit TAR with Required Fields:</strong> For future direct-vendor vouchers, submit Treatment Authorization Request (TAR) with:
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>• Modality: "Air Transportation" or "Long-Distance Ground NEMT"</li>
                      <li>• Duration: 365-day standing order</li>
                      <li>• Justification: Use exact text provided (see above)</li>
                    </ul>
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="text-accent font-bold">4.</span>
                  <span className="text-foreground text-sm">
                    <strong>Verify STD 204 Form:</strong> Ensure "Sole Proprietor/Individual" is checked and SSN matches state eligibility file exactly.
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="text-accent font-bold">5.</span>
                  <span className="text-foreground text-sm">
                    <strong>Contact Provider Relations if Needed:</strong> If your staff needs assistance submitting TAR, call Medi-Cal Provider Relations at 1-800-541-5555 for screen-sharing assistance.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference Card */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Quick Reference Card</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-2">Immediate Escalation</h4>
                <p className="text-foreground text-sm font-mono">(310) 267-9113</p>
                <p className="text-foreground text-xs mt-2">UCLA Patient Affairs</p>
              </div>

              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-2">Reimbursement Status</h4>
                <p className="text-foreground text-sm font-mono">(916) 403-2007</p>
                <p className="text-foreground text-xs mt-2">DHCS Beneficiary Service</p>
              </div>

              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-2">Genomic Care Coordination</h4>
                <p className="text-foreground text-sm font-mono">(916) 552-9105</p>
                <p className="text-foreground text-xs mt-2">DHCS GHPP Division</p>
              </div>

              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-2">Provider Relations</h4>
                <p className="text-foreground text-sm font-mono">1-800-541-5555</p>
                <p className="text-foreground text-xs mt-2">Medi-Cal TSC</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 mt-12">
          <Link href="/coordination" className="text-accent hover:underline">
            ← Care Coordination
          </Link>
          <Link href="/" className="text-accent hover:underline ml-auto">
            Home →
          </Link>
        </div>
      </main>
    </div>
  );
}
