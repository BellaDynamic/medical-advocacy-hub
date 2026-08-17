import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  Activity,
  ArrowLeft,
  Bone,
  Brain,
  Building2,
  CircleAlert,
  Droplets,
  Eye,
  FileSearch,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

type EvidenceStatus = "Charted excerpt" | "Original report needed" | "Source request" | "Educational screen";

type Domain = {
  id: string;
  title: string;
  specialty: string;
  status: EvidenceStatus;
  scope: string;
  review: string;
  confirm: string;
  sources: string[];
};

const domains: Domain[] = [
  { id: "heme", title: "Hematology, BMT & bleeding", specialty: "Hematology / Hemostasis", status: "Source request", scope: "Existing materials reference beta-thalassemia, G6PD, CASP10/ALPS, iron indices, and infusion/BMT discussions.", review: "Reconcile original hemoglobinopathy, G6PD, CBC/reticulocyte/iron, lymphocyte, bleeding-history, and any Factor IX records.", confirm: "The available hemophilia educational screen says diagnosis and Factor IX history are patient-uncertain; it does not establish hemophilia, BMT candidacy, or gene-therapy eligibility.", sources: ["Pasted_content_30.txt", "Pasted_content_36.txt", "MedicalLettersCollective…pdf"] },
  { id: "immune", title: "Immune, lymphatic & BMT overlap", specialty: "Immunology / Hematology", status: "Charted excerpt", scope: "The chart excerpt shows serum IgA was reported within the displayed 76–426 mg/dL reference interval; the exact value is not shown.", review: "Review original immunoglobulins, lymphocyte subsets, infection history, lymphatic imaging, and prior genetic interpretation.", confirm: "A normal-range IgA statement does not diagnose or exclude broader immune disease.", sources: ["Chart excerpt: IgA, Serum", "Pasted_content_35.txt", "Integrated_Body_System_Framework.md"] },
  { id: "kidney", title: "Kidney & nephrology", specialty: "Nephrology", status: "Original report needed", scope: "Narrative material cites creatinine 0.8 mg/dL and requests renal, mineral, and medication-risk review.", review: "Review original CMP, eGFR, urinalysis, urine albumin/protein testing, calcium/phosphorus/PTH, blood pressure, and imaging history.", confirm: "The current summaries do not establish congenital renal impairment, calcification, or a contrast contraindication.", sources: ["Pasted_content_32.txt", "Departmental_Protocols_and_Overlap_Matrix.md"] },
  { id: "liver", title: "Liver, lipid & hepatology", specialty: "Hepatology / Lipid management", status: "Original report needed", scope: "Narrative material lists bilirubin 0.4, alkaline phosphatase 47, AST 24, and ALT 19 U/L and describes them as normal.", review: "Review original liver panel, synthetic function, lipids, medication list, and prior imaging before drawing conclusions about liver disease or drug handling.", confirm: "Normal routine enzymes in a summary neither prove nor exclude structural liver disease, NAFLD, fibrosis, or medication intolerance.", sources: ["Pasted_content_31.txt", "Pasted_content_32.txt"] },
  { id: "lung", title: "Lung & pulmonary", specialty: "Pulmonology", status: "Charted excerpt", scope: "The available image is a CT abdomen/pelvis scout view with contrast study metadata, not a signed pulmonary report.", review: "Use final radiology report, PFTs, symptom history, and cardiopulmonary overlap to decide next testing.", confirm: "The scout view does not establish airway disease, pulmonary congestion, or any CT finding.", sources: ["Clipboard_0_2766E783.png", "Pasted_content_31.txt", "dr. update ucd .docx"] },
  { id: "heart", title: "Heart & vascular", specialty: "Cardiology / Vascular medicine", status: "Charted excerpt", scope: "A 12-lead ECG order is visible for May 2026; the tracing and interpretation are not included. Advocacy records cite lipid, aortic, and inflammatory concerns.", review: "Reconcile ECG interpretation, lipid data, blood pressure, echo, vascular imaging, inflammatory markers, and family history.", confirm: "No arrhythmia, valve disease, vasculitis, aortic defect, or calcification is confirmed by the visible order or advocacy text.", sources: ["Chart excerpt: ECG order", "Pasted_content_34.txt", "Departmental_Protocols_and_Overlap_Matrix.md"] },
  { id: "bone", title: "Bone, spine & musculoskeletal", specialty: "Endocrinology / Orthopedics", status: "Source request", scope: "Existing records reference DEXA, CLCN7, bone concerns, spinal symptoms, and PET/lymphatic imaging requests.", review: "Reconcile original DEXA, bone labs, fracture history, spine imaging, examination findings, and any prior orthopedic reports.", confirm: "No osteopetrosis, osteoporosis, cord compression, or need for PET/BMT is established by the current summaries alone.", sources: ["Departmental_Protocols_and_Overlap_Matrix.md", "dr. update ucd .docx", "MedicalLettersCollective…pdf"] },
  { id: "connective", title: "Mixed connective tissue & rheumatology", specialty: "Rheumatology", status: "Source request", scope: "MCTD and vasculitis are repeatedly described in advocacy materials alongside tissue, swelling, and inflammatory concerns.", review: "Review original diagnostic basis, ANA/ENA and other clinician-selected testing, examinations, organ records, and any pathology/imaging.", confirm: "Do not attribute masses, fluid shifts, or organ findings to MCTD without clinician documentation.", sources: ["Pasted_content_19.txt", "Pasted_content_33.txt", "MedicalLettersCollective…pdf"] },
  { id: "endo", title: "Endocrine, mineral & adrenal", specialty: "Endocrinology", status: "Original report needed", scope: "Source materials reference STX16/PHP1b, calcium/PTH, vitamin-D pathways, cortisol 7.16 mcg/dL, and progesterone 0.3 ng/mL.", review: "Reconcile original genetic report, calcium, phosphorus, PTH, 25-OH/1,25-OH vitamin D, thyroid, and adrenal studies as clinically indicated.", confirm: "The site will not state that calcitriol, hormones, epinephrine, steroids, or HRT are categorically safe or unsafe without signed treating-team direction.", sources: ["Integrated_Body_System_Framework.md", "Pasted_content_32.txt", "Pasted_content_34.txt"] },
  { id: "metabolic", title: "Metabolic, methylation & detoxification", specialty: "Internal medicine / Clinical pharmacology", status: "Original report needed", scope: "Existing materials cite Genova and pharmacogenomic summaries and describe concerns about nutrient metabolism and medication response.", review: "Use original Genova/PGx reports, actual medication reactions, renal/hepatic function, and current pharmacy list for reconciliation.", confirm: "The current sources do not prove a global detoxification failure, metabolite buildup, or a universal medication ban.", sources: ["EVIDENCE_INTEGRATION_NOTES.md", "Integrated_Body_System_Framework.md"] },
  { id: "brain", title: "Brain, neuro & neurovascular", specialty: "Neurology / Neurovascular", status: "Original report needed", scope: "Existing material records history of neurological symptoms, prior trauma, and requests for brain/spine imaging. The newly visible scout is not brain imaging.", review: "Reconcile symptom chronology, neurological exams, original brain/cervical/thoracic reports, and targeted testing chosen by neurology.", confirm: "No brain calcification, tumor, seizure disorder, stroke, or cord compression is established by the current excerpts.", sources: ["Integrated_Body_System_Framework.md", "Providermemo(1).docx", "Pasted_content_33.txt"] },
  { id: "gi", title: "GI, nutrition & absorption", specialty: "Gastroenterology / Nutrition", status: "Charted excerpt", scope: "A provider message says the attached results had no significant abnormalities. The source narratives cite negative celiac serology and normal-range IgA.", review: "Review original celiac panel, symptoms, nutrition, motility testing, endoscopy/biopsies, and cancer-surveillance history.", confirm: "A normal IgA or negative celiac serology does not establish total GI paralysis, rule out all dietary issues, or prove need for IV therapy.", sources: ["Chart excerpt: IgA message", "Pasted_content_35.txt", "Mandated_Labs_Surveillance_Referrals.md"] },
  { id: "oncology", title: "Oncology, genetics & pathology", specialty: "Genetics / Oncology", status: "Original report needed", scope: "Existing framework references PMS2/Lynch and surveillance requests. Multiple source narratives request tissue review and imaging correlation.", review: "Review original Variantyx/Invitae result, family history, prior pathology, and evidence-based surveillance planning.", confirm: "No mass is malignant, recurrent, or genetically caused without signed imaging/pathology confirmation.", sources: ["Integrated_Body_System_Framework.md", "Mandated_Labs_Surveillance_Referrals.md"] },
  { id: "radiology", title: "Radiology, masses & pathology workflow", specialty: "Radiology / Surgical pathology", status: "Charted excerpt", scope: "The accessible metadata identifies a CT abdomen/pelvis with contrast on Aug. 5, 2026. Source narratives request imaging correlation and soft-tissue review.", review: "Obtain final signed report and relevant ultrasound/DICOM records; direct questions through ordering or treating team.", confirm: "A scout/topogram cannot confirm masses, fluid, calcification, bowel motility, or any final imaging finding.", sources: ["Clipboard_0_2766E783.png", "Pasted_content_25.txt", "Pasted_content_27.txt"] },
  { id: "eye", title: "Eye & ophthalmology", specialty: "Ophthalmology", status: "Original report needed", scope: "Existing framework references glaucoma and ophthalmic surveillance, but no original eye records are visible in this audit set.", review: "Request prior eye examinations, visual fields, retinal imaging, and clinician-directed surveillance plan.", confirm: "No current ophthalmic diagnosis or monitoring interval is verified by the new source set.", sources: ["Integrated_Body_System_Framework.md", "Departmental_Protocols_and_Overlap_Matrix.md"] },
];

