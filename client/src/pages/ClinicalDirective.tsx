import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, Printer, Download, AlertTriangle } from "lucide-react";

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
          <button
            onClick={handlePrint}
            className="ml-auto flex items-center gap-2 px-4 py-2 bg-accent text-background rounded hover:bg-accent/90 transition"
          >
            <Printer className="w-5 h-5" />
            Print
          </button>
        </div>
      </nav>

      <main className="container max-w-4xl py-12 print:py-0">
        {/* Printable Clinical Directive */}
        <div className="bg-white text-black p-8 print:p-0">
          {/* Header */}
          <div className="border-b-4 border-black pb-6 mb-8">
            <h1 className="text-4xl font-bold mb-2">CLINICAL DIRECTIVE FOR GENOMIC SAFETY</h1>
            <p className="text-lg font-semibold">Mandatory Provider Protocol</p>
            <p className="text-sm mt-2">Patient: Brandy Michelle Bianchini | Primary Care Coordinator: Dr. Jessica Eby, UCLA Family Medicine</p>
          </div>

          {/* Critical Alert Box */}
          <div className="border-4 border-red-600 bg-red-50 p-6 mb-8">
            <h2 className="text-2xl font-bold text-red-600 mb-3">MANDATORY SYSTEM DIRECTIVE</h2>
            <p className="text-black font-semibold mb-3">
              This patient presents with a non-standard biological engine requiring mandatory genomic safety mapping before any clinical intervention.
            </p>
            <p className="text-black">
              Standard clinical pathways, empirical radiological preps, and standardized procedural care models are mathematically and chemically guaranteed to induce severe systemic cascades (the "neuro-crash") due to absolute pathway contradictions. All diagnostic and therapeutic interventions are locked down pending completed mapping against this document.
            </p>
          </div>

          {/* Confirmed Pathogenic Variants */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">CONFIRMED PATHOGENIC VARIANTS</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">1. STX16 Deletion / PHP1b (Paternal Imprinting Defect)</h3>
              <div className="bg-gray-100 p-4 border-l-4 border-black">
                <p className="text-black mb-2"><strong>Mechanism:</strong> G-protein signaling disruption causing intracellular secondary messenger depletion</p>
                <p className="text-black mb-2"><strong>Clinical Impact:</strong> Autonomic collapse, neuromuscular failure, PTH/Calcium axis instability</p>
                <p className="text-black"><strong>Contraindicated Agents:</strong> Propofol, Fentanyl, standard opioids, benzodiazepines at standard doses</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">2. PMS2 Deletion / Lynch Syndrome (Compound Heterozygous)</h3>
              <div className="bg-gray-100 p-4 border-l-4 border-black">
                <p className="text-black mb-2"><strong>Mechanism:</strong> DNA mismatch repair deficiency + absolute methylation blockade</p>
                <p className="text-black mb-2"><strong>Clinical Impact:</strong> Toxic compound accumulation, impaired detoxification, cancer predisposition</p>
                <p className="text-black"><strong>Contraindicated Agents:</strong> Gadolinium contrast, iodine-based contrast, PEG 3350, NSAIDs</p>
              </div>
            </div>
          </div>

          {/* VUS Variants */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">VARIANTS OF UNCERTAIN SIGNIFICANCE (HIGH PRIORITY)</h2>
            
            <div className="bg-yellow-50 p-4 border-l-4 border-yellow-600 mb-4">
              <p className="text-black font-semibold">
                The following VUS require aggressive monitoring and may be pathogenic:
              </p>
            </div>

            <ul className="text-black space-y-2 ml-4">
              <li><strong>CASP10 (HIGH PRIORITY):</strong> Apoptosis regulation defect; monitor for lymphoproliferation</li>
              <li><strong>CLCN7:</strong> Chloride channel dysfunction; monitor for bone and immune effects</li>
              <li><strong>TBX1:</strong> Developmental transcription factor; monitor for cardiac/vascular changes</li>
              <li><strong>TLR3:</strong> Innate immunity defect; monitor for viral susceptibility and immune dysregulation</li>
            </ul>
          </div>

          {/* Pre-Procedure Mandatory Checklist */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">PRE-PROCEDURE MANDATORY CHECKLIST</h2>
            
            <div className="bg-blue-50 p-4 border-l-4 border-blue-600 mb-4">
              <p className="text-black font-semibold">
                Before ANY diagnostic or therapeutic intervention, complete ALL items below:
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 border-2 border-black rounded flex-shrink-0 flex items-center justify-center">☐</div>
                <p className="text-black"><strong>Genomic Safety Review:</strong> Consult this directive and confirm no contraindicated agents will be used</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 border-2 border-black rounded flex-shrink-0 flex items-center justify-center">☐</div>
                <p className="text-black"><strong>Mechanism Mapping:</strong> Document the exact pathway by which the intervention will interact with the patient's biology</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 border-2 border-black rounded flex-shrink-0 flex items-center justify-center">☐</div>
                <p className="text-black"><strong>Pre-Procedure Labs:</strong> CMP, CBC, Mg/K levels, coagulation panel, liver function tests</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 border-2 border-black rounded flex-shrink-0 flex items-center justify-center">☐</div>
                <p className="text-black"><strong>Care Coordinator Contact:</strong> Notify Dr. Jessica Eby's team 48 hours before procedure</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 border-2 border-black rounded flex-shrink-0 flex items-center justify-center">☐</div>
                <p className="text-black"><strong>Rescue Protocol Review:</strong> Ensure staff are familiar with neuro-crash recognition and 3-step rescue protocol</p>
              </div>
            </div>
          </div>

          {/* Contraindicated Agents */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">ABSOLUTELY CONTRAINDICATED AGENTS</h2>
            
            <div className="bg-red-50 p-4 border-l-4 border-red-600 mb-4">
              <p className="text-black font-semibold">
                DO NOT ADMINISTER under any circumstances:
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-gray-100 p-3 border-l-4 border-red-600">
                <p className="text-black"><strong>Propofol:</strong> Triggers catastrophic GPCR cascade collapse</p>
              </div>
              <div className="bg-gray-100 p-3 border-l-4 border-red-600">
                <p className="text-black"><strong>Fentanyl & Opioids:</strong> Impairs methylation pathways; causes respiratory depression</p>
              </div>
              <div className="bg-gray-100 p-3 border-l-4 border-red-600">
                <p className="text-black"><strong>Gadolinium Contrast:</strong> Toxic accumulation due to impaired detoxification</p>
              </div>
              <div className="bg-gray-100 p-3 border-l-4 border-red-600">
                <p className="text-black"><strong>Iodine-Based Contrast:</strong> Triggers acute metabolic collapse</p>
              </div>
              <div className="bg-gray-100 p-3 border-l-4 border-red-600">
                <p className="text-black"><strong>PEG 3350 (Bowel Prep):</strong> Severe dehydration and electrolyte collapse</p>
              </div>
              <div className="bg-gray-100 p-3 border-l-4 border-red-600">
                <p className="text-black"><strong>NSAIDs:</strong> Impairs renal clearance of toxic compounds</p>
              </div>
            </div>
          </div>

          {/* Emergency Rescue Protocol */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">EMERGENCY RESCUE PROTOCOL</h2>
            
            <p className="text-black mb-4 font-semibold">
              If neuro-crash occurs (muscle tremors, respiratory/vascular drops, cognitive degradation):
            </p>

            <div className="space-y-3">
              <div className="bg-gray-100 p-4 border-l-4 border-black">
                <p className="text-black font-bold">STEP 1: Terminate Exposure</p>
                <p className="text-black text-sm">Stop all infusions, halt procedures, disconnect IV lines, flush with normal saline</p>
              </div>
              <div className="bg-gray-100 p-4 border-l-4 border-black">
                <p className="text-black font-bold">STEP 2: Enzymatic Bypass</p>
                <p className="text-black text-sm">IV NAC 1000 mg bolus + 500 mg q4h; IM Methyl-B12 1000 mcg immediately, repeat q12h x 48h</p>
              </div>
              <div className="bg-gray-100 p-4 border-l-4 border-black">
                <p className="text-black font-bold">STEP 3: Mineral Restoration</p>
                <p className="text-black text-sm">IV Mg sulfate 1-2 g over 30-60 min; IV K+ 20-40 mEq over 1-2 hours (if low)</p>
              </div>
            </div>

            <p className="text-black mt-4 font-semibold">
              Contact: Dr. Jessica Eby (Primary Care) | UCLA Patient Affairs (310) 267-9113 | Emergency (911)
            </p>
          </div>

          {/* Surveillance Requirements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">MANDATORY SURVEILLANCE SCHEDULE</h2>
            
            <div className="text-black text-sm space-y-2">
              <p><strong>Quarterly:</strong> CMP, CBC, Mg/K levels</p>
              <p><strong>Semi-Annual:</strong> Endocrine panel, coagulation panel, immune function panel</p>
              <p><strong>Annual:</strong> Colonoscopy (Lynch syndrome), EKG, DEXA, thoracic imaging (MRI preferred)</p>
            </div>
          </div>

          {/* Legal Statement */}
          <div className="border-4 border-black bg-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3">LEGAL & CLINICAL ACCOUNTABILITY</h2>
            <p className="text-black">
              Any medical provider who chooses to bypass this biogenetic document, ignore the mandatory mechanism mapping workflows, or treat the patient's conditions as isolated empirical complaints takes full personal and institutional liability for the ensuing systemic physiological collapse.
            </p>
            <p className="text-black mt-3 font-bold">
              This is not a recommendation. This is a legal and clinical mandate.
            </p>
          </div>

          {/* Footer */}
          <div className="border-t-4 border-black pt-6 text-center text-black text-sm">
            <p><strong>Patient:</strong> Brandy Michelle Bianchini</p>
            <p><strong>Primary Care Coordinator:</strong> Dr. Jessica Eby, UCLA Family Medicine</p>
            <p><strong>Document Date:</strong> {new Date().toLocaleDateString()}</p>
            <p className="mt-4 font-semibold">For questions or updates, contact Dr. Jessica Eby or UCLA Patient Affairs</p>
          </div>
        </div>

        {/* Non-Print Navigation */}
        <div className="flex gap-4 mt-12 print:hidden">
          <Link href="/surveillance" className="text-accent hover:underline">
            ← Surveillance Calendar
          </Link>
          <Link href="/" className="text-accent hover:underline ml-auto">
            Home →
          </Link>
        </div>
      </main>
    </div>
  );
}
