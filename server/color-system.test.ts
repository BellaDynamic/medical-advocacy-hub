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

    expect(home).toContain("ARCHIVAL DRAFT");
    expect(home).toContain("Outdated acute/saline rescue protocols have been quarantined");
    expect(rescue).toContain("ARCHIVED / SUPERSEDED");
    expect(rescue).toContain("must NOT be used as a general clinical directive");
  });
});
