// Alla analysers
import { checkVariableNames } from "./src/analysers/naming.js";
import {
  checkFileLength,
} from "./src/analysers/length.js";
// import { checkDuplications } from "./src/analysers/duplication.js";
// import { checkTodos } from "./src/analysers/todos.js";


import { readFileSync } from "fs";
import { argv } from "process";


// Meddelanden
import { passive } from "./src/messages/passive.js";
import { serious } from "./src/messages/serious.js";

// Formattering
import { printResults } from "./src/output/formatter.js";

const mode = argv.includes("--serious") ? "serious" : "passive";
const file = argv[2];

if (!file) {
  console.log("Please provide a file to analyse.");
  process.exit(1);
}

let code;
try {
  code = readFileSync(file, "utf-8");
} catch {
  console.log("File not found or unreadable.");
  process.exit(1);
}

const allResults = [
    ...checkFileLength(code),
    ...checkVariableNames(code)
];

allResults.forEach((r) => {
  if (r.type === 'length') {
    r.passiveMessage = passive.tooLongFile(file, r.lines);
    r.seriousMessage = serious.tooLongFile(file, r.lines);
  }

  if (r.type === 'naming') {
    r.passiveMessage = passive.badVariableName(r.name)
    r.seriousMessage = serious.badVariableName(r.name)

  }
})

printResults(allResults, mode)