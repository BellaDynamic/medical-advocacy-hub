import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  Brain,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

type ReviewRow = {
  system: string;
  request: string;
  interval: string;
  handling: string;
  sourceFlags: string;
};

const surveillanceGroups: Record<string, ReviewRow[]> = {
  "Cancer surveillance": [
    { system: "Gastrointestinal", request: "Colonoscopy with chromoendoscopy; EGD with biopsies; consider small-bowel surveillance", interval: "Source-requested yearly / biannual schedule", handling: "Source requests PMS2 immunostain on relevant biopsies and individualized procedural preparation review.", sourceFlags: "PMS2/Lynch; GI and detoxification concerns" },
    { system: "Endometrial & ovarian", request: "Gynecologic examination; transvaginal ultrasound; endometrial biopsy when clinically indicated", interval: "Source-requested yearly schedule", handling: "Source requests PMS2 immunostain for relevant endometrial biopsy specimens.", sourceFlags: "PMS2/Lynch; hormone-signaling concerns" },
    { system: "Brain / CNS", request: "Brain MRI and neurological assessment", interval: "Source-requested yearly MRI / biannual assessment", handling: "Source requests individualized contrast and premedication review before imaging.", sourceFlags: "PMS2/Lynch; neurovascular and prior neurological concerns" },
    { system: "Skin", request: "Full-body dermatologic examination with dermoscopy", interval: "Source-requested yearly schedule", handling: "Source requests biopsy review for suspicious lesions.", sourceFlags: "PMS2/Lynch; Muir-Torre-related concerns" },
    { system: "Lung / chest", request: "High-resolution chest CT and pulmonary function testing", interval: "Source-requested biannual CT / yearly PFTs", handling: "Source asks for review of pulmonary and reactive-airway history.", sourceFlags: "Pulmonary and vascular concerns" },
    { system: "Hematologic", request: "CBC with differential, lymphocyte subsets, and immunoglobulins", interval: "Source-requested biannual schedule", handling: "Source identifies bone-marrow assessment only when clinically indicated.", sourceFlags: "Immune and hematologic concerns" },
  ],
  "Endocrine & metabolic": [
    { system: "Calcium & PTH", request: "Total and ionized calcium, PTH, and 25-OH vitamin D", interval: "Source-requested quarterly schedule", handling: "Standard specimen requirements; interpretation by treating clinician.", sourceFlags: "PHP1b/STX16 and TBX1-related source flags" },
    { system: "Electrolytes", request: "Comprehensive metabolic panel", interval: "Source-requested quarterly schedule", handling: "Review together with symptoms and medication exposures.", sourceFlags: "Electrolyte-sensitivity concerns" },
    { system: "Methylation review", request: "Homocysteine, folate, B12, methylmalonic acid, and prior genetic result review", interval: "Source-requested biannual labs; genetic review as needed", handling: "Use the original Genova and genetics reports as source records rather than substituting a summary.", sourceFlags: "MTHFR, COMT, ABCB1, Genova panel" },
    { system: "Hormone review", request: "Clinician-directed thyroid, adrenal, and sex-hormone assessment", interval: "Source-requested yearly schedule", handling: "Medication and hormone decisions require individualized specialist review.", sourceFlags: "Hormone-signaling concerns in source document" },
  ],
  "Cardiovascular & neurovascular": [
    { system: "Cardiac structure & function", request: "Echocardiogram, cardiac MRI, and ECG as clinically appropriate", interval: "Source-requested yearly imaging / quarterly ECG", handling: "Source requests pre-imaging review for contrast and medication sensitivities.", sourceFlags: "Cardiac, vascular, and QTc-related source flags" },
    { system: "Vascular health", request: "Aortic-arch imaging, vascular-risk assessment, and stress testing as clinically appropriate", interval: "Source-requested biannual imaging / yearly stress test", handling: "Choice of modality and interval must be confirmed by the treating vascular team.", sourceFlags: "Aortic and vasculitis-related source flags" },
    { system: "Neurovascular imaging", request: "Brain MRI and MRA head/neck with protocol review", interval: "Source-requested yearly schedule", handling: "Source requests individualized contrast planning.", sourceFlags: "MTHFR/COMT and ABCB1 source flags" },
    { system: "Inflammatory markers", request: "CRP, ESR, and fibrinogen", interval: "Source-requested quarterly schedule", handling: "Interpret with clinical examination and specialist assessment.", sourceFlags: "Vasculitis and connective-tissue source flags" },
  ],
  "Immune, hematologic, skeletal & pulmonary": [
    { system: "Immune function", request: "Lymphocyte subsets, immunoglobulins, and clinician-selected autoantibody testing", interval: "Source-requested biannual schedule", handling: "Interpret with immunology/hematology oversight.", sourceFlags: "CASP10, TBX1, immunodeficiency, and connective-tissue source flags" },
    { system: "Hematologic status", request: "CBC with differential, reticulocyte count, and G6PD confirmation if not previously established", interval: "Source-requested quarterly schedule", handling: "Medication and exposure review belongs with the treating clinical team.", sourceFlags: "Beta-thalassemia and G6PD source flags" },
    { system: "Viral susceptibility", request: "Review prior TLR3 testing and clinician-selected viral titers", interval: "Source-requested one-time genetics / yearly titers", handling: "Interpret results in context of symptoms and immune workup.", sourceFlags: "TLR3 source flag" },
    { system: "Bone health", request: "DEXA and clinician-selected bone-turnover markers", interval: "Source-requested yearly schedule", handling: "Interpret against prior imaging and endocrine workup.", sourceFlags: "CLCN7 and calcium-regulation source flags" },
    { system: "Pulmonary function", request: "PFTs and high-resolution chest imaging as clinically indicated", interval: "Source-requested yearly PFTs / biannual CT", handling: "Imaging plan should be selected by pulmonology with attention to prior reactions.", sourceFlags: "Small-airway and reactive-airway source concerns" },
  ],
};