const statusStyle: Record<EvidenceStatus, string> = {
  "Charted excerpt": "bg-accent text-accent-foreground",
  "Original report needed": "bg-card text-accent border border-accent/50",
  "Source request": "bg-card text-foreground border border-border",
  "Educational screen": "bg-card text-muted-foreground border border-border",
};

export default function SystemEvidenceMap() {
  const [selected, setSelected] = useState(domains[0].id);
  const active = useMemo(() => domains.find((domain) => domain.id === selected) ?? domains[0], [selected]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-card border-b border-primary/40 py-2 px-4 text-center text-accent text-sm font-medium">
        EVIDENCE-LED REVIEW MAP — Source statements, chart excerpts, and clinician-confirmed findings are kept distinct.
      </div>
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:opacity-80 transition font-semibold"><ArrowLeft className="w-4 h-4" /> Medical Advocacy Hub</Link>
          <Link href="/mandated-labs" className="text-sm text-muted-foreground hover:text-accent transition">Labs & referrals</Link>
        </div>
      </nav>

      <main className="container max-w-7xl py-10 md:py-14 space-y-10">
        <section className="grid lg:grid-cols-[1.35fr_0.65fr] gap-8">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-accent"><Activity className="w-8 h-8" /><span className="uppercase tracking-[0.18em] text-xs font-semibold">Multi-system evidence control</span></div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.04] text-accent">Whole-body clinical-review map</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">Every requested domain is represented here—immune/BMT, bone, vascular, hematologic, kidney, liver, lung, connective tissue, endocrine, metabolic/mineral, detoxification, heart, brain, GI, oncology, radiology, and eye care. Each card names the responsible specialty, the exact current evidence state, and the original records still needed.</p>
          </div>
          <aside className="bg-card border border-border p-6 space-y-4">
            <div className="flex items-center gap-2 text-accent"><ShieldCheck className="w-5 h-5" /><h2 className="font-bold">Non-negotiable source rule</h2></div>
            <p className="text-sm text-muted-foreground">No source request, advocacy statement, educational screener, or scout image is promoted to a diagnosis, treatment order, medication ban, imaging result, or legal conclusion.</p>
            <div className="flex gap-4 flex-wrap"><Link href="/merge-hub" className="inline-flex text-sm font-semibold text-accent hover:underline">Open evidence intake →</Link><Link href="/source-vault" className="inline-flex text-sm font-semibold text-accent hover:underline">View source vault →</Link></div>
          </aside>
        </section>

        <section className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
          <div className="grid sm:grid-cols-2 gap-3">
            {domains.map((domain) => (
              <button key={domain.id} onClick={() => setSelected(domain.id)} className={`text-left p-4 border transition ${active.id === domain.id ? "bg-card border-accent" : "bg-card border-border hover:border-primary/60"}`}>
                <div className="flex items-start justify-between gap-3"><h2 className="font-semibold text-foreground leading-tight">{domain.title}</h2><span className={`text-[10px] px-2 py-1 rounded-sm whitespace-nowrap ${statusStyle[domain.status]}`}>{domain.status}</span></div>
                <p className="mt-2 text-xs text-muted-foreground">{domain.specialty}</p>
              </button>
            ))}
          </div>

          <article className="bg-card border border-border p-6 md:p-8 space-y-7" aria-live="polite">
            <div className="flex items-start gap-4"><div className="p-3 bg-accent/10 text-accent"><FileSearch className="w-6 h-6" /></div><div><p className="uppercase tracking-[0.16em] text-xs text-muted-foreground">Clinical-review domain</p><h2 className="text-3xl font-bold text-accent mt-1">{active.title}</h2><p className="text-sm text-muted-foreground mt-2">Responsible review: {active.specialty}</p></div></div>
            <div className="grid gap-5">
              <div><h3 className="text-sm font-semibold text-accent uppercase tracking-wide">What the accessible sources actually say</h3><p className="mt-2 text-foreground leading-relaxed">{active.scope}</p></div>
              <div className="border-t border-border pt-5"><h3 className="text-sm font-semibold text-accent uppercase tracking-wide">Best next review path</h3><p className="mt-2 text-muted-foreground leading-relaxed">{active.review}</p></div>
              <div className="border-t border-border pt-5"><div className="flex gap-2 items-center text-accent"><CircleAlert className="w-4 h-4" /><h3 className="text-sm font-semibold uppercase tracking-wide">What remains unconfirmed</h3></div><p className="mt-2 text-muted-foreground leading-relaxed">{active.confirm}</p></div>
              <div className="border-t border-border pt-5"><h3 className="text-sm font-semibold text-accent uppercase tracking-wide">Source trail</h3><div className="flex flex-wrap gap-2 mt-3">{active.sources.map((source) => <span key={source} className="text-xs bg-background border border-border px-2 py-1 text-muted-foreground">{source}</span>)}</div></div>
            </div>
          </article>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <div className="border border-border bg-card p-6"><Droplets className="w-6 h-6 text-accent" /><h2 className="mt-4 font-bold text-accent">Chart excerpts</h2><p className="mt-2 text-sm text-muted-foreground">Visible metadata and result excerpts are displayed as dated records only, with no over-interpretation.</p></div>
          <div className="border border-border bg-card p-6"><Microscope className="w-6 h-6 text-accent" /><h2 className="mt-4 font-bold text-accent">Original-record queue</h2><p className="mt-2 text-sm text-muted-foreground">Genetics, imaging, pathology, endocrine, immune, and specialty reports are queued for direct upload and clinician reconciliation.</p></div>
          <div className="border border-border bg-card p-6"><Building2 className="w-6 h-6 text-accent" /><h2 className="mt-4 font-bold text-accent">Care-coordination resources</h2><p className="mt-2 text-sm text-muted-foreground">The PATH guidance is preserved as general CalAIM/ECM implementation context, not proof of individual eligibility or a clinical directive.</p></div>
        </section>

        <section className="border border-border bg-card p-6 md:p-8">
          <div className="flex items-center gap-3"><Stethoscope className="w-6 h-6 text-accent" /><h2 className="text-2xl font-bold text-accent">Provider-ready path for every domain</h2></div>
          <ol className="grid md:grid-cols-4 gap-5 mt-6 text-sm text-muted-foreground">
            <li><strong className="block text-accent mb-2">1. Attach source</strong>Upload the original report or final signed study, not only a summary or screenshot.</li>
            <li><strong className="block text-accent mb-2">2. Assign owner</strong>Name the clinician or specialty responsible for interpreting that source.</li>
            <li><strong className="block text-accent mb-2">3. Record decision</strong>Document accepted, modified, deferred, or declined monitoring requests and the rationale.</li>
            <li><strong className="block text-accent mb-2">4. Close the loop</strong>Record follow-up date, result trigger, and the next coordination step.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
