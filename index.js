#!/usr/bin/env node

// analysers
import { checkVariableNames } from "./src/analysers/naming.js";
import { checkFileLength } from "./src/analysers/length.js";
// import { checkDuplications } from "./src/analysers/duplication.js";
// import { checkTodos } from "./src/analysers/todos.js";

import { readFileSync } from "fs";
// import { argv } from "process"; kan tas bort snart
import { Command } from "commander";

// Meddelanden
import { passive } from "./src/messages/passive.js";
import { serious } from "./src/messages/serious.js";

// Formattering
import { printResults } from "./src/output/formatter.js";

const program = new Command();

program
  .name("squidward")
  .description("A code analysis tool")
  .argument("<file>", "file to analyse")
  .option("--serious", "use serious messages instead of passive")
  .parse(process.argv);

const file = program.args[0];
const options = program.opts();
const mode = options.serious ? "serious" : "passive";

let code;
try {
  code = readFileSync(file, "utf-8");
} catch {
  console.log("File not found or unreadable.");
  process.exit(1);
}

const allResults = [...checkFileLength(code), ...checkVariableNames(code)];

allResults.forEach((r) => {
  if (r.type === "length") {
    r.passiveMessage = passive.tooLongFile(file, r.lines);
    r.seriousMessage = serious.tooLongFile(file, r.lines);
  }

  if (r.type === "naming") {
    r.passiveMessage = passive.badVariableName(r.name);
    r.seriousMessage = serious.badVariableName(r.name);
  }
});

printResults(allResults, mode);
