import { readFileSync, readdirSync, statSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { join } from "node:path";

function collectSourceFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? collectSourceFiles(path) : path;
  });
}

describe("color system", () => {
  it("keeps the site free of saturated red/blue utility tokens", () => {
    const sourceRoot = join(process.cwd(), "client", "src");
    const files = collectSourceFiles(sourceRoot).filter((file) => /\.(tsx|ts|css)$/.test(file));
    const contents = files.map((file) => readFileSync(file, "utf8")).join("\n");

    expect(contents).not.toMatch(/(?:text|bg|border)-(?:red|blue|purple|violet|indigo|yellow|amber)-/);
    expect(contents).not.toMatch(/oklch\([^)]* (260|280|300|25)\)/);
    expect(contents).toContain("--color-background: oklch(0.12 0.025 315)");
    expect(contents).toContain("--color-accent: oklch(0.8 0.03 85)");
  });

  it("preserves the archival warning and rescue quarantine notice", () => {
    const home = readFileSync(join(process.cwd(), "client", "src", "pages", "Home.tsx"), "utf8");
    const rescue = readFileSync(join(process.cwd(), "client", "src", "pages", "RescueProtocol.tsx"), "utf8");

    expect(home).toContain("EVIDENCE-LED DRAFT");
    expect(home).toContain("Earlier acute/saline rescue content remains quarantined");
    expect(rescue).toContain("ARCHIVED / SUPERSEDED");
    expect(rescue).toContain("must NOT be used as a general clinical directive");
  });

  it("includes the Content Merge Hub page and document upload workflow with text extraction", () => {
    const mergeHub = readFileSync(join(process.cwd(), "client", "src", "pages", "ContentMergeHub.tsx"), "utf8");
    const routers = readFileSync(join(process.cwd(), "server", "routers.ts"), "utf8");
    expect(mergeHub).toContain("Content Merge & Revision Hub");
    expect(mergeHub).toContain("Extracted Text Review");
    expect(mergeHub).toContain("Review Text");
    expect(routers).toContain("documents: router({");
    expect(routers).toContain("upload:");
    expect(routers).toContain("extractText:");
  });

  it("registers the merge-hub route in App.tsx and links it in Home.tsx", () => {
    const app = readFileSync(join(process.cwd(), "client", "src", "App.tsx"), "utf8");
    const home = readFileSync(join(process.cwd(), "client", "src", "pages", "Home.tsx"), "utf8");

    expect(app).toContain('path={"/merge-hub"}');
    expect(home).toContain('href="/merge-hub"');
  });

  it("includes a source-led mandated labs page with clinician-review safeguards", () => {
    const page = readFileSync(join(process.cwd(), "client", "src", "pages", "MandatedLabs.tsx"), "utf8");
    const app = readFileSync(join(process.cwd(), "client", "src", "App.tsx"), "utf8");
    const home = readFileSync(join(process.cwd(), "client", "src", "pages", "Home.tsx"), "utf8");

    expect(page).toContain("Labs, surveillance & referral map");
    expect(page).toContain("Clinical verification is required");
    expect(page).toContain("Mandated_Labs_Surveillance_Referrals.md");
    expect(page).toContain("A clinician determines");
    expect(page).toContain("Whole-body coverage index");
    expect(page).toContain("Hematology, BMT & bleeding");
    expect(app).toContain('path={"/mandated-labs"}');
    expect(home).toContain('href="/mandated-labs"');
  });

  it("includes every required domain in the source-led multi-system evidence map", () => {
    const page = readFileSync(join(process.cwd(), "client", "src", "pages", "SystemEvidenceMap.tsx"), "utf8");
    const app = readFileSync(join(process.cwd(), "client", "src", "App.tsx"), "utf8");
    const home = readFileSync(join(process.cwd(), "client", "src", "pages", "Home.tsx"), "utf8");

    [
      "Hematology, BMT & bleeding",
      "Immune, lymphatic & BMT overlap",
      "Kidney & nephrology",
      "Liver, lipid & hepatology",
      "Lung & pulmonary",
      "Heart & vascular",
      "Bone, spine & musculoskeletal",
      "Mixed connective tissue & rheumatology",
      "Endocrine, mineral & adrenal",
      "Metabolic, methylation & detoxification",
      "Brain, neuro & neurovascular",
      "GI, nutrition & absorption",
      "Oncology, genetics & pathology",
      "Radiology, masses & pathology workflow",
      "Eye & ophthalmology",
    ].forEach((domain) => expect(page).toContain(domain));

    expect(page).toContain("No source request, advocacy statement, educational screener, or scout image");
    expect(app).toContain('path={"/system-map"}');
    expect(home).toContain('href="/system-map"');
  });

  it("keeps the source vault and home page evidence-led", () => {
    const vault = readFileSync(join(process.cwd(), "client", "src", "pages", "SourceVault.tsx"), "utf8");
    const home = readFileSync(join(process.cwd(), "client", "src", "pages", "Home.tsx"), "utf8");
    const app = readFileSync(join(process.cwd(), "client", "src", "App.tsx"), "utf8");

    expect(vault).toContain("PATH / CalAIM / ECM");
    expect(vault).toContain("SMF resources");
    expect(vault).toContain("not defined in the currently indexed sources");
    expect(vault).toContain("Open secure evidence intake");
    expect(vault).toContain("sovereign_evidence_brief.md");
    expect(vault).toContain("Summary only");
    expect(home).toContain("Evidence first. Whole-person review. Clear ownership.");
    expect(home).toContain("does not independently diagnose, prescribe, grant eligibility, or make legal findings");
    expect(home).not.toContain("MANDATORY SYSTEM DIRECTIVE");
    expect(app).toContain('path={"/source-vault"}');
  });
});
