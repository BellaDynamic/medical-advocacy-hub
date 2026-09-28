import { Link } from "wouter";
import { ArrowLeft, Bot, FileStack, HeartPulse, ListChecks, Scale, ShieldCheck } from "lucide-react";

type CaseTrack = {
  id: string;
  icon: typeof HeartPulse;
  name: string;
  scope: string;
  livePages: { label: string; href: string }[];
  sourceDocuments: string[];
  status: string;
};

const caseTracks: CaseTrack[] = [
  {
    id: "medical",
    icon: HeartPulse,
    name: "Medical care coordination",
    scope: "Diagnosis, genomic findings, multi-system surveillance, referrals, and treating-team decisions for Brandy Bianchini's complex/multi-system presentation.",
    livePages: [
      { label: "System map", href: "/system-map" },
      { label: "Labs & referrals", href: "/mandated-labs" },
      { label: "Genomic protocol", href: "/protocol" },
      { label: "VUS review", href: "/vus" },
      { label: "Safety firewall", href: "/safety" },
      { label: "Care coordination", href: "/coordination" },
      { label: "Clinical oversight", href: "/clinical-oversight" },
    ],
    sourceDocuments: [
      "Integrated_Body_System_Framework.md",
      "Departmental_Protocols_and_Overlap_Matrix.md",
      "Cross_Reference_Report_Existing_vs_Mandated.md",
      "MULTISYSTEM_COVERAGE_LEDGER.md",
      "Mandated_Labs_Surveillance_Referrals.md",
    ],
    status: "Active — indexed in System map with per-domain source traceability; treating-team confirmation required before any finding is final.",
  },
  {
    id: "legal",
    icon: Scale,
    name: "Legal & regulatory",
    scope: "Institutional complaint pathways (UCLA, DHCS, CDPH, Joint Commission), ADA/civil-rights concerns, and formal escalation filings.",
    livePages: [
      { label: "Institutional failures", href: "/failures" },
      { label: "Provider escalation", href: "/escalation" },
      { label: "Risk management & complaint filing", href: "/risk-management" },
    ],
    sourceDocuments: [
      "MASTER_ENFORCEMENT_DOCUMENT.md",
      "MASTER_INSTITUTIONAL_MANDATE.md",
      "Legal_Consultation_Memo_Brandy_Bianchini.docx (Source Vault — review with a qualified attorney before relying on it)",
      "sovereign_evidence_brief.md (quarantined pending original records and current legal review)",
    ],
    status: "Drafts only — legal-binding language in the master/enforcement documents and the sovereign evidence brief is quarantined pending a qualified attorney's review; nothing here has been filed or adjudicated.",
  },
  {
    id: "admin",
    icon: FileStack,
    name: "Administrative & benefits (Medi-Cal / NEMT / PCP)",
    scope: "Fee-for-service Medi-Cal transportation authorization, PCP certification and TAR filings, and reimbursement claims.",
    livePages: [{ label: "Source vault intake", href: "/source-vault" }],
    sourceDocuments: [
      "FFS_MEDI_CAL_REIMBURSEMENT_CHECKLIST.md",
      "MEDI_CAL_FFS_EXCUSE_BUSTER.md",
      "DHCS_NEMT_TECHNICAL_CODES.md",
      "PCP_TAR_FILING_DIRECTIVE_PRIMARY.md",
      "PCP_TAR_FILING_DIRECTIVE_ORGAN_DAMAGE.md",
      "PCP_Mandate_Letter.md",
      "EXPENSE_MANDATE_SUMMARY.md",
    ],
    status: "Reference checklists only — dollar figures, code citations, and \"mandatory\" framing in these files are the site's own drafted advocacy language, not a DHCS determination; verify current program rules before filing.",
  },
];

type AiSource = { name: string; capture: string; verificationNote: string };

const aiChatSources: AiSource[] = [
  {
    name: "GEMINI_GOOGLE_AI_BULK_EXPORT.md",
    capture: "The account-level Google Takeout procedure for pulling every Gemini/Google AI chat and NotebookLM notebook into a Drive archive, so long chat threads are preserved before anything is summarized.",
    verificationNote: "Process document, not evidence itself. Nothing is deleted from Gemini until the archive is downloaded and checked.",
  },
  {
    name: "sovereign_evidence_brief.md",
    capture: "An AI-compiled evidence brief (summary supplied; full file pending) synthesizing lab, multi-system, timeline, and administrative topics.",
    verificationNote: "Catalogued in Source Vault as \"Summary only.\" Lab/timeline/administrative topics are preserved as review prompts; blanket medication, saline, anesthesia, steroid, opioid, and legal-binding claims stay quarantined pending original records and current clinician/legal confirmation.",
  },
  {
    name: "research_notes_uploaded_evidence_2026-07-27.md",
    capture: "Extraction notes from uploaded source PDFs (e.g. the July 2025 \"Comprehensive Medical Evidence Package\"), listing genetic and pathway findings as reported in that document.",
    verificationNote: "Reflects what an uploaded document states, not an independent clinical confirmation. Cross-check against the original PDF and current treating-team review.",
  },
  {
    name: "Pasted_content_02.txt and Pasted_content_19–36.txt",
    capture: "Chat-supplied transcripts and working material carried over from prior AI-assisted sessions.",
    verificationNote: "Indexed by the evidence ledger and, for Pasted_content_02, worked into the Coordination Record review queue. Claims require original-record reconciliation before they count as findings.",
  },
];

