import React from 'react';

export default function ComprehensiveDirective() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        {/* Header */}
        <header className="border-b-4 border-blue-600 pb-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
            COMPREHENSIVE MASTER DIRECTIVE
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Complete Clinical, Genomic, and Institutional Accountability Protocol
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>For:</strong> Dr. Jessica Eby, UCLA Family Medicine & All Referral Providers
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Date:</strong> July 27, 2026
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Patient:</strong> Brandy Michelle Bianchini
          </p>
          <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-600">
            <p className="text-red-800 font-bold">
              STATUS: URGENT - SYSTEMIC CARE COORDINATION FAILURE REQUIRING IMMEDIATE REMEDIATION
            </p>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">
            EXECUTIVE SUMMARY: CRITICAL SYSTEM-WIDE FAILURE
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This document consolidates <strong>ALL clinical, genomic, institutional, and care coordination failures</strong> documented over the past month (June 29 - July 27, 2026) and mandates immediate implementation of corrective protocols.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">CORE PROBLEM</h3>
            <p className="text-yellow-900 mb-3">
              Systemic incompetence at the PCP level has cascaded through every referral, resulting in:
            </p>
            <ul className="list-disc list-inside text-yellow-900 space-y-2">
              <li>Multiple STAT orders ignored for weeks/months</li>
              <li>Procedures NOT scheduled (EGD, colonoscopy, biopsies, ultrasound-guided procedures)</li>
              <li>Tissue testing NOT ordered</li>
              <li>Imaging NOT properly interpreted</li>
              <li>Medication/supplement protocols NOT implemented</li>
              <li>Multidisciplinary coordination NOT occurring</li>
              <li>Patient experiencing declining health and worsening symptoms</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">IMMEDIATE MANDATES</h3>
            <ol className="list-decimal list-inside text-blue-900 space-y-2">
              <li>Chart note corrections with proper protocol language</li>
              <li>Referral refresh across ALL specialists with complete protocol information</li>
              <li>Nursing notes consolidation and integration from ALL providers</li>
              <li>TAR filing for medical transportation and procedures</li>
              <li>Pre-procedure protocols with exact medication timing and burn rate calculations</li>
              <li>Staff coordination and communication protocols</li>
              <li>Hereditary cancer surveillance with immunostain testing implementation</li>
              <li>Daily medication/infusion management (NOT just procedural)</li>
              <li>Handoff documentation for Dr. D'Oro (potential replacement PCP)</li>
              <li>Multidisciplinary coordination mandate (OBG-GI-Neuro-Oncology-Hematology-Cardiology)</li>
            </ol>
          </div>
        </section>

        {/* Section IV: FFS Medi-Cal NEM */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">
            IV. FFS MEDI-CAL NON-EMERGENCY MEDICAL TRANSPORTATION (NEM) REIMBURSEMENT PROTOCOL
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This section outlines the steps for obtaining reimbursement for mileage, lodging, and meals for medically necessary appointments that require travel outside your local community.
          </p>

          <div className="bg-gray-50 p-6 rounded mb-6 border-l-4 border-blue-600">
            <h3 className="font-bold text-gray-900 mb-2">Legal Mandate</h3>
            <p className="text-gray-700">
              Medi-Cal beneficiaries with Fee-for-Service (FFS) are eligible for reimbursement of mileage, lodging, and/or meals for medically necessary appointments when other transportation means are exhausted and the service is not available locally. Pre-authorization is required for lodging and meals.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Key Steps for Reimbursement (as per DHCS Form):</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Obtain the Form:</strong> Download the "Medi-Cal Fee-for-Service Reimbursement Form for Transportation Expenses" from the DHCS website or call the Beneficiary Service Center at (916) 403-2007 (TDD/TTY: 866-784-2595).</li>
              <li><strong>Complete the Form:</strong> Fill out the form using blue or black ink, ensuring legibility. An original signature is required (no copies or DocuSign). Include a photocopy of your Benefits Identification Card (BIC).</li>
              <li><strong>Appointment Information (Section IV):</strong> Complete for each appointment. The Medi-Cal provider <em>must sign</em> the Appointment Verification Form (Section IV.A).</li>
              <li><strong>Receipts:</strong> Provide ORIGINAL itemized receipts for lodging and meals (if applicable), showing proof of payment. Mileage does not require receipts.</li>
              <li><strong>Payee Data Record (STD 204 Form):</strong> Complete, sign, and date this form. Mark "Sole Proprietor/Individual" and enter SSN/ITIN.</li>
              <li><strong>Submission:</strong> Mail the completed form and all required documents (photocopy of BIC, original receipts) to:
                <div className="ml-6 mt-2 p-3 bg-white border border-gray-300 rounded">
                  <p>Beneficiary Service Center</p>
                  <p>P.O. Box 138008</p>
                  <p>Sacramento, CA 95813-8008</p>
                </div>
              </li>
              <li><strong>Timeline:</strong> Submit within one month of the appointment. Requests over one year old may not be processed. Expect a response via USPS mail within 60 days.</li>
            </ol>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6">
            <h3 className="font-bold text-red-900 mb-2">Escalation for Non-Compliance</h3>
            <p className="text-red-900">
              If DHCS fails to provide services or discriminates, contact the Office of Civil Rights at <strong>1-916-440-7370</strong> or <a href="mailto:CivilRights@dhcs.ca.gov" className="underline">CivilRights@dhcs.ca.gov</a>. You can also file a complaint with the U.S. Department of Health and Human Services, Office for Civil Rights.
            </p>
          </div>
        </section>

        {/* Section V: PCP Referral Mandates */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">
            V. PCP REFERRAL MANDATES FOR ALL SPECIALISTS
          </h2>

          <div className="bg-gray-50 p-6 rounded mb-6 border-l-4 border-blue-600">
            <h3 className="font-bold text-gray-900 mb-2">Legal Mandate</h3>
            <p className="text-gray-700">
              Dr. Jessica Eby (PCP) and any subsequent PCP (e.g., Dr. D'Oro) are legally mandated to issue comprehensive referrals that accurately reflect the patient's complex genomic profile and medical needs. Failure to do so constitutes medical negligence and a failure of care coordination.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Mandatory Referral Content (for PCP to all specialists):</h3>
            <p className="text-gray-700 mb-3">Every referral MUST explicitly state and include documentation for:</p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Genomic Profile:</strong> STX16 deletion (PHP1b), PMS2 deletion (Lynch Syndrome), CASP10 VUS (ALPS), CLCN7 VUS (Osteopetrosis), TBX1 VUS (DiGeorge), TLR3 VUS. Include the full Bianchini UCLA Genomic Protocol.docx as an attachment.</li>
              <li><strong>Absolute Contraindications:</strong> List all prohibited medications (Propofol, Fentanyl, Dilaudid, Lidocaine, Epinephrine, Steroids, Gadolinium/Iodine-based contrast, PEG 3350, standard hypertonic phosphate solutions) and explain the underlying genomic/metabolic mechanisms (G-protein signaling collapse, methylation/detoxification blockade).</li>
              <li><strong>Mandatory Pre-Procedure Lab Panel:</strong> Ensure the following labs are drawn and reviewed before any procedure, surgery, or anesthesia: Serum Calcium (albumin-corrected), Serum Phosphate, Serum Magnesium, Intact PTH, 25-OH Vitamin D, 1,25(OH)2 Vitamin D, Serum Albumin, EKG/QTc Interval, TSH + Free T4, Current Calcitriol & Calcium Supplement Doses. Also include Urinary cAMP Profile (for G-protein signaling), 24-hr Fractional Excretion (Renal Leak), and Methylation/OAT panel.</li>
              <li><strong>Lynch Syndrome NCCN Surveillance Protocol:</strong> Referrals for colonoscopy (every 1-2 years), annual endometrial biopsy + transvaginal ultrasound, annual urinalysis with cytology, annual skin examination, aspirin chemoprevention discussion, and annual CBC & metabolic panel.</li>
              <li><strong>VUS Monitoring Protocol:</strong> CASP10: Periodic lymphocyte subset panels, autoimmune marker monitoring. CLCN7: Annual DEXA bone density scan, Ophthalmology monitoring. TBX1: T-cell subset panel annually, Calcium monitoring (dual pathway), Flag to immunology. TLR3: Viral susceptibility awareness.</li>
              <li><strong>Pharmacogenomics:</strong> Once available, the Tempus Pharmacogenomics report must be reviewed and drug metabolism flags incorporated into all medication orders.</li>
              <li><strong>GHPP Application Support:</strong> Request specialists to act as supporting providers for the Genetically Handicapped Persons Program (GHPP) application process.</li>
            </ol>
          </div>
        </section>

        {/* Section VI: In-Hospital Protocols */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">
            VI. IN-HOSPITAL NEEDS & PROTOCOLS
          </h2>

          <div className="bg-gray-50 p-6 rounded mb-6 border-l-4 border-blue-600">
            <h3 className="font-bold text-gray-900 mb-2">Legal Mandate</h3>
            <p className="text-gray-700">
              All hospital departments are legally mandated to adhere to the patient's specific genomic and clinical protocols to prevent iatrogenic harm. Failure to implement these protocols constitutes a patient safety violation and medical negligence.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Mandatory In-Hospital Protocols:</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Procedural Safety Firewall:</strong> All pre-meds must be administered IV. Immediate Pre-load (25m prior): 25mg IV Benadryl + 20mg IV Famotidine. Metabolic Rescue: Post-procedural IV NAC and Methyl-B12 infusion.</li>
              <li><strong>Lactated Ringer's Protocol:</strong> Minimum 1-hour full infusion. Must be administered 20 minutes pre-procedure, continued during imaging (45-60 minutes minimum), and continued post-procedure for monitoring.</li>
              <li><strong>Medication Burn Rate:</strong> Benadryl: Burns through in ~45-60 minutes. Diazepam: Faster clearance than standard population. H1/H2 blockers: Oral absorption only 5-15% due to GI dysfunction. Albuterol: Administer 1-2 hours before procedure.</li>
              <li><strong>Contrast Toxicity Management:</strong> Not an allergy, but metabolic poisoning. Requires pre-procedure supplementation (methylfolate, B12, NAC, glutathione) and post-procedure monitoring/supplementation.</li>
              <li><strong>Imaging Coordination:</strong> All previous imaging (MRI, CT, X-rays, trans-echo) must be pulled together for interpretation by radiologists. Radiological intervention required for interpretation and coordination.</li>
              <li><strong>Staffing/Monitoring:</strong> Nurse MUST stay with patient during AND after imaging sequence. Vitals must be monitored continuously. Post-procedure crisis is likely if not properly monitored.</li>
              <li><strong>Immunostain Testing:</strong> For PMS2 tumor suppressor, required BEFORE any biopsies.</li>
              <li><strong>Specific Procedures to be Ordered:</strong> EGD, colonoscopy, pancreas biopsy with ultrasound guidance, tissue testing for biopsies, chest mass tissue removal testing, echocardiograms, neurological impairment testing, neurotransmitter testing, neurohormone testing, hormone testing.</li>
            </ol>
          </div>
        </section>

        {/* Section VII: Consequences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">
            VII. CONSEQUENCES OF NON-COMPLIANCE
          </h2>

          <div className="bg-red-50 border-l-4 border-red-600 p-6">
            <p className="text-red-900 mb-3">
              Failure to adhere to these mandated protocols, referral requirements, and reimbursement procedures will result in immediate escalation to regulatory bodies and legal action, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-red-900 space-y-2">
              <li><strong>California Medical Board:</strong> For provider negligence and failure to follow established protocols.</li>
              <li><strong>DHCS:</strong> For denial of medically necessary care and reimbursement failures.</li>
              <li><strong>CMS/HHS Office for Civil Rights:</strong> For discrimination under the Americans with Disabilities Act (ADA).</li>
              <li><strong>The Joint Commission:</strong> For patient safety violations and accreditation breaches.</li>
              <li><strong>Legal Counsel:</strong> For medical malpractice and other civil actions.</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-gray-300 pt-8 mt-12 text-center text-gray-600 text-sm">
          <p className="mb-2">
            <strong>Document Status:</strong> ACTIVE - Pending Implementation
          </p>
          <p>
            For questions or clarifications, contact the patient advocate or Dr. Jessica Eby's office.
          </p>
        </footer>
      </div>
    </div>
  );
}
