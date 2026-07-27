import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, DollarSign, FileText, Clock, CheckCircle } from "lucide-react";

export default function CareCoordination() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Care Coordination & Entitlements</h1>
        </div>
      </nav>

      <main className="container max-w-4xl py-12">
        {/* Page Header */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">Medi-Cal NEMT Reimbursement Entitlements</h2>
          <p className="text-lg text-muted-foreground">
            California Medi-Cal members are entitled to reimbursement for transportation expenses to access covered medical services. This section documents your rights, the filing process, and required documentation.
          </p>
        </section>

        {/* Who Is Eligible */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Who Is Eligible for NEMT Reimbursement?</h3>
            
            <div className="directive-box mb-8">
              <h4 className="font-bold text-foreground mb-3">Eligible Medi-Cal Members:</h4>
              <ul className="space-y-2 text-foreground">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Members with full-scope Medi-Cal coverage</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Pregnant members (including one year after pregnancy)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Members who drove to appointments using a private vehicle</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Members who paid for lodging and/or meal expenses for covered services</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Approved representatives acting on behalf of eligible members</span>
                </li>
              </ul>
            </div>

            <div className="warning-box">
              <p className="text-foreground">
                <strong>Important:</strong> If you receive Medi-Cal through a managed care plan, contact your plan's member service department directly for reimbursement requests.
              </p>
            </div>
          </div>
        </section>

        {/* What Is Covered */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">What Transportation Expenses Are Covered?</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-3">Mileage Reimbursement</h4>
                <p className="text-foreground text-sm">
                  Reimbursement for driving your own vehicle to a Medi-Cal covered service appointment. Rate is set annually by the IRS (currently 67¢ per mile for 2024).
                </p>
              </div>
              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-3">Lodging Expenses</h4>
                <p className="text-foreground text-sm">
                  Reimbursement for hotel/lodging when the service is not available in your local community and overnight travel is required. Subject to DHCS daily per-diem rates.
                </p>
              </div>
              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-3">Meal Expenses</h4>
                <p className="text-foreground text-sm">
                  Reimbursement for meals when overnight travel is required. Subject to DHCS daily per-diem rates. Requires pre-authorization.
                </p>
              </div>
              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-3">Other Travel Expenses</h4>
                <p className="text-foreground text-sm">
                  Parking, tolls, and other incidental transportation costs directly related to accessing covered services.
                </p>
              </div>
            </div>

            <div className="critical-box">
              <p className="text-foreground">
                <strong>Requirement:</strong> You must attest that you have an unmet transportation need and do not have another way to get to your appointment.
              </p>
            </div>
          </div>
        </section>

        {/* Pre-Authorization */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Pre-Authorization Requirement for Lodging & Meals</h3>
            
            <div className="directive-box mb-8">
              <h4 className="font-bold text-foreground mb-4">MANDATORY: Pre-Authorization Required</h4>
              <p className="text-foreground mb-4">
                DHCS requires pre-authorization of lodging and meals to ensure you do not incur unnecessary or unexpected expenses and are reimbursed up to approved DHCS daily per-diem rates.
              </p>
              <p className="text-foreground">
                <strong>Exception:</strong> If your appointment schedule does not allow time for pre-authorization, DHCS may still process your request after the fact.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="clinical-header">DHCS Daily Per-Diem Rates</h4>
              <p className="text-foreground mb-4">
                Approved daily per-diem rates are established by DHCS and can be found at:
              </p>
              <div className="bg-muted/50 p-4 rounded border border-border">
                <p className="font-mono text-sm text-foreground break-all">
                  www.calhr.ca.gov/employees/pages/travel-reimbursements.aspx
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filing Process */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">How to File for Reimbursement</h3>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-lg font-bold text-accent mb-2">Step 1: Download the Form</h4>
                <p className="text-foreground mb-3">
                  Download the <strong>Medi-Cal Fee-for-Service Member Reimbursement Form for Transportation Expenses</strong> from:
                </p>
                <div className="bg-muted/50 p-3 rounded text-sm text-foreground font-mono break-all">
                  https://www.dhcs.ca.gov/services/medi-cal/Pages/Transportation_Beneficiaries_FAQ.aspx
                </div>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-lg font-bold text-accent mb-2">Step 2: Complete All Required Sections</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">I.</span>
                    <span>Member Information (your name, address, contact info, BIC number)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">II.</span>
                    <span>Photocopy of your Medi-Cal Benefits ID Card</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">III.</span>
                    <span>Member Agreement (sign and date)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">IV.</span>
                    <span>Appointment Information (for each trip)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">V.</span>
                    <span>Payee Data Record (STD 204 Form)</span>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-lg font-bold text-accent mb-2">Step 3: Get Provider Signature</h4>
                <p className="text-foreground">
                  Have the enrolled Medi-Cal provider you visited sign and verify the appointment information on your form before submitting to DHCS.
                </p>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-lg font-bold text-accent mb-2">Step 4: Gather Required Documentation</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Mileage:</strong> No receipt required (use IRS mileage rate)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Lodging & Meals:</strong> ORIGINAL itemized receipts showing proof of payment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Other Expenses:</strong> ORIGINAL itemized receipts with business name/address and proof of payment</span>
                  </li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-lg font-bold text-accent mb-2">Step 5: Mail Completed Form</h4>
                <p className="text-foreground mb-3">
                  Mail your completed form and all required documents to:
                </p>
                <div className="bg-muted/50 p-4 rounded border border-border">
                  <p className="font-semibold text-foreground">Beneficiary Service Center</p>
                  <p className="text-foreground">P.O. Box 138008</p>
                  <p className="text-foreground">Sacramento, CA 95813-8008</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Requirements */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Critical Form Requirements</h3>
            
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">✓ Ink & Legibility</h4>
                <p className="text-foreground text-sm">
                  Form must be completed in blue or black ink and must be legible. Illegible, faded, or damaged forms cannot be processed.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">✓ Original Signature</h4>
                <p className="text-foreground text-sm">
                  Original signatures only. Copies and DocuSign signatures will NOT be accepted.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">✓ Original Receipts</h4>
                <p className="text-foreground text-sm">
                  ORIGINAL itemized receipts required for lodging and meals. Copies are not acceptable.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">✓ Proof of Payment</h4>
                <p className="text-foreground text-sm">
                  All receipts must show proof of payment (credit card, check, cash receipt with date).
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">✓ Appointment Verification</h4>
                <p className="text-foreground text-sm">
                  Provider must sign and verify the appointment details. Form cannot be processed without provider signature.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Contact */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Timeline & Contact Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-3">When to Submit</h4>
                <p className="text-foreground text-sm mb-3">
                  <strong>Recommended:</strong> Within one month after your appointment
                </p>
                <p className="text-foreground text-sm">
                  <strong>Deadline:</strong> Requests more than one year after date of service may not be processed
                </p>
              </div>

              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-3">Processing Time</h4>
                <p className="text-foreground text-sm">
                  You will receive an answer via USPS mail within 60 days after DHCS receives your completed form and verifies eligibility and completeness.
                </p>
              </div>

              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-3">Beneficiary Service Center</h4>
                <p className="text-foreground text-sm font-semibold mb-2">Phone:</p>
                <p className="text-foreground text-sm font-mono">(916) 403-2007</p>
                <p className="text-foreground text-sm font-semibold mt-3 mb-2">TDD/TTY:</p>
                <p className="text-foreground text-sm font-mono">(866) 784-2595</p>
              </div>

              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-3">Additional Resources</h4>
                <p className="text-foreground text-sm">
                  <strong>FAQ Document:</strong>
                </p>
                <p className="text-foreground text-sm font-mono break-all mt-2">
                  https://www.dhcs.ca.gov/services/medi-cal/Pages/Transportation_Beneficiaries_FAQ.aspx
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Printable Checklist */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">NEMT Filing Checklist</h3>
            
            <div className="bg-muted/50 p-6 rounded border border-border space-y-3">
              {[
                "Download Medi-Cal Fee-for-Service Reimbursement Form for Transportation Expenses",
                "Complete Section I: Member Information (name, address, BIC number)",
                "Photocopy Medi-Cal Benefits ID Card",
                "Complete Section II: Member Agreement and sign/date",
                "Complete Section IV: Appointment Information (for each trip)",
                "Have Medi-Cal provider sign and verify appointment details",
                "Gather ORIGINAL itemized receipts for lodging/meals (with proof of payment)",
                "Calculate mileage using IRS rate (check current rate on irs.gov)",
                "Complete Section V: Payee Data Record (STD 204 Form)",
                "Verify all forms are legible and in blue or black ink",
                "Verify original signature on Member Agreement",
                "Organize documents in order: Form, BIC copy, receipts, appointment verifications",
                "Mail to Beneficiary Service Center, P.O. Box 138008, Sacramento, CA 95813-8008",
                "Keep copy for your records",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <input type="checkbox" className="w-5 h-5 flex-shrink-0 mt-0.5 accent-accent" disabled />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 mt-12">
          <Link href="/safety" className="text-accent hover:underline">
            ← Safety Firewall
          </Link>
          <Link href="/directive" className="text-accent hover:underline ml-auto">
            Clinical Directive →
          </Link>
        </div>
      </main>
    </div>
  );
}


        {/* FAQ Section */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-accent mb-2">Q: Will Medi-Cal reimburse me for travel expenses?</h4>
                <p className="text-foreground">
                  <strong>A:</strong> Yes, if all other means of transportation have been reasonably exhausted, DHCS will reimburse you for mileage to and from an approved FFS Medi-Cal appointment at the IRS medical service rate. Lodging and meals are also reimbursable if the service is not available in your local community and overnight travel is required.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-accent mb-2">Q: I have a monthly Share of Cost (SOC). Will that apply to NMT?</h4>
                <p className="text-foreground">
                  <strong>A:</strong> Yes. If you have a SOC, your monthly SOC will also apply to NMT. Any payment you make for NMT will go toward paying down your monthly SOC.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-accent mb-2">Q: I receive Medi-Cal through a managed care plan. How do I request NEMT?</h4>
                <p className="text-foreground">
                  <strong>A:</strong> If you receive Medi-Cal through a managed care health plan (MCP), contact your plan's member service department to request NEMT. You will need a prescription from your doctor about your need for NEMT. For a list of MCPs and their contact information, visit the DHCS Medi-Cal Managed Care Health Plan Directory.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-accent mb-2">Q: Will Medi-Cal reimburse me for gas/mileage if I drive myself?</h4>
                <p className="text-foreground">
                  <strong>A:</strong> No, Medi-Cal does not reimburse beneficiaries who drive themselves to their appointments. However, MCPs may reimburse friends or family members who drove the beneficiary to their appointment. Some MCPs may require prior approval, so check with your MCP first.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-accent mb-2">Q: What if I have questions about my reimbursement?</h4>
                <p className="text-foreground">
                  <strong>A:</strong> For FFS benefits and eligibility questions, email <span className="font-mono text-sm">DHCSNMT@dhcs.ca.gov</span>. For managed care questions, contact your plan's member service department (phone numbers available on the DHCS Medi-Cal Managed Care Health Plan Directory).
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-accent mb-2">Q: What if my appointment schedule doesn't allow time for pre-authorization?</h4>
                <p className="text-foreground">
                  <strong>A:</strong> If your appointment schedule does not allow time for pre-authorization of lodging and meals, DHCS may still process your request after the fact. Submit your completed form with original receipts and proof of payment as soon as possible after your appointment.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-accent mb-2">Q: How long do I have to submit my reimbursement request?</h4>
                <p className="text-foreground">
                  <strong>A:</strong> DHCS recommends submitting your request within one month after your appointment. Requests that are more than one year after the date of service may not be processed.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-accent mb-2">Q: What if my form is rejected or incomplete?</h4>
                <p className="text-foreground">
                  <strong>A:</strong> Ensure your form is legible, in blue or black ink, and includes an original signature (not copies or DocuSign). All receipts must be original and show proof of payment. If your form is rejected, DHCS will notify you via USPS mail with instructions on how to resubmit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Additional Resources</h3>
            
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">DHCS FFS Transportation Reimbursement FAQ</h4>
                <p className="text-foreground text-sm mb-2">
                  Comprehensive FAQ document covering all aspects of FFS transportation reimbursement
                </p>
                <a href="https://www.dhcs.ca.gov/file/ffs-nmt-nemt-member-reimbursement-faq-pdf/" className="text-accent hover:underline text-sm font-mono break-all">
                  https://www.dhcs.ca.gov/file/ffs-nmt-nemt-member-reimbursement-faq-pdf/
                </a>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Pre-Authorization Request Form (Lodging & Meals)</h4>
                <p className="text-foreground text-sm mb-2">
                  Form for requesting pre-authorization of lodging and meal expenses
                </p>
                <a href="https://www.dhcs.ca.gov/file/ffs-nmt-nemt-pre-authorization-form-pdf/" className="text-accent hover:underline text-sm font-mono break-all">
                  https://www.dhcs.ca.gov/file/ffs-nmt-nemt-pre-authorization-form-pdf/
                </a>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Mileage Only Reimbursement Form</h4>
                <p className="text-foreground text-sm mb-2">
                  Simplified form for mileage-only reimbursement requests
                </p>
                <a href="https://www.dhcs.ca.gov/file/ffs-nmt-member-reimbursement-form-mileage-pdf/" className="text-accent hover:underline text-sm font-mono break-all">
                  https://www.dhcs.ca.gov/file/ffs-nmt-member-reimbursement-form-mileage-pdf/
                </a>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Medi-Cal Managed Care Health Plan Directory</h4>
                <p className="text-foreground text-sm mb-2">
                  Contact information for all Medi-Cal managed care plans
                </p>
                <a href="https://www.dhcs.ca.gov/individuals/medi-cal-managed-care-health-plan-directory/" className="text-accent hover:underline text-sm font-mono break-all">
                  https://www.dhcs.ca.gov/individuals/medi-cal-managed-care-health-plan-directory/
                </a>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">DHCS Transportation Services Homepage</h4>
                <p className="text-foreground text-sm mb-2">
                  Main resource page for all Medi-Cal transportation services
                </p>
                <a href="https://www.dhcs.ca.gov/services/medi-cal-resources/transportation-services/" className="text-accent hover:underline text-sm font-mono break-all">
                  https://www.dhcs.ca.gov/services/medi-cal-resources/transportation-services/
                </a>
              </div>

              <div className="bg-accent/10 p-4 rounded border border-accent">
                <h4 className="font-bold text-accent mb-2">Email Support</h4>
                <p className="text-foreground text-sm">
                  For NMT FFS benefits and eligibility questions, email:
                </p>
                <p className="text-foreground font-mono text-sm mt-2">DHCSNMT@dhcs.ca.gov</p>
              </div>
            </div>
          </div>
        </section>