const referrals = [
  ["Clinical Genetics / Genomics", "Variant interpretation, family history, and coordinated record review."],
  ["Endocrinology", "Calcium/PTH pathways, endocrine monitoring, and hormone-related clinical review."],
  ["Neuro-Oncology / Neurology", "CNS surveillance, neurological symptoms, and imaging protocol review."],
  ["Cardiology / Vascular Medicine", "Cardiac structure, vascular concerns, and risk assessment."],
  ["Interventional Radiology & Anesthesiology", "Procedure-specific imaging, contrast, and peri-procedural planning."],
  ["Gastroenterology", "Lynch-related surveillance and procedure planning."],
  ["Immunology / Hematology", "Immune, hematologic, and bleeding-risk review."],
  ["Pulmonology", "Pulmonary function, imaging, and airway review."],
  ["Dermatology", "Skin surveillance and lesion review."],
];

const fullSystemCoverage = [
  ["Hematology, BMT & bleeding", "Hematology / Hemostasis", "Source request"],
  ["Immune & lymphatic", "Immunology / Hematology", "Charted excerpt"],
  ["Kidney", "Nephrology", "Original report needed"],
  ["Liver & lipid", "Hepatology / Lipid management", "Original report needed"],
  ["Lung", "Pulmonology", "Charted excerpt"],
  ["Heart & vascular", "Cardiology / Vascular medicine", "Charted excerpt"],
  ["Bone & spine", "Endocrinology / Orthopedics", "Source request"],
  ["Mixed connective tissue", "Rheumatology", "Source request"],
  ["Endocrine & mineral", "Endocrinology", "Original report needed"],
  ["Metabolic & detoxification", "Internal medicine / Clinical pharmacology", "Original report needed"],
  ["Brain & neurovascular", "Neurology / Neurovascular", "Original report needed"],
  ["GI & nutrition", "Gastroenterology / Nutrition", "Charted excerpt"],
  ["Oncology & genetics", "Genetics / Oncology", "Original report needed"],
  ["Radiology & pathology", "Radiology / Surgical pathology", "Charted excerpt"],
  ["Eye care", "Ophthalmology", "Original report needed"],
];

