#!/usr/bin/env node

// analysers
import { checkVariableNames } from "./src/analysers/naming.js";
import { checkFileLength } from "./src/analysers/length.js";
import { checkDuplicates } from "./src/analysers/duplicates.js";
import { checkVariableStyle } from "./src/analysers/variableStyle.js";

import { handleError } from "./src/errors.js";
import { readFileSync } from "fs";

// Meddelanden
import { passive } from "./src/messages/passive.js";
import { serious } from "./src/messages/serious.js";

// Formattering
import { printResults } from "./src/output/formatter.js";

import { Command } from "commander";
import { checkCssSelectors } from "./src/analysers/cssSelectors.js";

const program = new Command();

program
  .name("squidward")
  .description("A code analysis tool")
  .argument("<file>", "file to analyse")
  .option(
    "--serious",
    "use serious messages. Default is passive aggressive mode",
  )
  .parse(process.argv);

const file = program.args[0];
const options = program.opts();
const mode = options.serious ? "serious" : "passive";

let code;
try {
  code = readFileSync(file, "utf-8");
} catch {
  handleError(`File not found or unreadable: ${file}`);
}

if (!code.trim()) {
  handleError("File is empty.");
}

const allResults = [
  ...checkFileLength(code),
  ...checkVariableNames(code),
  ...checkDuplicates(code),
  ...checkCssSelectors(code),
  ...checkVariableStyle(code),
];

allResults.forEach((result) => {
  if (result.type === "length") {
    result.passiveMessage = passive.tooLongFile(file, result.lines);
    result.seriousMessage = serious.tooLongFile(file, result.lines);
  }

  if (result.type === "naming") {
    result.passiveMessage = passive.badVariableName(
      result.name,
      result.line,
      result.reason,
    );
    result.seriousMessage = serious.badVariableName(
      result.name,
      result.line,
      result.reason,
    );
  }

  if (result.type === "duplication") {
    result.passiveMessage = passive.duplicateCode(result.lines);
    result.seriousMessage = serious.duplicateCode(result.lines);
  }

  if (result.type === "css-selectors") {
    result.passiveMessage = passive.checkCssSelectors(result.ratio);
    result.seriousMessage = serious.checkCssSelectors(
      result.ratio,
      result.totalSelectors,
      result.classSelectors,
    );
  }
});

printResults(allResults, mode);