export default function MasterCaseOrganization() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-card border-b border-primary/40 py-2 px-4 text-center text-accent text-sm font-medium">
        MASTER CASE INDEX — Organizes existing material only; nothing is deleted, and nothing here is a clinical, legal, or eligibility determination.
      </div>
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:opacity-80 transition font-semibold"><ArrowLeft className="w-4 h-4" /> Medical Advocacy Hub</Link>
          <Link href="/source-vault" className="text-sm text-muted-foreground hover:text-accent transition">Source vault</Link>
        </div>
      </nav>

      <main className="container max-w-6xl py-10 md:py-14 space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-accent"><ListChecks className="w-8 h-8" /><span className="uppercase tracking-[0.18em] text-xs font-semibold">Master case organization</span></div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.04] text-accent">One person, three coordinated case tracks.</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">This page is a curated index, not a new record. It groups the site's existing medical, legal, and administrative material into three case tracks for Brandy Bianchini, and pulls the Google AI/Gemini chat material into its own clearly-labeled section so AI-assisted research stays visibly separate from verified evidence. Every source document and page linked below already exists in the repository and Source Vault — this index reorganizes references; it does not remove, rewrite, or replace anything.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-accent">Case tracks</h2>
          <div className="grid lg:grid-cols-3 gap-5">
            {caseTracks.map((track) => {
              const Icon = track.icon;
              return (
                <article key={track.id} className="bg-card border border-border p-6 space-y-4">
                  <div className="flex items-center gap-2 text-accent"><Icon className="w-6 h-6" /><h3 className="font-bold text-lg">{track.name}</h3></div>
                  <p className="text-sm text-muted-foreground">{track.scope}</p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">Live pages</p>
                    <ul className="mt-2 space-y-1">
                      {track.livePages.map((page) => (
                        <li key={page.href}><Link href={page.href} className="text-sm text-accent hover:underline">{page.label} →</Link></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">Source documents</p>
                    <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                      {track.sourceDocuments.map((doc) => <li key={doc}>{doc}</li>)}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border pt-3"><span className="font-semibold text-foreground">Status: </span>{track.status}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3"><Bot className="w-7 h-7 text-accent" /><h2 className="text-2xl font-bold text-accent">Google AI / Gemini chat curation</h2></div>
          <p className="text-muted-foreground max-w-3xl">Material that originated in a Gemini/Google AI chat or was compiled by an AI assistant is tracked separately from verified sources so it is never silently upgraded to a clinical, legal, or administrative finding. Each row below stays open until the referenced original record is attached and reviewed.</p>
          <div className="overflow-x-auto border border-border bg-card">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead className="bg-background text-accent uppercase tracking-wider text-xs">
                <tr><th className="p-4">AI-chat-derived source</th><th className="p-4">What it captures</th><th className="p-4">Verification note</th></tr>
              </thead>
              <tbody>
                {aiChatSources.map((source) => (
                  <tr key={source.name} className="border-t border-border align-top">
                    <td className="p-4 font-medium text-foreground">{source.name}</td>
                    <td className="p-4 text-muted-foreground">{source.capture}</td>
                    <td className="p-4 text-muted-foreground">{source.verificationNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">To bring in the rest of the Gemini/Google AI chat corpus, follow the bulk-export steps already documented in <span className="text-foreground font-medium">GEMINI_GOOGLE_AI_BULK_EXPORT.md</span>: a full Google Takeout of Gemini Apps activity, preserved as raw HTML, then indexed here by chat title, date range, and verification status — never rewritten into new summaries before the raw archive is preserved.</p>
        </section>

        <section className="border border-border bg-card p-6 md:p-8">
          <div className="flex gap-3"><ShieldCheck className="w-6 h-6 text-accent flex-shrink-0" /><div>
            <h2 className="text-2xl font-bold text-accent">Competency ledger</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">A case track is "verification-ready" only when: (1) the claim traces to a signed original record — lab, imaging, pathology, genetics, payer determination, or legal filing — not a summary or AI-compiled brief; (2) a named clinician, attorney, or administrative owner has reviewed it; and (3) the next action and its owner are recorded. Today, the medical-care track has the most original-record traceability (System map, Labs & referrals); the legal and administrative tracks still hold drafted advocacy language that requires an attorney's and, for benefits filings, DHCS's own review before it is relied on as a determination.</p>
          </div></div>
        </section>
      </main>
    </div>
  );
}