export default function MandatedLabs() {
  const groupNames = useMemo(() => Object.keys(surveillanceGroups), []);
  const [activeGroup, setActiveGroup] = useState(groupNames[0]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-card border-b border-primary/40 py-2 px-4 text-center text-accent text-sm font-medium">
        SOURCE-LED REVIEW DRAFT — Clinical verification is required before any test, interval, medication, imaging, or procedure is acted upon.
      </div>

      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:opacity-80 transition font-semibold">
            <ArrowLeft className="w-4 h-4" /> Medical Advocacy Hub
          </Link>
          <span className="hidden md:block text-xs uppercase tracking-[0.18em] text-muted-foreground">Labs · Surveillance · Referrals</span>
        </div>
      </nav>

      <main className="container max-w-6xl py-10 md:py-14 space-y-10">
        <section className="grid lg:grid-cols-[1.45fr_0.75fr] gap-8 items-start">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-accent">
              <Microscope className="w-8 h-8" />
              <span className="uppercase tracking-[0.18em] text-xs font-semibold">Clinical review workspace</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.04] text-accent">Labs, surveillance & referral map</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A structured web presentation of the uploaded July 27, 2026 source document for review with the treating clinical team. It organizes requested monitoring, specimen notes, and specialty coordination without converting source requests into self-executing medical instructions.
            </p>
          </div>
          <aside className="bg-card border border-border p-6 space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <FileText className="w-5 h-5" />
              <h2 className="font-bold">Source provenance</h2>
            </div>
            <p className="text-sm text-muted-foreground">Uploaded source: <span className="text-foreground font-medium">Mandated_Labs_Surveillance_Referrals.md</span></p>
            <p className="text-sm text-muted-foreground">Source date: July 27, 2026</p>
            <p className="text-xs text-muted-foreground border-t border-border pt-4">The reference labels on this page point back to the uploaded source list; original reports remain the evidence record.</p>
            <Link href="/system-map" className="inline-flex text-sm font-semibold text-accent hover:underline">Open full multi-system evidence map →</Link>
          </aside>
        </section>

        <section className="clinical-section space-y-5">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-accent" />
            <h2 className="clinical-header !mb-0">Review guardrails</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-card border border-border p-5"><strong className="text-accent block mb-2">Confirm source records</strong><span className="text-muted-foreground">Use the original Variantyx, Invitae, Tempus, Genova, and treating-team records during review.</span></div>
            <div className="bg-card border border-border p-5"><strong className="text-accent block mb-2">Individualize decisions</strong><span className="text-muted-foreground">A clinician determines whether a test, interval, agent, preparation, contrast approach, or referral is appropriate.</span></div>
            <div className="bg-card border border-border p-5"><strong className="text-accent block mb-2">Document rationale</strong><span className="text-muted-foreground">Record accepted, deferred, modified, or declined requests with responsible specialty and follow-up date.</span></div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-3"><Microscope className="w-7 h-7 text-accent" /><div><h2 className="text-3xl font-bold text-accent">Whole-body coverage index</h2><p className="text-sm text-muted-foreground mt-1">Every requested clinical domain is represented here; detailed source status and verification limits are in the evidence map.</p></div></div>
            <Link href="/system-map" className="text-sm font-semibold text-accent hover:underline">Open full evidence map →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {fullSystemCoverage.map(([domain, owner, status]) => (
              <Link key={domain} href="/system-map" className="bg-card border border-border p-4 hover:border-accent transition">
                <p className="font-semibold text-foreground">{domain}</p>
                <p className="mt-1 text-xs text-muted-foreground">{owner}</p>
                <span className="inline-block mt-3 text-[10px] uppercase tracking-wide text-accent">{status}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <ClipboardCheck className="w-7 h-7 text-accent" />
            <div>
              <h2 className="text-3xl font-bold text-accent">Requested surveillance map</h2>
              <p className="text-sm text-muted-foreground mt-1">Intervals below are source-provided requests pending specialist review.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Surveillance groups">
            {groupNames.map((name) => (
              <button key={name} onClick={() => setActiveGroup(name)} className={`px-4 py-2 rounded-md text-sm font-semibold transition ${activeGroup === name ? "bg-accent text-accent-foreground" : "bg-card border border-border text-foreground hover:border-accent"}`}>
                {name}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto border border-border bg-card">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead className="bg-background text-accent uppercase tracking-wider text-xs">
                <tr>
                  <th className="p-4">System</th><th className="p-4">Source-requested review item</th><th className="p-4">Requested interval</th><th className="p-4">Handling / clinical-review note</th><th className="p-4">Source flags</th>
                </tr>
              </thead>
              <tbody>
                {surveillanceGroups[activeGroup].map((row) => (
                  <tr key={row.system} className="border-t border-border align-top">
                    <td className="p-4 font-semibold text-accent">{row.system}</td>
                    <td className="p-4 text-foreground">{row.request}</td>
                    <td className="p-4 text-muted-foreground">{row.interval}</td>
                    <td className="p-4 text-muted-foreground">{row.handling}</td>
                    <td className="p-4 text-muted-foreground">{row.sourceFlags}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="flex items-center gap-3"><Stethoscope className="w-7 h-7 text-accent" /><h2 className="text-3xl font-bold text-accent">Referral coordination</h2></div>
            <div className="divide-y divide-border border border-border bg-card">
              {referrals.map(([specialty, focus]) => (
                <div key={specialty} className="p-4 flex gap-4"><div className="w-1 bg-accent/50 self-stretch" /><div><h3 className="font-semibold text-foreground">{specialty}</h3><p className="text-sm text-muted-foreground mt-1">{focus}</p></div></div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-3"><HeartPulse className="w-7 h-7 text-accent" /><h2 className="text-3xl font-bold text-accent">Clinical handoff checklist</h2></div>
            <div className="bg-card border border-border p-6 space-y-5 text-sm">
              <p className="text-muted-foreground">Use this page as a consultation-preparation record, not as a substitute for clinical judgment.</p>
              {["Attach or link the original evidence report(s) relevant to the request.", "Identify the responsible specialty and clinician for the review decision.", "Confirm whether the source-requested frequency is accepted, modified, deferred, or declined.", "Record procedure, contrast, medication, and specimen-handling decisions in the medical record.", "Set a follow-up date and identify which result changes the next action."].map((item) => <div className="flex gap-3" key={item}><Brain className="w-4 h-4 text-accent mt-0.5 flex-none" /><span className="text-foreground">{item}</span></div>)}
            </div>
          </div>
        </section>

        <section className="border border-border bg-card p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-accent">Uploaded source references</h2>
          <p className="text-sm text-muted-foreground">The uploaded Markdown identifies the following source records: <span className="text-foreground">ForPCPandClinicalGenomicsandBreakdownscriticalhelp.pdf; VASCULARNOTESFORROSLYN.pdf; DR.Zcardiovascularnotes..pdf; ForGeneticsandCareTeamBasicAnalysisandSummaryofUploadedPrivateFile.pdf; ComprehensiveMedicalEvidencePackage-BrandyBianchini2.pdf; ComprehensiveMedicalEvidencePackage-ClinicalPCPandneuroosciFocus.pdf; and MyHeritage Health Reports.</span></p>
          <p className="text-xs text-muted-foreground">Reference wording is preserved as a provenance aid only. Treating clinicians should rely on original reports and their own evaluation when confirming diagnoses, risks, testing, and treatment.</p>
        </section>
      </main>
    </div>
  );
}
