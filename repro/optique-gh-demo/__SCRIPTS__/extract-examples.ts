import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, dirname } from "node:path";

const NOTES_DIR = join(dirname(import.meta.dir), "__NOTES__");
const GH_HELP_DIR = join(NOTES_DIR, "gh-help");
const OUTPUT_FILE = join(NOTES_DIR, "examples.json");

interface Example {
  description: string | null;
  commands: string[];
}

type Examples = Record<string, Example[]>;

function filePathToCommand(filePath: string): string {
  const rel = relative(GH_HELP_DIR, filePath);
  // Normalize to forward slashes, strip .txt
  const normalized = rel.replace(/\\/g, "/").replace(/\.txt$/, "");
  if (normalized === "root") return "gh";
  return "gh " + normalized.replace("/", " ");
}

function parseExamples(content: string): Example[] {
  const examples: Example[] = [];
  const lines = content.split("\n");

  let inExamples = false;
  // Current block accumulates lines between blank lines
  let blockDescription: string | null = null;
  let blockCommands: string[] = [];

  function flushBlock() {
    if (blockCommands.length > 0) {
      examples.push({ description: blockDescription, commands: blockCommands });
    }
    blockDescription = null;
    blockCommands = [];
  }

  for (const line of lines) {
    // Section headers start at column 0 with an uppercase letter
    if (/^[A-Z]/.test(line)) {
      if (inExamples) flushBlock();
      inExamples = line.startsWith("EXAMPLES");
      continue;
    }

    if (!inExamples) continue;

    const trimmed = line.trim();
    if (trimmed === "") {
      // Blank line ends the current example block
      flushBlock();
    } else if (trimmed.startsWith("# ")) {
      // Description — only use the first one per block
      if (blockDescription === null) {
        blockDescription = trimmed.slice(2);
      }
    } else if (trimmed.startsWith("$ ")) {
      blockCommands.push(trimmed.slice(2));
    }
  }

  if (inExamples) flushBlock();

  return examples;
}

async function walkTxt(dir: string): Promise<string[]> {
  const files: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkTxt(fullPath)));
    } else if (entry.name.endsWith(".txt")) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = (await walkTxt(GH_HELP_DIR)).sort();
const result: Examples = {};

for (const file of files) {
  const command = filePathToCommand(file);
  const content = await readFile(file, "utf-8");
  const examples = parseExamples(content);
  if (examples.length > 0) {
    result[command] = examples;
  }
}

await writeFile(OUTPUT_FILE, JSON.stringify(result, null, 2));
console.log(`Wrote ${Object.keys(result).length} commands with examples to ${OUTPUT_FILE}`);
