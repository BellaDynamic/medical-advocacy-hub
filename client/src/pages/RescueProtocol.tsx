import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, AlertTriangle, Clock, Zap, Heart } from "lucide-react";

export default function RescueProtocol() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Rescue & Stabilization Protocol</h1>
        </div>
      </nav>

      <main className="container max-w-4xl py-12">
        {/* Page Header */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">Emergency Response Protocol for Neuro-Crash Events</h2>
          <p className="text-lg text-muted-foreground">
            This protocol defines the immediate clinical response required if accidental exposure to contraindicated compounds occurs or if a multi-system "neuro-crash" begins to manifest.
          </p>
        </section>

        {/* Critical Alert */}
        <section className="mb-12">
          <div className="danger-box">
            <div className="flex gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">CRITICAL RESCUE ROUTINE</h3>
                <p className="text-foreground mb-2">
                  In the event of an accidental exposure to a contraindicated compound, or if a multi-system "neuro-crash" begins to manifest (marked by uncontrolled muscle tremors, respiratory/vascular drops, or acute cognitive degradation), clinicians must immediately execute the following protocol.
                </p>
                <p className="text-foreground text-sm font-semibold">
                  This is a medical emergency requiring immediate intervention. Do not delay for any reason.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Neuro-Crash Warning Signs */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Recognition of Neuro-Crash Event</h3>
            
            <div className="bg-muted/50 p-6 rounded border border-border mb-6">
              <h4 className="font-bold text-accent mb-4">Clinical Presentation</h4>
              <p className="text-foreground text-sm mb-4">
                A neuro-crash is characterized by rapid onset of multi-system physiological collapse. Recognize these signs immediately:
              </p>
              
              <div className="space-y-3">
                <div className="flex gap-3 p-3 bg-background rounded border border-border">
                  <Zap className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground text-sm font-semibold">Uncontrolled Muscle Tremors</p>
                    <p className="text-foreground text-xs">Involuntary muscle contractions, fasciculations, or loss of muscle tone</p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 bg-background rounded border border-border">
                  <Heart className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground text-sm font-semibold">Respiratory/Vascular Drops</p>
                    <p className="text-foreground text-xs">Sudden decrease in oxygen saturation, blood pressure drop, or heart rate irregularities</p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 bg-background rounded border border-border">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground text-sm font-semibold">Acute Cognitive Degradation</p>
                    <p className="text-foreground text-xs">Confusion, disorientation, altered mental status, or loss of consciousness</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="directive-box">
              <p className="text-foreground font-semibold">
                If ANY of these signs appear, treat as a medical emergency and activate the rescue protocol immediately. Do not wait for confirmation or escalation.
              </p>
            </div>
          </div>
        </section>

        {/* Three-Step Rescue Protocol */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Three-Step Rescue Protocol</h3>
            
            {/* Step 1 */}
            <div className="mb-8">
              <div className="bg-accent/10 p-4 rounded border-l-4 border-accent mb-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-accent text-background rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-accent text-lg">Terminate Exposure</h4>
                    <p className="text-foreground text-sm mt-1">Instantly remove the toxic diagnostic vector or drug</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border space-y-3">
                <div>
                  <p className="text-foreground font-semibold mb-2">Immediate Actions:</p>
                  <ul className="text-foreground text-sm space-y-2 ml-4">
                    <li>• <strong>Stop all infusions immediately</strong> — disconnect IV lines carrying contraindicated agents</li>
                    <li>• <strong>Halt imaging procedures</strong> — do not pause to finish the series; patient safety takes absolute priority</li>
                    <li>• <strong>Remove diagnostic catheters or instruments</strong> if they are delivering the toxic agent</li>
                    <li>• <strong>Flush IV lines</strong> with normal saline to clear residual drug</li>
                    <li>• <strong>Activate emergency response</strong> — call for additional clinical support immediately</li>
                  </ul>
                </div>

                <div className="border-t border-border pt-3">
                  <p className="text-foreground text-xs font-semibold text-red-500">
                    CRITICAL: Do not hesitate or attempt to complete the procedure. The patient's physiological collapse is imminent if exposure continues.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <div className="bg-accent/10 p-4 rounded border-l-4 border-accent mb-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-accent text-background rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-accent text-lg">Enzymatic Bypass: IV NAC & Methyl-B12</h4>
                    <p className="text-foreground text-sm mt-1">Force open secondary methylation pathways to extract trapped compounds</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border space-y-4">
                <div>
                  <h5 className="font-bold text-accent mb-3">N-Acetylcysteine (NAC)</h5>
                  <div className="bg-background p-3 rounded border border-border space-y-2">
                    <p className="text-foreground text-sm"><strong>Dose:</strong> 1000 mg IV bolus, then 500 mg IV every 4 hours for 24 hours</p>
                    <p className="text-foreground text-sm"><strong>Route:</strong> Intravenous (IV) — do NOT use oral formulation in acute crisis</p>
                    <p className="text-foreground text-sm"><strong>Mechanism:</strong> NAC replenishes intracellular glutathione and forces the COMT/methylation pathways to actively pull trapped toxic compounds out of tissues</p>
                    <p className="text-foreground text-sm"><strong>Monitoring:</strong> Watch for nausea, flushing, or rash; these are common but not dangerous</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-accent mb-3">Methyl-B12 (Methylcobalamin)</h5>
                  <div className="bg-background p-3 rounded border border-border space-y-2">
                    <p className="text-foreground text-sm"><strong>Dose:</strong> 1000 mcg IM injection immediately, repeat every 12 hours for 48 hours</p>
                    <p className="text-foreground text-sm"><strong>Route:</strong> Intramuscular (IM) — do NOT use oral or sublingual forms in acute crisis</p>
                    <p className="text-foreground text-sm"><strong>Mechanism:</strong> Methyl-B12 activates the secondary methylation pathway (bypassing MTHFR blockade) and accelerates detoxification of trapped compounds</p>
                    <p className="text-foreground text-sm"><strong>Monitoring:</strong> No significant adverse effects expected; monitor for allergic reaction (rare)</p>
                  </div>
                </div>

                <div className="border-t border-border pt-3">
                  <p className="text-foreground text-xs font-semibold">
                    <strong>Critical Timing:</strong> Both NAC and Methyl-B12 must be administered within 30 minutes of exposure termination for maximum effectiveness. Delay reduces efficacy.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <div className="bg-accent/10 p-4 rounded border-l-4 border-accent mb-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-accent text-background rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-accent text-lg">Intracellular Restoration: Mineral Correction</h4>
                    <p className="text-foreground text-sm mt-1">Stabilize collapsing cell membranes through mineral rebalancing</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border space-y-4">
                <p className="text-foreground text-sm mb-4">
                  Run immediate mineral monitoring (serum and intracellular levels) and safely correct critical electrolytes:
                </p>

                <div>
                  <h5 className="font-bold text-accent mb-3">Magnesium Restoration</h5>
                  <div className="bg-background p-3 rounded border border-border space-y-2">
                    <p className="text-foreground text-sm"><strong>Target:</strong> Serum Mg 2.0–2.5 mEq/L (normal range 1.7–2.2)</p>
                    <p className="text-foreground text-sm"><strong>Dose:</strong> 1–2 g IV magnesium sulfate over 30–60 minutes if serum Mg is low</p>
                    <p className="text-foreground text-sm"><strong>Mechanism:</strong> Magnesium stabilizes cell membrane potential and reduces neuromuscular hyperexcitability</p>
                    <p className="text-foreground text-sm"><strong>Caution:</strong> Monitor for hypermagnesemia; do not exceed 3 g/day IV</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-accent mb-3">Potassium Restoration</h5>
                  <div className="bg-background p-3 rounded border border-border space-y-2">
                    <p className="text-foreground text-sm"><strong>Target:</strong> Serum K 4.0–5.0 mEq/L (normal range 3.5–5.0)</p>
                    <p className="text-foreground text-sm"><strong>Dose:</strong> 20–40 mEq IV potassium chloride in 250–500 mL normal saline over 1–2 hours if K is low</p>
                    <p className="text-foreground text-sm"><strong>Mechanism:</strong> Potassium restores the Na-K-ATPase gradient critical for cell membrane integrity</p>
                    <p className="text-foreground text-sm"><strong>Caution:</strong> Never give IV potassium as a bolus; always dilute and infuse slowly to avoid cardiac arrhythmia</p>
                  </div>
                </div>

                <div className="border-t border-border pt-3">
                  <p className="text-foreground text-sm font-semibold">
                    <strong>Monitoring Protocol:</strong> Repeat serum electrolytes every 2 hours for the first 12 hours, then every 4 hours for 48 hours. Adjust replacement doses based on lab results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supportive Care */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Concurrent Supportive Care</h3>
            
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Respiratory Support</h4>
                <p className="text-foreground text-sm">
                  If respiratory depression occurs, provide supplemental oxygen and prepare for intubation. Do NOT use standard sedatives (propofol, benzodiazepines) without consulting the care team — these may worsen the metabolic collapse.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Hemodynamic Monitoring</h4>
                <p className="text-foreground text-sm">
                  Continuous cardiac monitoring, blood pressure monitoring, and pulse oximetry. If hypotension develops, use vasopressors cautiously — standard agents may trigger additional metabolic cascades.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Fluid Management</h4>
                <p className="text-foreground text-sm">
                  Maintain normal saline IV access for medication administration. Avoid hypotonic fluids, which may worsen intracellular edema.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Avoid These Agents During Rescue</h4>
                <p className="text-foreground text-sm mb-2">
                  Do NOT administer without explicit approval from the care team:
                </p>
                <ul className="text-foreground text-sm space-y-1 ml-4">
                  <li>• Propofol (triggers severe GPCR cascade collapse)</li>
                  <li>• Benzodiazepines at standard doses (may worsen metabolic acidosis)</li>
                  <li>• Additional contrast agents of any kind</li>
                  <li>• NSAIDs (may impair renal clearance of toxic compounds)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Post-Rescue Protocol */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Post-Rescue Monitoring & Recovery</h3>
            
            <div className="bg-muted/50 p-4 rounded border border-border space-y-4">
              <div>
                <h4 className="font-bold text-accent mb-2">First 24 Hours</h4>
                <ul className="text-foreground text-sm space-y-2 ml-4">
                  <li>• Continuous cardiac and hemodynamic monitoring</li>
                  <li>• Repeat serum electrolytes every 2 hours</li>
                  <li>• Continue IV NAC and Methyl-B12 per protocol</li>
                  <li>• Monitor urine output and color (dark urine indicates ongoing tissue breakdown)</li>
                  <li>• Check liver and kidney function tests (LFTs, BUN, creatinine)</li>
                </ul>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-bold text-accent mb-2">24–72 Hours</h4>
                <ul className="text-foreground text-sm space-y-2 ml-4">
                  <li>• Transition to oral NAC 1000 mg three times daily</li>
                  <li>• Continue IM Methyl-B12 if cognitive symptoms persist</li>
                  <li>• Repeat electrolytes every 4–6 hours</li>
                  <li>• Begin gentle physical therapy to restore muscle tone if appropriate</li>
                  <li>• Prepare for interdisciplinary case review</li>
                </ul>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-bold text-accent mb-2">Ongoing (Days 4–14)</h4>
                <ul className="text-foreground text-sm space-y-2 ml-4">
                  <li>• Continue oral NAC supplementation for 7–14 days</li>
                  <li>• Weekly electrolyte monitoring</li>
                  <li>• Cognitive and neurological assessments</li>
                  <li>• Formal incident report and root-cause analysis</li>
                  <li>• Mandatory care coordination meeting with all departments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Escalation */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Immediate Escalation</h3>
            
            <div className="directive-box">
              <p className="text-foreground mb-3">
                <strong>If a neuro-crash event occurs, immediately contact:</strong>
              </p>
              <ul className="text-foreground text-sm space-y-2 ml-4">
                <li>• <strong>Dr. Jessica Eby (UCLA Family Medicine):</strong> Primary care coordinator — has full clinical history and genomic context</li>
                <li>• <strong>UCLA Patient Affairs (310) 267-9113:</strong> For institutional escalation and incident documentation</li>
                <li>• <strong>Emergency Services (911):</strong> If patient is in acute distress or outside hospital setting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 mt-12">
          <Link href="/safety" className="text-accent hover:underline">
            ← Safety Firewall
          </Link>
          <Link href="/" className="text-accent hover:underline ml-auto">
            Home →
          </Link>
        </div>
      </main>
    </div>
  );
}
