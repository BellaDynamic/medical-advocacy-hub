import { Link } from "wouter";
import { ArrowLeft, ClipboardCheck, FileWarning, FolderSearch, ShieldCheck } from "lucide-react";

type QueueItem = {
  number: string;
  title: string;
  reported: string;
  required: string;
  owner: string;
};

const queue: QueueItem[] = [
  {
    number: "01",
    title: "Medication access and authorization",
    reported: "The transcript reports repeated calls about a GI-related prescription, pharmacy paperwork, and a difference between portal messaging and the pharmacy or payer outcome.",
    required: "Prescribing order, pharmacy rejection or claim-response record, payer authorization determination, submitted authorization request, and dated provider or staff communication.",
    owner: "Prescribing clinician, pharmacy, payer authorization unit, and care coordinator.",
  },
  {
    number: "02",
    title: "Imaging scope and result discussion",
    reported: "The transcript reports uncertainty about the ordered imaging scope, result discussion, and follow-up responsibility after a provider transition.",
    required: "Signed imaging order, final radiology report, image-access record, referring visit note, and the documented clinician discussion or follow-up plan.",
    owner: "Ordering clinician, radiology records, receiving clinician, and care coordinator.",
  },
  {
    number: "03",
    title: "Transfer of care and referral continuity",
    reported: "The transcript describes a reported provider departure or reassignment, unresolved messaging access, and a request for a bridge plan while referrals are reconciled.",
    required: "Current primary-care assignment, transfer note, active referral list with status, appointment history, contact record, and written transition plan.",
    owner: "Primary-care office leadership, receiving clinician, referral staff, and patient-experience liaison.",
  },
  {
    number: "04",
    title: "Travel and specialty-access coordination",
    reported: "The transcript describes recurring travel for specialty care and asks for clarification of transportation authorization and appointment coordination.",
    required: "Current coverage type, appointment schedule, current transportation policy, required authorization form, provider certification where applicable, and payer determination.",
    owner: "Payer transportation team, treating specialty office, primary-care coordinator, and patient or authorized representative.",
  },
  {
    number: "05",
    title: "Reported lesion or tissue concerns",
    reported: "The transcript reports past excision history and current concern about chest or axillary tissue changes, along with a request for coordinated specialty review.",
    required: "Prior operative report, pathology report, final imaging reports, current clinician examination, referral documentation, and any treating-team decision about next evaluation.",
    owner: "Treating clinician, dermatology or surgical specialty as clinically appropriate, radiology, pathology records, and care coordinator.",
  },
];

export default function CoordinationRecord() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-card px-4 py-2 text-center text-xs font-medium tracking-[0.12em] text-accent">
        PRIVATE WORKING RECORD — Patient-reported transcript; items below require source verification.
      </div>
      <nav className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="container flex items-center justify-between gap-4 py-4">
          <Link href="/source-vault" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-80"><ArrowLeft className="h-4 w-4" /> Source vault</Link>
          <Link href="/merge-hub" className="text-sm font-semibold text-accent hover:opacity-80">Add original record →</Link>
        </div>
      </nav>

      <main className="container max-w-6xl space-y-10 py-10 md:py-14">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-accent"><ClipboardCheck className="h-7 w-7" /><span className="text-xs font-semibold uppercase tracking-[0.2em]">Care-coordination record</span></div>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.04] text-accent md:text-6xl">Reported barriers, organized into records that can be checked.</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">This page translates the supplied patient-experience transcript into a review queue. It preserves what was reported, identifies the original records needed, and assigns the next appropriate owner. It does not decide what happened, make a diagnosis, or determine fault.</p>
          </div>
          <aside className="border border-border bg-card p-6"><div className="flex items-center gap-2 text-accent"><FileWarning className="h-5 w-5" /><h2 className="font-bold">Evidence boundary</h2></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">A transcript may document a request, concern, or communication experience. It does not replace a final report, payer determination, signed order, clinician assessment, or legal finding. Each record stays open until originals are attached and reviewed.</p></aside>
        </section>

        <section className="space-y-3">
          {queue.map((item) => <article key={item.number} className="grid gap-5 border-t border-border py-7 md:grid-cols-[100px_1fr_1fr] md:gap-8"><div className="text-sm font-semibold tracking-[0.18em] text-accent">{item.number}</div><div><h2 className="text-xl font-bold text-accent">{item.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Reported in transcript: </span>{item.reported}</p></div><div className="space-y-4"><p className="text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Originals to attach: </span>{item.required}</p><p className="text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Review owner: </span>{item.owner}</p></div></article>)}
        </section>

        <section className="grid gap-4 md:grid-cols-2"><div className="border border-border bg-card p-6"><FolderSearch className="h-6 w-6 text-accent" /><h2 className="mt-4 text-xl font-bold text-accent">How to close a queue item</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Attach the controlling document in Merge Hub, note its source and date, name the reviewing specialty or administrative owner, and record the response or next action. Do not overwrite the patient-reported history.</p></div><div className="border border-border bg-card p-6"><ShieldCheck className="h-6 w-6 text-accent" /><h2 className="mt-4 text-xl font-bold text-accent">Escalation boundary</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Concerns about communication, access, or care continuity remain documented as reported barriers until the relevant record, policy, response, and qualified review are attached. This preserves the record without presenting an allegation as an adjudicated conclusion.</p></div></section>
      </main>
    </div>
  );
}
