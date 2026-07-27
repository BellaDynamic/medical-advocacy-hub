import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, Calendar, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function SurveillanceCalendar() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-accent">Annual Surveillance Calendar</h1>
        </div>
      </nav>

      <main className="container max-w-4xl py-12">
        {/* Page Header */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">Comprehensive Surveillance & Testing Schedule</h2>
          <p className="text-lg text-muted-foreground">
            This calendar outlines all required monitoring tests, their frequencies, and the specific conditions they address. Adherence to this schedule is critical for early detection and prevention of life-threatening complications.
          </p>
        </section>

        {/* Critical Alert */}
        <section className="mb-12">
          <div className="directive-box">
            <h3 className="font-bold text-foreground mb-3">Surveillance Mandate</h3>
            <p className="text-foreground text-sm">
              All tests listed below must be completed on schedule. Any delays or missed appointments should trigger immediate escalation to Dr. Jessica Eby and the care coordination team. These tests are not optional — they are essential for preventing acute medical crises.
            </p>
          </div>
        </section>

        {/* Quarterly Tests */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Quarterly Tests (Every 3 Months)</h3>
            
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <div className="flex gap-3 items-start mb-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-accent">Comprehensive Metabolic Panel (CMP)</h4>
                    <p className="text-foreground text-sm mt-1">Electrolytes, kidney function, liver function, glucose</p>
                  </div>
                </div>
                <div className="bg-background p-3 rounded border border-border text-sm">
                  <p className="text-foreground"><strong>Frequency:</strong> Every 3 months (4 times/year)</p>
                  <p className="text-foreground"><strong>Why:</strong> Monitors kidney/liver function and electrolyte balance critical for COMT/methylation pathway function</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> Immediate mineral supplementation and IV therapy if needed</p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <div className="flex gap-3 items-start mb-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-accent">Complete Blood Count (CBC)</h4>
                    <p className="text-foreground text-sm mt-1">Red cells, white cells, platelets, hemoglobin</p>
                  </div>
                </div>
                <div className="bg-background p-3 rounded border border-border text-sm">
                  <p className="text-foreground"><strong>Frequency:</strong> Every 3 months (4 times/year)</p>
                  <p className="text-foreground"><strong>Why:</strong> Detects anemia, immune dysfunction, and early signs of bone marrow stress</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> Assess for bleeding, infection risk, or need for supplementation</p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <div className="flex gap-3 items-start mb-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-accent">Magnesium & Potassium Levels (Serum + Intracellular)</h4>
                    <p className="text-foreground text-sm mt-1">Critical electrolytes for cell membrane stability</p>
                  </div>
                </div>
                <div className="bg-background p-3 rounded border border-border text-sm">
                  <p className="text-foreground"><strong>Frequency:</strong> Every 3 months (4 times/year)</p>
                  <p className="text-foreground"><strong>Why:</strong> Magnesium and potassium are essential for GPCR signaling and neuromuscular function</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> IV mineral replacement protocol</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Semi-Annual Tests */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Semi-Annual Tests (Every 6 Months)</h3>
            
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <div className="flex gap-3 items-start mb-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-accent">Endocrine Panel</h4>
                    <p className="text-foreground text-sm mt-1">TSH, free T4, cortisol, ACTH, growth hormone</p>
                  </div>
                </div>
                <div className="bg-background p-3 rounded border border-border text-sm">
                  <p className="text-foreground"><strong>Frequency:</strong> Every 6 months (2 times/year)</p>
                  <p className="text-foreground"><strong>Why:</strong> Monitors endocrine dysfunction and metabolic stability</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> Endocrinology consultation and hormone replacement adjustment</p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <div className="flex gap-3 items-start mb-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-accent">Coagulation Panel (PT/INR, PTT)</h4>
                    <p className="text-foreground text-sm mt-1">Blood clotting function</p>
                  </div>
                </div>
                <div className="bg-background p-3 rounded border border-border text-sm">
                  <p className="text-foreground"><strong>Frequency:</strong> Every 6 months (2 times/year)</p>
                  <p className="text-foreground"><strong>Why:</strong> Monitors vascular integrity and bleeding risk</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> Assess for vascular fragility or anticoagulation need</p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <div className="flex gap-3 items-start mb-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-accent">Immune Function Panel</h4>
                    <p className="text-foreground text-sm mt-1">Immunoglobulin levels, lymphocyte subsets</p>
                  </div>
                </div>
                <div className="bg-background p-3 rounded border border-border text-sm">
                  <p className="text-foreground"><strong>Frequency:</strong> Every 6 months (2 times/year)</p>
                  <p className="text-foreground"><strong>Why:</strong> ALPS syndrome requires ongoing immune monitoring</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> Immunology consultation and treatment adjustment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Annual Tests */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Annual Tests (Once Per Year)</h3>
            
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <div className="flex gap-3 items-start mb-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-accent">Colonoscopy with Biopsy</h4>
                    <p className="text-foreground text-sm mt-1">Colorectal cancer screening (Lynch syndrome surveillance)</p>
                  </div>
                </div>
                <div className="bg-background p-3 rounded border border-border text-sm">
                  <p className="text-foreground"><strong>Frequency:</strong> Annually (1 time/year)</p>
                  <p className="text-foreground"><strong>Why:</strong> PMS2 deletion/Lynch syndrome requires aggressive colorectal surveillance</p>
                  <p className="text-foreground"><strong>Special Requirements:</strong> NO propofol sedation; use alternative anesthesia per Rescue Protocol</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> Immediate oncology consultation and intervention</p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <div className="flex gap-3 items-start mb-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-accent">EKG with QTc Measurement</h4>
                    <p className="text-foreground text-sm mt-1">Cardiac electrical function</p>
                  </div>
                </div>
                <div className="bg-background p-3 rounded border border-border text-sm">
                  <p className="text-foreground"><strong>Frequency:</strong> Annually (1 time/year)</p>
                  <p className="text-foreground"><strong>Why:</strong> Monitors for arrhythmia risk and electrolyte-related cardiac effects</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> Cardiology consultation and medication review</p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <div className="flex gap-3 items-start mb-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-accent">DEXA Scan (Bone Density)</h4>
                    <p className="text-foreground text-sm mt-1">Osteoporosis screening</p>
                  </div>
                </div>
                <div className="bg-background p-3 rounded border border-border text-sm">
                  <p className="text-foreground"><strong>Frequency:</strong> Annually (1 time/year)</p>
                  <p className="text-foreground"><strong>Why:</strong> Metabolic dysfunction and mineral imbalances increase fracture risk</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> Calcium/vitamin D supplementation and fall prevention</p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <div className="flex gap-3 items-start mb-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-accent">Comprehensive Genomic Reassessment</h4>
                    <p className="text-foreground text-sm mt-1">Updated genetic testing and variant interpretation</p>
                  </div>
                </div>
                <div className="bg-background p-3 rounded border border-border text-sm">
                  <p className="text-foreground"><strong>Frequency:</strong> Annually (1 time/year)</p>
                  <p className="text-foreground"><strong>Why:</strong> New genetic findings may emerge; variant interpretation evolves</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> Update clinical protocols and safety measures</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Imaging Surveillance */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Imaging Surveillance (Annually)</h3>
            
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Thoracic Imaging (CT or MRI)</h4>
                <p className="text-foreground text-sm mb-3">
                  Monitors aortic arch tortuosity and connective tissue structural changes
                </p>
                <div className="bg-background p-3 rounded border border-border text-sm space-y-2">
                  <p className="text-foreground"><strong>Frequency:</strong> Annually (1 time/year)</p>
                  <p className="text-foreground"><strong>Modality:</strong> MRI preferred (NO gadolinium contrast); CT only if MRI contraindicated</p>
                  <p className="text-foreground"><strong>Why:</strong> Detects progressive vascular changes that may require intervention</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> Neurovascular surgery consultation</p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded border border-border">
                <h4 className="font-bold text-accent mb-2">Abdominal Imaging (Ultrasound)</h4>
                <p className="text-foreground text-sm mb-3">
                  Monitors liver, pancreas, and other abdominal structures
                </p>
                <div className="bg-background p-3 rounded border border-border text-sm space-y-2">
                  <p className="text-foreground"><strong>Frequency:</strong> Annually (1 time/year)</p>
                  <p className="text-foreground"><strong>Modality:</strong> Ultrasound (no contrast, no radiation)</p>
                  <p className="text-foreground"><strong>Why:</strong> Screens for pancreatic and hepatic changes related to metabolic dysfunction</p>
                  <p className="text-foreground"><strong>Action if abnormal:</strong> Gastroenterology and hepatology consultation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Surveillance Calendar Table */}
        <section className="mb-12">
          <div className="clinical-section">
            <h3 className="text-3xl font-bold text-accent mb-6">Surveillance Calendar at a Glance</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-accent/10">
                    <th className="border border-border p-3 text-left font-bold text-accent">Test</th>
                    <th className="border border-border p-3 text-left font-bold text-accent">Frequency</th>
                    <th className="border border-border p-3 text-left font-bold text-accent">Q1</th>
                    <th className="border border-border p-3 text-left font-bold text-accent">Q2</th>
                    <th className="border border-border p-3 text-left font-bold text-accent">Q3</th>
                    <th className="border border-border p-3 text-left font-bold text-accent">Q4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="border border-border p-3 text-foreground">CMP</td>
                    <td className="border border-border p-3 text-foreground">Quarterly</td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border border-border p-3 text-foreground">CBC</td>
                    <td className="border border-border p-3 text-foreground">Quarterly</td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border border-border p-3 text-foreground">Mg/K Levels</td>
                    <td className="border border-border p-3 text-foreground">Quarterly</td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border border-border p-3 text-foreground">Endocrine Panel</td>
                    <td className="border border-border p-3 text-foreground">Semi-Annual</td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3"></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border border-border p-3 text-foreground">Coagulation Panel</td>
                    <td className="border border-border p-3 text-foreground">Semi-Annual</td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3"></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border border-border p-3 text-foreground">Immune Panel</td>
                    <td className="border border-border p-3 text-foreground">Semi-Annual</td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                    <td className="border border-border p-3"></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border border-border p-3 text-foreground">Colonoscopy</td>
                    <td className="border border-border p-3 text-foreground">Annual</td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border border-border p-3 text-foreground">EKG</td>
                    <td className="border border-border p-3 text-foreground">Annual</td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border border-border p-3 text-foreground">DEXA</td>
                    <td className="border border-border p-3 text-foreground">Annual</td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground">Thoracic Imaging</td>
                    <td className="border border-border p-3 text-foreground">Annual</td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3"></td>
                    <td className="border border-border p-3 text-center"><CheckCircle2 className="w-4 h-4 text-accent mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Missed Appointment Protocol */}
        <section className="mb-12">
          <div className="danger-box">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Missed Appointment Protocol
            </h3>
            <p className="text-foreground text-sm mb-3">
              If any surveillance test is missed or delayed:
            </p>
            <ol className="text-foreground text-sm space-y-2 ml-4">
              <li>1. Contact Dr. Jessica Eby's office immediately</li>
              <li>2. Reschedule within 1 week</li>
              <li>3. If rescheduling is not possible, escalate to UCLA Patient Affairs (310) 267-9113</li>
              <li>4. Document the delay and reason in the medical record</li>
            </ol>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 mt-12">
          <Link href="/failures" className="text-accent hover:underline">
            ← Institutional Failures
          </Link>
          <Link href="/" className="text-accent hover:underline ml-auto">
            Home →
          </Link>
        </div>
      </main>
    </div>
  );
}
